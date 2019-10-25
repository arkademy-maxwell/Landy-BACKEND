const roomModel = require("../models/rooms");
const uuid = require("uuid/v4");
const fs = require("fs");

module.exports = {
  getRoom: (req, res) => {
    const { search } = req.query;

    roomModel
      .getRoom(search)
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
  getRoomSearchFacility: (req, res) => {
    const { searchFacility } = req.query;

    roomModel
    roomModel.getRoomSearchFacility(searchFacility)
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
  getRoomSearch: (req, res) => {
    const { search,searchBed, searchType, searchFacility,sort, sortBy, price_min, price_max } = req.query;
    const data = {search, sort, sortBy, price_min, price_max, searchBed, searchType, searchFacility}

    roomModel.getRoomSearch(data)
      .then(async result => {
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
  getLocation: (req, res) => {
    const { search } = req.query;

    roomModel
      .getLocation(search)
      .then( result => {
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
    const {
      room,
      description,
      address,
      locations,
      price,
      quantity,
      room_type,
      bed_type
    } = req.body;

    const data = {
      room,
      description,
      address,
      locations,
      price,
      quantity,
      room_type,
      bed_type
    };
    if (req.body.quantity >= 0) {
      const isRoomAvailable = await roomModel.getByName(room);
      if (isRoomAvailable[0].room == 0) {
        roomModel
          .addRoom(data)
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
  },
  updateRoom: (req, res) => {
    const { room, description, address, locations, price, quantity, room_type, bed_type } = req.body;
    const data = {
      room,
      description,
      address,
      locations,
      price,
      quantity,
      room_type,
      bed_type
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
