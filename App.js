const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const passport = require("passport");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(fileUpload());
app.use(cors());

const routerNav = require("./src/index");

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Server has running on port :" + port);
});
app.use(express.static(__dirname + "/Assets/Images"));

app.use("/api/v1", routerNav);

app.get("*"),
  (req, res) => {
    res.status(404);
    res.send("The page you are looking for is not found.");
  };
