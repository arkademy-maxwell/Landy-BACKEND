const flightFacilitiesModel = require("../models/flightFacilities");
module.exports = {
  getAllFlightFacilities: (req, res) => {
    flightFacilitiesModel
      .getAllFlightFacilities()
      .then(resultQuery => {
        res.json({
          status: 200,
          message: "success",
          data: resultQuery
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 400,
          message: "error"
        });
      });
  },
  addFlightFacilities: (req, res) => {
    const { id, baggage, food } = req.body;
    const data = { id, baggage, food };

    flightFacilitiesModel
      .addFlightFacilities(data)
      .then(result => {
        res.json({
          status: 200,
          message: "Suksess",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "error"
        });
      });
  },

  updateFlightFacilities: (req, res) => {
    const { baggage, food } = req.body;
    const data = { baggage, food };
    const id = req.params.id;

    flightFacilitiesModel
      .updateFlightFacilities(data, id)
      .then(result => {
        res.json({
          status: 200,
          message: "Suksess",
          data: result
        });
      })
      .catch(err => {
        res.json({
          status: 500,
          status: "Error"
        });
      });
  },
  deleteFlightFacilities: (req, res) => {
    flightFacilitiesModel
      .deleteFlightFacilities(req.params.id)
      .then(result => {
        res.json({
          status: 200,
          message: "Suksess",
          data: result
        });
      })
      .catch(err => {
        res.json({
          status: 500,
          message: "Error"
        });
      });
  }
};
