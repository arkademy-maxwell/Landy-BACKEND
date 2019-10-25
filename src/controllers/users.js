const usersModel = require("../models/users");
const conn = require("../config/databaase/database");
const jwt = require("jsonwebtoken");
const config = require("../config/Auth/config");
const bcrypt = require("bcryptjs");
const Joi = require("joi");

module.exports = {
  login: (req, res) => {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
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
        (err, result) => {
          if (err) {
            return res.status(500).send({ err });
          }
          if (result.length < 1) {
            return res.json({
              success: 400,
              message: "Account not Found!"
            });
          }
          bcrypt.compare(password, result.password, (err, valid) => {
            if (err) return res.status(500).send({ err });
            if (valid) {
              const token = jwt.sign({ email: email }, config.secret, {
                expiresIn: "1h"
              });
              return res.json({
                success: 200,
                message: "Login success",
                username: result.username,
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
      phone_number: Joi.required(),
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
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
      phone_number,
      email,
      password
    } = result.value;

    usersModel
      .register(title_id, first_name, last_name, phone_number, email, password)
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
  }
};
