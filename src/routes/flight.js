const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const flightController = require("../controllers/flight");

Route
    .get("/",  flightController.getAllFlight)
    .post("/",  flightController.addFlight)
    .put('/:id',  flightController.updateFlight)
    .delete('/:id',  flightController.deleteFlight)
  

module.exports = Route;
