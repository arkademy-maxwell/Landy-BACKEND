const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const customerInfotController = require("../controllers/customerInfo");

Route
  .get("/", customerInfotController.getCustomerInfo)
  .post("/", customerInfotController.addCustomerInfo)
  .put('/:id', customerInfotController.UpdateCustomerInfo)
  .delete('/:id', authentication.jwtToken, customerInfotController.deleteCustomerInfo)


module.exports = Route;
