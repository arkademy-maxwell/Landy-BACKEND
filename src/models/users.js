const conn = require("../config/databaase/database");
const bcrypt = require("bcryptjs");
const QH = require('../utils/queryBuilder');
const TABLE = 'users';

module.exports = {
  getAllUsers: () => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT users.id,title.name title ,users.first_name,users.last_name,users.code,users.phone_number,users.email FROM users JOIN title ON users.title_id = title.id",
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  register: (
    title_id,
    first_name,
    last_name,
    code,
    phone_number,
    email,
    passwordNotHash
  ) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(passwordNotHash, 10, (err, password) => {
        if (err) return reject(err);
        const data = {
          title_id,
          first_name,
          last_name,
          code,
          phone_number,
          email,
          password
        };
        conn.query("INSERT INTO users SET ?", data, (err, res) => {
          if (!err) {
            resolve(res);
          } else {
            reject(err);
          }
        });
      });
    });
  },
  resetPassword: async (DATA, FILTER) => {
      try{
        await QH.updateData(TABLE, DATA, FILTER);
      }
      catch (err) {
        console.log(err)
      }
  }
};
