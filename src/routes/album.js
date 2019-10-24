const express = require("express");
const Route = express.Router();
const authentication = require("../config/Auth/authentication");
const albumController = require("../controllers/album");

Route
  .get("/", albumController.getAlbum)
  .post("/", albumController.addAlbum)
  .delete('/:id', authentication.jwtToken, albumController.deleteAlbum)


module.exports = Route;
