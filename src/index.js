const express = require("express");
const Route = express.Router();
const users = require("./routes/users");
const flight = require("./routes/flight");
const flightFacilities = require("./routes/flightFacilities");
const airlines = require("./routes/airlines");
const facility = require("./routes/facility");
const rooms = require("./routes/rooms");
const flightRoutes = require('./routes/flightRoutes')
const airport = require('./routes/airport')

Route.use("/users", users);
Route.use("/flight", flight);
Route.use("/flightFacilities", flightFacilities);
Route.use('/flightRoutes', flightRoutes)
Route.use('/airport', airport)
Route.use("/airlines", airlines);
Route.use("/facility", facility);
Route.use("/rooms", rooms);

module.exports = Route;
