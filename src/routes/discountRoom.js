const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const discountRoomController = require("../controllers/discountRoom");

Route
  .get("/", discountRoomController.getDiscount)
  .post("/", authentication.jwtToken, discountRoomController.addDiscount)
  .put('/:id', authentication.jwtToken, discountRoomController.updateDiscount)
  .delete('/:id', authentication.jwtToken, discountRoomController.deleteDiscount)


module.exports = Route;
