const facilityModel = require("../models/facility");

module.exports = {
  getFacility: (req, res) => {
    facilityModel
      .getFacility()
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
  addFacility: (req, res) => {
    const { name } = req.body;
    const data = { name };
    // return res.json(data)
    facilityModel
      .addFacility(data)
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
          message: "Error Adding Data!"
        });
      });
  },
  updateFacility: (req, res) => {
    const { name } = req.body;
    const data = { name };

    facilityModel
      .updateFacility([data, { id: req.params.id }])
      .then(result => {
        res.json({
          status: 200,
          message: "Success Updating Data!",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          message: "Name Already Exist"
        });
      });
  },
  deleteFacility: (req, res) => {
    facilityModel
      .deleteFacility(req.params.id)
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
          message: "Error Remove Data!"
        });
      });
  }
};
