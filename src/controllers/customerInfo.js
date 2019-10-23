const customerInfoModel = require('../models/customerInfo')
module.exports = {
  getCustomerInfo: (req, res) => {
    customerInfoModel.getCustomerInfo()
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
  addCustomerInfo: (req, res) => {
    const {title_id, first_name, last_name, nationality_code } = req.body
    const data = { title_id, first_name, last_name, nationality_code }

    customerInfoModel.addCustomerInfo(data)
      .then(result => {
        res.json({
          status: 200,
          message: 'Add Data Success!',
          data: data
        })
      })
      .catch(err => {
        res.json({
          status: 500,
          message: 'Error Add Data!',
          error: err
        })
      })
  },
  UpdateCustomerInfo: (req, res) => {
    const { title_id, first_name, last_name, nationality_code } = req.body
    const data = {title_id, first_name, last_name, nationality_code }
    const id = req.params.id

    customerInfoModel.updateCustomerInfo(data, id)
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
  deleteCustomerInfo: (req, res) => {
    const id = req.params.id

    customerInfoModel.deleteCustomerInfo(id)
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