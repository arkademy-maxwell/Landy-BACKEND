const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const airlinesControllers = require("../controllers/airlines");

Route
    .get("/",  airlinesControllers.getAllAirlines)
    .post("/",  airlinesControllers.addAirlines)
    .put('/:id',  airlinesControllers.updateAirlines)
    .delete('/:id',  airlinesControllers.deleteAirlines)
  

module.exports = Route;
