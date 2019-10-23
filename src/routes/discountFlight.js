const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const discountFlightController = require("../controllers/discountFlight");

Route
  .get("/", discountFlightController.getDiscount)
  .post("/", authentication.jwtToken, discountFlightController.addDiscount)
  .put('/:id', authentication.jwtToken, discountFlightController.updateDiscount)
  .delete('/:id', authentication.jwtToken, discountFlightController.deleteDiscount)


module.exports = Route;
