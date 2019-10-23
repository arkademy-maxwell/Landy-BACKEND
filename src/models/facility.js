const conn = require("../config/databaase/database");

module.exports = {
  getFacility: () => {
    return new Promise((resolve, reject) => {
      conn.query("SELECT * from facility", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  getByName: facility => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT COUNT(id) AS facility FROM facility WHERE facility = ?",
        [facility],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  addFacility: data => {
    return new Promise((resolve, reject) => {
      conn.query("INSERT INTO facility SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  updateFacility: data => {
    return new Promise((resolve, reject) => {
      conn.query("UPDATE facility SET ? WHERE ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  deleteFacility: data => {
    return new Promise((resolve, reject) => {
      conn.query("DELETE from facility where id=?", [data], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  }
};
