const conn = require("../config/databaase/database");
const fs = require("fs"); // file system

module.exports = {
  getRoom: (search, limit, page = 1, room) => {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM room
            ${search ? `WHERE room.room LIKE '%${search}%'` : ""} ${
          room ? `ORDER BY ${room}` : ""
        } ${limit ? `LIMIT ${limit} OFFSET ${(page - 1) * limit}` : ""}`,
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
  getByName: room => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT COUNT(id) AS room FROM room WHERE room = ?",
        [room],
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
  getAll: () => {
    return new Promise((resolve, reject) => {
      conn.query("SELECT COUNT(id) as Amount FROM room", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  getById: id => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT * FROM room WHERE room.id = ?",
        [id],
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
  getDesc: room => {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT room.id, room.room, room.description,room.locations,room.address, room.price, room.quantity, album.image1, album.image2, album.image3, album.image4, album.image5 FROM room JOIN album ON room.album_id = album.id  ${
          room ? `ORDER BY ${room} DESC` : ""
        } `,
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
  addRoom: data => {
    return new Promise((resolve, reject) => {
      conn.query("INSERT INTO room SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  updateRoom: (data, id) => {
    console.log(data.image);
    return new Promise((resolve, reject) => {
      conn.query("SELECT * from room WHERE id = ?", id, (err, resultSelect) => {
        image = resultSelect[0].image;
        if (resultSelect.length > 0) {
          conn.query(
            "UPDATE room SET ? WHERE id = ?",
            [data, id],
            (err, result) => {
              if (!err) {
                resolve(result);
              } else {
                reject(err);
              }
            }
          );
        } else {
          reject("ID NOT FOUND!");
        }
      });
    });
  },

  // deleteRoom: id => {
  //   return new Promise((resolve, reject) => {
  //     conn.query("SELECT image FROM room WHERE ?", [id], (err, result) => {
  //       let image = result[0].image;
  //       conn.query("DELETE from room WHERE ?", [id], (err, result) => {
  //         if (!err) {
  //           if (image !== null) {
  //             fs.unlink(`./Assets/Images/${image}`, err => {
  //               if (err) {
  //                 console.log(err);
  //               } else {
  //                 result = "Image deleted!";
  //                 resolve(result);
  //               }
  //             });
  //           }
  //         } else {
  //           reject(new Error(err));
  //         }
  //       });
  //     });
  //   });
  // },
  deleteRoom: id => {
    return new Promise((resolve, reject) => {
      conn.query("DELETE FROM room WHERE ?", [id], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  reduceRoom: (id, quantity) => {
    return new Promise((resolve, reject) => {
      conn.query("SELECT * from room WHERE id = ?", id, (err, result) => {
        if (result.length >= 0) {
          const qty = result[0].quantity - quantity;
          if (qty >= 0) {
            conn.query(
              "UPDATE room SET quantity = ? WHERE id = ?",
              [qty, id],
              (err, update) => {
                if (!err) {
                  resolve(result);
                } else {
                  reject(new Error(err));
                }
              }
            );
          } else {
            reject(new Error(err));
          }
        } else {
          reject(new Error(err));
        }
      });
    });
  }
};
