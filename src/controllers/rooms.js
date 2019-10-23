const roomModel = require("../models/rooms");
const uuid = require("uuid/v4");
const fs = require("fs");

module.exports = {
  getRoom: (req, res) => {
    const { search, limit, page, sort } = req.query;

    roomModel
      .getRoom(search, limit, page, sort)
      .then(async result => {
        let Amount = await roomModel.getAll();
        res.json({
          status: 200,
          message: "Success View a Data!",
          Amount: Amount[0].Amount,
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "Error View a Data!"
        });
      });
  },
  getDesc: (req, res) => {
    const { sort } = req.query;

    roomModel
      .getDesc(sort)
      .then(async result => {
        let Amount = await roomModel.getAll();
        res.json({
          status: 200,
          message: "Success View a Data!",
          Amount: Amount[0].Amount,
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "Error View a Data!"
        });
      });
  },
  getById: (req, res) => {
    const { id } = req.params;

    roomModel
      .getById(id)
      .then(result => {
        res.json({
          status: 200,
          message: "Success View a Data!",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "Error View a Data!"
        });
      });
  },
  addRoom: async (req, res) => {
    const { room, description, address, locations, price, quantity } = req.body;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were Add!");
    }

    const images = req.files.image;

    const image = uuid() + `.${req.files.image.mimetype.split("/")[1]}`;

    const img = ["png", "jpg", "jpeg", "svg", "gif"].includes(
      req.files.image.mimetype.split("/")[1]
    );
    if (!img) {
      return res.json({
        status: 400,
        message: 'File must be an image ("png","jpg","jpeg","svg","gif")!'
      });
    }

    images.mv("Assets/Images/" + image, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
    });

    const data = {
      room,
      description,
      address,
      locations,
      image,
      price,
      quantity
    };
    if (req.files.image) {
      if (req.body.quantity >= 0) {
        const isRoomAvailable = await roomModel.getByName(room);
        console.log(isRoomAvailable[0].room);
        if (isRoomAvailable[0].room == 0) {
          roomModel
            .addRoom(data)
            .then(result => {
              res.json({
                status: 200,
                message: "Success Adding Data!",
                data: result
              });
            })
            .catch(err => {
              console.log(err);
              res.json({
                status: 500,
                message: "Error Adding New Data!"
              });
            });
        } else {
          res.json({
            status: 400,
            message: "Error, Hotel already in database!",
            room
          });
        }
      } else {
        res.status(400).json({
          status: 400,
          message: "Quantity cannot below 0"
        });
      }
    }
  },
  updateRoom: (req, res) => {
    const { room, description, address, locations, price, quantity } = req.body;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded!");
    }

    const images = req.files.image;

    const image = uuid() + `.${req.files.image.mimetype.split("/")[1]}`;

    const img = ["png", "jpg", "jpeg", "svg", "gif"].includes(
      req.files.image.mimetype.split("/")[1]
    );
    if (!img) {
      return res.json({
        status: 400,
        message: 'File must be an image ("png","jpg","jpeg","svg","gif")!'
      });
    }

    images.mv("Assets/Images/" + image, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
    });
    // fs.unlink(path.join(__dirname) + `/../../${isExist[0].image}`, err => {
    //   if (err) return console.log("file not exist in directory upload");
    // });

    const data = {
      room,
      description,
      address,
      locations,
      image: images.name,
      price,
      quantity
    };

    const id = req.params.id;
    roomModel
      .updateRoom(data, id)
      .then(result => {
        res.json({
          status: 200,
          message: "Data Edited Successfully",
          data
        });
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          message: "Failed to Edit Data!",
          error: err
        });
      });
  },

  deleteRoom: (req, res) => {
    const id = req.params;

    roomModel
      .deleteRoom(id)
      .then(result => {
        res.json({
          status: 200,
          message: "Success Remove Data!",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "Error Remove a Data!"
        });
      });
  },
  reduceRoom: (req, res) => {
    const id = req.params.id;
    const { quantity } = req.body;

    roomModel
      .reduceRoom(id, quantity)
      .then(result => {
        res.json({
          status: 200,
          message: "Success Reduce Data!",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "Error Count a Data!"
        });
      });
  }
};
