const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const flightTransactionController = require("../controllers/flightTransaction");

Route
    .get("/",  flightTransactionController.getAllFlightTransaction)
    .post("/",  flightTransactionController.addFlightTransaction)
    .put('/:id',  flightTransactionController.updateFlightTransaction)
    .delete('/:id',  flightTransactionController.deleteFlightTransaction)
  

module.exports = Route;
