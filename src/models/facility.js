const conn = require("../config/databaase/database");
const fs = require("fs");

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
  updateFacility: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT image FROM facility where ?",
        id,
        (err, resultSelect) => {
          let image = resultSelect[0].image;
          conn.query(
            "UPDATE facility SET ? WHERE ?",
            [data, id],
            (err, result) => {
              if (!err) {
                if (data.image !== null && image !== null) {
                  fs.unlink(`./Assets/Icons/${image}`, err => {
                    if (err) {
                      console.log(err);
                    } else {
                      result = "Image deleted!";
                      resolve(result);
                    }
                  });
                }
              } else {
                reject(new Error(err));
              }
            }
          );
        }
      );
    });
  },
  deleteFacility: data => {
    return new Promise((resolve, reject) => {
      conn.query(
        "Select image from facility where id=?",
        [data],
        (err, resultSelect) => {
          let image = resultSelect[0].image;
          conn.query(
            "DELETE from facility where id=?",
            [data],
            (err, result) => {
              if (!err) {
                if (data.image !== null && image !== null) {
                  fs.unlink(`./Assets/Icons/${image}`, err => {
                    if (err) {
                      console.log(err);
                    } else {
                      result = "Image deleted!";
                      resolve(result);
                    }
                  });
                }
              } else {
                reject(new Error(err));
              }
            }
          );
        }
      );
    });
  }
};
