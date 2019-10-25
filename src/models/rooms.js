const conn = require("../config/databaase/database");
const fs = require("fs"); // file system

module.exports = {
  getRoom: (search) => {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT room.*, album.image FROM room JOIN album ON room.id = album.room_id ${search ? `WHERE room LIKE '%${search}%'` : ""}`,
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
  getRoomSearch: (data) => {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM room ${data.search ? `WHERE room LIKE '%${data.search}%'` : ""} ${data.price_min ? `WHERE price BETWEEN '${data.price_min}' AND '${data.price_max}'` : ""} ${data.searchBed ? `WHERE bed_type LIKE '%${data.searchBed}%'` : ""} ${data.searchType ? `WHERE room_type LIKE '%${data.searchType}%'` : ""} ${data.sort ? ` ORDER by ${data.sort} ${data.sortBy}` : ''}`,
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

  getRoomSearchFacility: (searchFacility) => {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT room.*, room_facility.name FROM room JOIN room_facility ON room.id = room_facility.room_id ${searchFacility ? `WHERE room_facility.name LIKE '%${searchFacility}%'` : ""} `,
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
  getLocation: (search) => {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT room.id, room.locations FROM room ${search ? `WHERE locations LIKE '%${search}%'` : ""}`,
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
