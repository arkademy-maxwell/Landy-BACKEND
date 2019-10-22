const flightRoutesModel = require('../models/flightRoutes')
module.exports = {
  getFlightRoutes: (req, res) => {
    flightRoutesModel.getFlightRoutes()
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
  addFlightRoutes: (req, res) => {
    const { origin_id, destination_id, departure, arrival, quantity, price } = req.body
    const data = { origin_id, destination_id, departure, arrival, quantity, price }

    flightRoutesModel.addFlightRoutes(data)
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
  updateFlightRoutes: (req, res) => {
    const { origin_id, destination_id, departure, arrival, quantity, price } = req.body
    const data = { origin_id, destination_id, departure, arrival, quantity, price }
    const id = req.params.id

    flightRoutesModel.updateFlightRoutes(data, id)
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
  deleteFlightRoutes: (req, res) => {
    const id = req.params.id

    flightRoutesModel.deleteFlightRoutes(id)
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