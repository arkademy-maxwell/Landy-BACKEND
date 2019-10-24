const conn = require("../config/databaase/database");
const fs = require("fs");

module.exports = {
  getAlbum: () => {
    return new Promise((resolve, reject) => {
      conn.query("SELECT * FROM album ", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  addAlbum: data => {
    return new Promise((resolve, reject) => {
      conn.query(
        "INSERT INTO album (image, room_id) VALUES ?",
        [data],
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
  updateAlbum: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT * from album WHERE image = ?",
        id,
        (err, resultSelect) => {
          if (resultSelect.length > 0) {
            // Update Image
            conn.query(
              "UPDATE album SET ? WHERE image = ?",
              [data, id],
              (err, result) => {
                if (!err) {
                  if (fs.existsSync("Assets/Images/" + resultSelect[0].image))
                    fs.unlinkSync("Assets/Images/" + resultSelect[0].image);
                  resolve(result);
                } else {
                  reject(new Error(err));
                }
              }
            );
          } else {
            reject("ID NOT FOUND!");
          }
        }
      );
    });
  },

  deleteAlbum: id => {
    return new Promise((resolve, reject) => {
      conn.query("DELETE FROM album WHERE image = ?", id, (err, result) => {
        if (!err) {
          if (fs.existsSync("Assets/Images/" + id))
            fs.unlinkSync("Assets/Images/" + id);
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  }
};
