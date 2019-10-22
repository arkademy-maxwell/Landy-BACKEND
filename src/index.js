const express = require("express");
const Route = express.Router();
const users = require("./routes/users");
const flight = require("./routes/flight");
const flightFacilities = require("./routes/flightFacilities");
const airlines = require("./routes/airlines");
const facility = require("./routes/facility");
const rooms = require("./routes/rooms");
const roomsTransaction = require("./routes/roomsTransaction");

Route.use("/users", users);
Route.use("/flight", flight);
Route.use("/flightFacilities", flightFacilities);
Route.use("/airlines", airlines);
Route.use("/facility", facility);
Route.use("/rooms", rooms);
Route.use("/roomTransaction", roomsTransaction);

module.exports = Route;
