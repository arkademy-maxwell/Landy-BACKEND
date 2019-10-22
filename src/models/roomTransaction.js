const conn = require("../config/databaase/database");

module.exports = {
  getRoomTransaction: () => {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT room_transaction.id, room_transaction.invoices, room_transaction.date_transaction,room_transaction.durations,room.price, room.room, room.quantity, facility.name FROM room_transaction LEFT JOIN room ON room_transaction.room_id = room.id LEFT JOIN facility on room.facility_id = facility.id`,
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
  addRoomTransaction: data => {
    return new Promise((resolve, reject) => {
      conn.query("INSERT INTO room_transaction SET ?", data, (err, result) => {
        if (!err) {
          resolve(data);
        } else {
          reject(new Error(err));
        }
      });
    });
  },

  updateRoomTransaction: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query(
        "select * from room_transaction where id = ?",
        id,
        (err, resultSelect) => {
          if (resultSelect.length > 0) {
            conn.query(
              "update room_transaction set ? where id = ?",
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
        }
      );
    });
  },

  deleteRoomTransaction: data => {
    return new Promise((resolve, reject) => {
      conn.query(
        "DELETE from room_transaction where id=?",
        [data],
        (err, result) => {
          if (!err) {
            resolve(data);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  }
};
