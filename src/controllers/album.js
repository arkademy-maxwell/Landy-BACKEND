const albumModel = require("../models/album");
const uuid = require("uuid/v4");
// const _ = require("loadash");

module.exports = {
  getAlbum: (req, res) => {
    albumModel
      .getAlbum()
      .then(resultQuery => {
        res.json({
          status: 200,
          message: "Get Data Success!",
          data: resultQuery
        });
      })
      .catch(err => {
        res.json({
          status: 500,
          message: "Get Data Failed",
          error: err
        });
      });
  },
  addAlbum: async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were Add!");
    }

    let dataImage = [];
    let img = req.files.image;
    img.map((item, key) => {
      // Validasi Gambar
      const img = ["png", "jpg", "jpeg", "svg", "gif"].includes(
        req.files.image[key].mimetype.split("/")[1]
      );
      if (!img) {
        return res.json({
          status: 400,
          message: 'File must be an image ("png","jpg","jpeg","svg","gif")!'
        });
      }

      // Upload Action
      let uploadImage = req.files.image[key];
      const image = uuid() + `.${req.files.image[key].mimetype.split("/")[1]}`;
      uploadImage.mv("Assets/Images/" + image);
      dataImage.push([image, req.body.room_id]);
    });

    albumModel
      .addAlbum(dataImage)
      .then(result => {
        res.json({
          status: 200,
          message: "Success Adding Data!",
          data: dataImage
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "Error Adding New Data!"
        });
      });
  },
  updateAlbum: async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were Add!");
    }

    // Validasi Gambar
    const img = ["png", "jpg", "jpeg", "svg", "gif"].includes(
      req.files.image.mimetype.split("/")[1]
    );
    if (!img) {
      return res.json({
        status: 400,
        message: 'File must be an image ("png","jpg","jpeg","svg","gif")!'
      });
    }

    // Upload Action
    let uploadImage = req.files.image;
    const image = uuid() + `.${req.files.image.mimetype.split("/")[1]}`;
    uploadImage.mv("Assets/Images/" + image);

    const oldImage = req.body.old_image;
    albumModel
      .updateAlbum({ image }, oldImage)
      .then(result => {
        res.json({
          status: 200,
          message: "Success Updating Data!",
          data: { image }
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "Error Updating New Data!"
        });
      });
  },

  deleteAlbum: (req, res) => {
    const id = req.body.image;

    albumModel
      .deleteAlbum(id)
      .then(result => {
        res.json({
          status: 200,
          message: "Success Delete Data!"
        });
      })
      .catch(err => {
        res.json({
          status: 500,
          message: "Error Delete Data",
          error: err
        });
      });
  }
};
