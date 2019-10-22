const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const facilityController = require("../controllers/facility");

Route.get("/", facilityController.getFacility)
  .post("/", authentication.jwtToken, facilityController.addFacility)
  .put("/:id", authentication.jwtToken, facilityController.updateFacility)
  .delete("/:id", authentication.jwtToken, facilityController.deleteFacility);

module.exports = Route;
