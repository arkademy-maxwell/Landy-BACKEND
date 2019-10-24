const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const flightTransactionDetailController = require("../controllers/flightTransactionDetail");

Route
  .get("/", flightTransactionDetailController.getAllFlightTransactionDetail)
  .post("/", flightTransactionDetailController.addFlightTransactionDetail)
  .put('/:id', flightTransactionDetailController.updateFlightTransactionDetail)
  .delete('/:id', flightTransactionDetailController.deleteFlightTransactionDetail)


module.exports = Route;
