const roomTransactionModel = require("../models/roomTransaction");
const uuid = require("uuid/v4");
const fs = require("fs");

module.exports = {
  getroomTransaction: (req, res) => {
    roomTransactionModel
      .getRoomTransaction()
      .then(async result => {
        res.json({
          status: 200,
          message: "Success View a Data!",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "Error View a Data!"
        });
      });
  },

  addRoomTransaction: (req, res) => {
    const invoices = Math.floor(Math.random() * 1000);
    const { id, durations, room_id, users_id } = req.body;
    const data = { id, invoices, durations, room_id, users_id };

    roomTransactionModel
      .addRoomTransaction(data)
      .then(result => {
        res.json({
          status: 200,
          message: "Suksess",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "error"
        });
      });
  },

  updateRoomTransaction: (req, res) => {
    const { durations, room_id, users_id } = req.body;
    const data = { durations, room_id, users_id };
    const id = req.params.id;

    roomTransactionModel
      .updateRoomTransaction(data, id)
      .then(result => {
        res.json({
          status: 200,
          message: "Suksess",
          data: result
        });
      })
      .catch(err => {
        res.json({
          status: 500,
          status: "Error"
        });
      });
  },
  deleteRoomTransaction: (req, res) => {
    roomTransactionModel
      .deleteRoomTransaction(req.params.id)
      .then(result => {
        res.json({
          status: 200,
          message: "Suksess",
          data: result
        });
      })
      .catch(err => {
        res.json({
          status: 500,
          message: "Error"
        });
      });
  }
};
