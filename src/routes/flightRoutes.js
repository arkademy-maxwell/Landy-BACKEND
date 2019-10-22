const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const flightRoutesController = require("../controllers/flightRoutes");

Route
  .get("/", flightRoutesController.getFlightRoutes)
  .post("/", authentication.jwtToken, flightRoutesController.addFlightRoutes)
  .put('/:id', authentication.jwtToken, flightRoutesController.updateFlightRoutes)
  .delete('/:id', authentication.jwtToken, flightRoutesController.deleteFlightRoutes)


module.exports = Route;
