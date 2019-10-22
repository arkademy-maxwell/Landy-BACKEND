const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const flightFacilitiesController = require("../controllers/flightFacilities");

Route
    .get("/",  flightFacilitiesController.getAllFlightFacilities)
    .post("/",  flightFacilitiesController.addFlightFacilities)
    .put('/:id',  flightFacilitiesController.updateFlightFacilities)
    .delete('/:id',  flightFacilitiesController.deleteFlightFacilities)
  

module.exports = Route;
