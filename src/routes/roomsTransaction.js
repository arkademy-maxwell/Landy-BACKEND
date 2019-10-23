const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const roomTransactionControllers = require("../controllers/roomTransaction");

Route.get("/", roomTransactionControllers.getroomTransaction)
  .post("/", roomTransactionControllers.addRoomTransaction)
  .put("/:id", roomTransactionControllers.updateRoomTransaction)
  .delete("/:id", roomTransactionControllers.deleteRoomTransaction);
module.exports = Route;
