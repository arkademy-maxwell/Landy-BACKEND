const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const airportController = require("../controllers/airport");

Route
  .get("/", airportController.getAirport)
  .post("/", authentication.jwtToken, airportController.addAirport)
  .put('/:id', authentication.jwtToken, airportController.UpdateAirport)
  .delete('/:id', authentication.jwtToken, airportController.deleteAirport)


module.exports = Route;
