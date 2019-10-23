const facilityModel = require("../models/facility");
const uuid = require("uuid/v1");

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
  addFacility: async (req, res) => {
    const { name } = req.body;
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

    images.mv("Assets/Icons/" + image, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
    });
    const data = { name, image };
    // return res.json(data)
    // facilityModel
    //   .addFacility(data)
    //   .then(result => {
    //     res.json({
    //       status: 200,
    //       message: "Success Adding Data!",
    //       data: result
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     res.json({
    //       status: 500,
    //       message: "Error Adding Data!"
    //     });
    //   });
    if (req.files.image) {
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
            message: "Error Adding New Data!"
          });
        });
    }
  },
  updateFacility: (req, res) => {
    const { name } = req.body;
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

    images.mv("Assets/Icons/" + image, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
    });
    const data = { name, image };

    facilityModel
      .updateFacility(data, { id: req.params.id })
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
