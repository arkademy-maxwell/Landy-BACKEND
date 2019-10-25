const flightRoutesModel = require('../models/flightRoutes')

module.exports = {

  getFlightRoutes: (req, res) => {
        let {price_min, sort,sortBy, price_max, search } = req.query
        let data = {sort, sortBy ,price_min, price_max, search}

    flightRoutesModel.getFlightRoutes(data)
    // flightRoutesModel.getFlightRoutesSearch(data)
      .then( async resultQuery => {
        let Amount = await flightRoutesModel.getTotalData()
        res.json({
          status: 200,
          message: 'Get Data Success!',
          Amount: Amount[0].Amount,
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
    const { origin_id, destination_id, departure, arrival, quantity, price, airlines_id } = req.body
    const data = { origin_id, destination_id, departure, arrival, quantity, price, airlines_id }

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
    const { origin_id, destination_id, departure, arrival, quantity, price, airlines_id } = req.body
    const data = { origin_id, destination_id, departure, arrival, quantity, price, airlines_id }
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