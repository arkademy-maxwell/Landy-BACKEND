const express = require("express");
const Route = express.Router();
const users = require("./routes/users");
const facility = require("./routes/facility");
const rooms = require("./routes/rooms");

Route.use("/users", users);
Route.use("/facility", facility);
Route.use("/rooms", rooms);

module.exports = Route;
