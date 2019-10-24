const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const albumController = require("../controllers/album");

Route.get("/", albumController.getAlbum)
  .post("/", authentication.jwtToken, albumController.addAlbum)
  .put("/", authentication.jwtToken, albumController.updateAlbum)
  .delete("/", authentication.jwtToken, albumController.deleteAlbum);

module.exports = Route;
