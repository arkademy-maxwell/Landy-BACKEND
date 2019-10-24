const flightTransactionDetailModel = require('../models/flightTransactionDetail')
module.exports = {
  getAllFlightTransactionDetail: (req, res) => {
    flightTransactionDetailModel.getAllFlightTransactionDetail()
      .then(resultQuery => {
        res.json({
          status: 200,
          message: 'success',
          data: resultQuery
        })
      })
      .catch(err => {
        console.log(err)
        res.json({
          status: 400,
          message: 'error'
        })
      })
  },
  addFlightTransactionDetail: (req, res) => {
    const { invoice_id, routes_id, passenger_type_id, price } = req.body
    const data = { invoice_id, routes_id, passenger_type_id, price }

    flightTransactionDetailModel.addFlightTransactionDetail(data)
      .then(result => {
        res.json({
          status: 200,
          message: 'Suksess',
          data: data
        })
      })
      .catch(err => {
        console.log(err)
        res.json({
          status: 500,
          message: 'error'
        })
      })
  },

  updateFlightTransactionDetail: (req, res) => {
    const { invoice_id, routes_id, passenger_type_id, price } = req.body
    const data = { invoice_id, routes_id, passenger_type_id, price }
    const id = req.params.id

    flightTransactionDetailModel.updateFlightTransactionDetail(data, id)
      .then(result => {
        res.json({
          status: 200,
          message: 'Suksess',
          data: data
        })
      })
      .catch(err => {
        res.json({
          status: 500,
          status: 'Error'
        })
      })
  },
  deleteFlightTransactionDetail: (req, res) => {
    const id = req.params.id

    flightTransactionDetailModel.deleteFlightTransactionDetail(id)
      .then(result => {
        res.json({
          status: 200,
          message: 'Suksess',
          data: id
        })
      })
      .catch(err => {
        res.json({
          status: 500,
          message: 'Error'
        })
      })
  }
}