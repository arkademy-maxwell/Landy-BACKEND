const discountRoomModel = require('../models/discountRoom')
const uuid = require("uuid/v4");

module.exports = {
  getDiscount: (req, res) => {
    discountRoomModel.getDiscount()
      .then(resultQuery => {
        res.json({
          status: 200,
          message: 'Success Get Data!',
          data: resultQuery
        })
      })
      .catch(err => {
        console.log(err)
        res.json({
          status: 500,
          message: 'Error Get Data!'
        })
      })
  },
  addDiscount: (req, res) => {
    const { name, amount, max_amount, description, coupon_code, coupon_code_description, terms, duration } = req.body
    const images = req.files.image;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were Add!");
    }
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
    images.mv("Assets/Images/" + image, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });

    const data = { name, image, amount, max_amount, description, coupon_code, coupon_code_description, terms, duration }

    discountRoomModel.addDiscount(data)
      .then(result => {
        res.json({
          status: 200,
          message: 'Success Add Data!',
          data: data
        })
      })
      .catch(err => {
        console.log(err);

        res.json({
          status: 500,
          message: 'Error Add Data!',
          error: err
        })
      })
  },
  updateDiscount: (req, res) => {
    const { name, amount, max_amount, description, coupon_code, coupon_code_description, terms, duration } = req.body
    const images = req.files.image;
    const id = req.params.id

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were Add!");
    }
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
    images.mv("Assets/Images/" + image, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });

    const data = { name, image, amount, max_amount, description, coupon_code, coupon_code_description, terms, duration }

    discountRoomModel.updateDiscount(data, id)
      .then(result => {
        res.json({
          status: 200,
          message: 'Success Update Data!',
          data: data
        })
      })
      .catch(err => {
        res.json({
          status: 500,
          message: 'Error Update Data!',
          error: err
        })
      })
  },
  deleteDiscount: (req, res) => {
    const id = req.params.id

    discountRoomModel.deleteDiscount(id)
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