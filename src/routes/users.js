const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const usersController = require("../controllers/users");

Route.get("/", authentication.jwtToken, usersController.getAllUsers)
  .post("/login", usersController.login)
  .post("/register", usersController.register);
// .put("/forget/:id", authentication.jwtToken, usersController.updatePassword);

module.exports = Route;
