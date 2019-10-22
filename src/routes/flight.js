const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const flightController = require("../controllers/flight");

Route
    .get("/",  flightController.getAllFlight)
    .post("/", authentication.jwtToken, flightController.addFlight)
    .put('/:id', authentication.jwtToken, flightController.updateFlight)
    .delete('/:id', authentication.jwtToken, flightController.deleteFlight)
  

module.exports = Route;
