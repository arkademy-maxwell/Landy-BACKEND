const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const roomCategory = require("../controllers/rooms");

Route.get("/", roomCategory.getRoom)
  .get("/desc", roomCategory.getDesc)
  .get("/:id", roomCategory.getById)
  .post("/", authentication.jwtToken, roomCategory.addRoom)
  .put("/:id", authentication.jwtToken, roomCategory.updateRoom)
  .delete("/:id", authentication.jwtToken, roomCategory.deleteRoom)
  .patch("/:id", authentication.jwtToken, roomCategory.reduceRoom);

module.exports = Route;
