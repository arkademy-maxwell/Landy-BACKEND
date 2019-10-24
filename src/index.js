const express = require("express");
const Route = express.Router();

const users = require("./routes/users");
const flight = require("./routes/flight");
const flightFacilities = require("./routes/flightFacilities");
const airlines = require("./routes/airlines");
const facility = require("./routes/facility");
const rooms = require("./routes/rooms");
const roomsTransaction = require("./routes/roomsTransaction");
const flightRoutes = require("./routes/flightRoutes");
const airport = require("./routes/airport");
const discountRoom = require('./routes/discountRoom')
const discountFlight = require('./routes/discountFlight')
const insuranceFlight = require('./routes/insuranceFlight')
const flightTransaction = require("./routes/flightTransaction");
const customerInfo = require('./routes/customerInfo')
const flightTransactionDetail = require('./routes/flightTransactionDetail')

Route.use("/users", users);
Route.use("/flight", flight);
Route.use("/flightFacilities", flightFacilities);
Route.use("/flightRoutes", flightRoutes);
Route.use("/airport", airport);
Route.use("/airlines", airlines);
Route.use("/facility", facility);
Route.use("/rooms", rooms);
Route.use("/roomTransaction", roomsTransaction);
Route.use('/discountRoom', discountRoom)
Route.use('/discountFlight', discountFlight)
Route.use('/insuranceFlight', insuranceFlight)
Route.use("/flightTransaction", flightTransaction);
Route.use("/customerInfo", customerInfo);
Route.use('/flightTransactionDetail', flightTransactionDetail)

module.exports = Route;
