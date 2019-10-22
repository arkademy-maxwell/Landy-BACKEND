const conn = require("../config/databaase/database");
<<<<<<< HEAD
const bcryptjs = require("bcryptjs");
=======
const bcrypt = require("bcryptjs");
>>>>>>> staging

module.exports = {
  getAllUsers: () => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT id,title,first_name,last_name,phone_number,email FROM users",
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
    title,
    first_name,
    last_name,
    phone_number,
    email,
    passwordNotHash
  ) => {
    return new Promise((resolve, reject) => {
      bcryptjs.hash(passwordNotHash, 10, (err, password) => {
        if (err) return reject(err);
        const data = {
          title,
          first_name,
          last_name,
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
  }
};
