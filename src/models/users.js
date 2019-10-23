const conn = require("../config/databaase/database");
const bcrypt = require("bcryptjs");

module.exports = {
  getAllUsers: () => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT users.id,title.name title ,users.first_name,users.last_name,users.phone_number,users.email FROM users JOIN title ON users.title_id = title.id",
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
  // updatePassword: passwordNotHash => {
  //   return new Promise((resolve, reject) => {
  //     bcrypt.hash(passwordNotHash, 10, (err, password) => {
  //       if (err) return reject(err);
  //       const data = {
  //         password
  //       };
  //       conn.query("UPDATE users SET ? WHERE id = ?", data, (err, result) => {
  //         if (!err) {
  //           resolve(result);
  //         } else {
  //           reject(err);
  //         }
  //       });
  //     });
  //   });
  // }
};
