const albumModel = require('../models/album')
const uuid = require("uuid/v4");

module.exports = {
  getAlbum: (req, res) => {
    albumModel.getAlbum()
      .then(resultQuery => {
        res.json({
          status: 200,
          message: 'Get Data Success!',
          data: resultQuery
        })
      })
      .catch(err => {
        res.json({
          status: 500,
          message: 'Get Data Failed',
          error: err
        })
      })
  },
  addAlbum: async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were Add!");
    }

    const images = req.files.image1;

    const image1 = uuid() + `.${req.files.image1.mimetype.split("/")[1]}`;

    const img = ["png", "jpg", "jpeg", "svg", "gif"].includes(
      req.files.image1.mimetype.split("/")[1]
    );
    if (!img) {
      return res.json({
        status: 400,
        message: 'File must be an image ("png","jpg","jpeg","svg","gif")!'
      });
    }

    images.mv("Assets/Images/" + image1, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });


    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were Add!");
    }

    const images2 = req.files.image2;

    const image2 = uuid() + `.${req.files.image2.mimetype.split("/")[1]}`;

    const img2 = ["png", "jpg", "jpeg", "svg", "gif"].includes(
      req.files.image2.mimetype.split("/")[1]
    );
    if (!img2) {
      return res.json({
        status: 400,
        message: 'File must be an image ("png","jpg","jpeg","svg","gif")!'
      });
    }

    images2.mv("Assets/Images/" + image2, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });


    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were Add!");
    }

    const images3 = req.files.image3;

    const image3 = uuid() + `.${req.files.image3.mimetype.split("/")[1]}`;

    const img3 = ["png", "jpg", "jpeg", "svg", "gif"].includes(
      req.files.image3.mimetype.split("/")[1]
    );
    if (!img3) {
      return res.json({
        status: 400,
        message: 'File must be an image ("png","jpg","jpeg","svg","gif")!'
      });
    }
    images3.mv("Assets/Images/" + image3, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were Add!");
    }

    const images4 = req.files.image4;

    const image4 = uuid() + `.${req.files.image4.mimetype.split("/")[1]}`;

    const img4 = ["png", "jpg", "jpeg", "svg", "gif"].includes(
      req.files.image4.mimetype.split("/")[1]
    );
    if (!img4) {
      return res.json({
        status: 400,
        message: 'File must be an image ("png","jpg","jpeg","svg","gif")!'
      });
    }
    images4.mv("Assets/Images/" + image4, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were Add!");
    }

    const images5 = req.files.image5;

    const image5 = uuid() + `.${req.files.image5.mimetype.split("/")[1]}`;

    const img5 = ["png", "jpg", "jpeg", "svg", "gif"].includes(
      req.files.image3.mimetype.split("/")[1]
    );
    if (!img5) {
      return res.json({
        status: 400,
        message: 'File must be an image ("png","jpg","jpeg","svg","gif")!'
      });
    }
    images5.mv("Assets/Images/" + image5, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });

    const data = {image1, image2, image3, image4, image5};
          albumModel.addAlbum(data)
            .then(result => {
              res.json({
                status: 200,
                message: "Success Adding Data!",
                data: data
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

  deleteAlbum: (req, res) => {
    const id = req.params.id

    albumModel.deleteAlbum(id)
      .then(result => {
        res.json({
          status: 200,
          message: 'Success Delete Data!',
          data: id
        })
      })
      .catch(err => {
        res.json({
          status: 500,
          message: 'Error Delete Data',
          error: err
        })
      })
  }
}