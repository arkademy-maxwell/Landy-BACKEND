const insuranceModel = require('../models/insuranceFlight')

module.exports = {
  getInsuranceFlight: (req, res) => {
    insuranceModel.getInsuranceFlight()
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
  addInsuranceFlight: (req, res) => {
    const { name, pay, description, terms, claim, disclaimer, benefit } = req.body
    const data = { name, pay, description, terms, claim, disclaimer, benefit }

    insuranceModel.addInsuranceFlight(data)
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
  updateInsuranceFlight: (req, res) => {
    const { name, pay, description, terms, claim, disclaimer, benefit } = req.body
    const id = req.params.id
    const data = { name, pay, description, terms, claim, disclaimer, benefit }

    insuranceModel.updateInsuranceFlight(data, id)
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
  deleteInsuranceFlight: (req, res) => {
    const id = req.params.id

    insuranceModel.deleteInsuranceFlight(id)
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