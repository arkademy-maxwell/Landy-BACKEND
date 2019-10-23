const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const insuranceController = require("../controllers/insuranceFlight");

Route
  .get("/", insuranceController.getInsuranceFlight)
  .post("/", authentication.jwtToken, insuranceController.addInsuranceFlight)
  .put('/:id', authentication.jwtToken, insuranceController.updateInsuranceFlight)
  .delete('/:id', authentication.jwtToken, insuranceController.deleteInsuranceFlight)


module.exports = Route;
