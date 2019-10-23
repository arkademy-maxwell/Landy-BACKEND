const airportModel = require('../models/airport')
module.exports = {
  getAirport: (req, res) => {
    airportModel.getAirport()
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
  addAirport: (req, res) => {
    const { name, code, location } = req.body
    const data = { name, code, location }

    airportModel.addAirport(data)
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
  UpdateAirport: (req, res) => {
    const { name, code, location } = req.body
    const data = { name, code, location }
    const id = req.params.id

    airportModel.updateAirport(data, id)
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
  deleteAirport: (req, res) => {
    const id = req.params.id

    airportModel.deleteAirport(id)
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