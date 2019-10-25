const usersModel = require("../models/users");
const conn = require("../config/databaase/database");
const jwt = require("jsonwebtoken");
const config = require("../config/Auth/config");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const QH = require("../utils/queryBuilder");
const crypto = require("crypto");
const sms = require("../config/Nexmo");

module.exports = {
  login: (req, res) => {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email({
          minDomainAtoms: 2
        })
        .required(),
      password: Joi.string().required()
    });

    const result = Joi.validate(req.body, schema);

    if (result.error) {
      return res.status(400).send({
        status: 400,
        message: result.error.details[0].message
      });
    }

    const { email, password } = result.value;
    if (email && password) {
      conn.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, [result]) => {
          if (!result) {
            return res.json({
              success: 400,
              message: "Account not Found!"
            });
          }
          bcrypt.compare(password, result.password, (err, valid) => {
            if (valid) {
              const token = jwt.sign(
                {
                  email: email
                },
                config.secret,
                {
                  expiresIn: "1h"
                }
              );
              return res.json({
                success: 200,
                message: "Login success",
                username: result.username,
                name: result.first_name + " " + result.last_name,
                email: email,
                token: token
              });
            }
            res.json({
              success: 403,
              message: "Your password invalid"
            });
          });
        }
      );
    } else {
      res.json({
        success: 400,
        message: "Please insert user and paswword"
      });
    }
  },
  getAllUsers: (req, res) => {
    usersModel
      .getAllUsers()
      .then(result => {
        res.json({
          status: 200,
          message: "Success Viewing Users!",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "Error Viewing Users!"
        });
      });
  },
  register: (req, res) => {
    const schema = Joi.object().keys({
      title_id: Joi.string()
        .min(1)
        .max(30)
        .required(),
      first_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      last_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      code: Joi.required(),
      phone_number: Joi.required(),
      email: Joi.string()
        .email({
          minDomainAtoms: 2
        })
        .required(),
      password: Joi.string().required()
    });

    const result = Joi.validate(req.body, schema);

    if (result.error) {
      return res.status(400).send({
        status: 400,
        message: result.error.details[0].message
      });
    }

    const {
      title_id,
      first_name,
      last_name,
      code,
      phone_number,
      email,
      password
    } = result.value;

    usersModel
      .register(
        title_id,
        first_name,
        last_name,
        code,
        phone_number,
        email,
        password
      )
      .then(result => {
        res.json({
          status: 200,
          message: "Registration Success",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          status: 500,
          message: "Registration Failed, Because Duplicate Email "
        });
      });
  },
  resetPassword: async (req, res) => {
    const { email } = req.body;
    const [searchUserName] = await QH.findWhere("users", {
      email
    });
    if (searchUserName) {
      const generateActivationKey = await crypto
        .randomBytes(32)
        .toString("hex");
      try {
        const data = {
          activation_key: generateActivationKey,
          date_req_activation_key: new Date()
        };
        const email = {
          email: searchUserName.email
        };
        const updateActivationKey = await usersModel.resetPassword(data, email);
        if (updateActivationKey.affectedRows === 0) {
          return res.status(403).json({
            status: 403,
            message: "Can't reset password, contact administrator."
          });
        }
      } catch (err) {
        console.log(err);
      }
      const from = "Landy Help";
      const to = +6282138288669;
      const text =
        "Password untuk Landy anda telah direset, untuk mengubah password silahkan masuk link berikut : " +
        generateActivationKey +
        ". Jika anda tidak merasa melakukan reset password abaikan pesan ini atau hubungi CS kami.";

      sms.message.sendSms(from, to, text, (err, response) => {
        if (response.messages[0]["status"] === "0") {
          return res.status(200).json({
            status: 201,
            message:
              "Authentication Key Success Send To Your Number, Please Check Inbox."
          });
        }
      });
    } else {
      return res.status(404).json({
        status: 404,
        message: "Email Not Exist In Database"
      });
    }
  },
  verifyPassword: async (req, res) => {
    const { activation_key, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);
    const data = {activation_key: null, password: passwordHash, updated_date: new Date()};
    const isExistActivationKey = await QH.findWhere("users", {activation_key});
    if (isExistActivationKey.length > 0) {
      await usersModel.resetPassword(data, {activation_key});
        return res.status(201).json({
          status: 201,
          message: "Password changed successfully",
        });
    } else {
      res.status(404).json({
        status: 403,
        message: "Activation Key Is Invalid"
      });
    }
  }
};
