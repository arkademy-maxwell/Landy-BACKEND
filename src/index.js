const express = require("express");
const Route = express.Router();

const users = require("./routes/users");

Route.use("/users", users);

module.exports = Route;
