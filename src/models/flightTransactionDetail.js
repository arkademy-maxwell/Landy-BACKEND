const conn = require("../config/databaase/database");

module.exports = {

  getAllFlightTransactionDetail: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT X1.id, X3.invoice invoice, X6.name origin, X7.name destination, X2.name passenger_type, X2.discount, X1.price FROM flight_transactions_detail X1 LEFT JOIN passenger_type X2 ON X1.passenger_type_id = X2.id LEFT JOIN flight_transactions X3 ON X1.invoice_id = X3.id LEFT JOIN flight_routes X5 ON X1.routes_id = X5.id LEFT JOIN airport X6 ON X5.origin_id = X6.id LEFT JOIN airport X7 ON X5.destination_id = X7.id',
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
    })
  },

  addFlightTransactionDetail: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO flight_transactions_detail SET ?', data, (err, result) => {

        if (!err) {
          resolve(data)
        }
        else {
          reject(new Error(err))
        }

      })
    })
  },

  updateFlightTransactionDetail: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('select * from flight_transactions_detail where id = ?', id, (err, resultSelect) => {
        if (resultSelect.length > 0) {
          conn.query('update flight_transactions_detail set ? where id = ?', [data, id], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(err)
            }
          })
        } else {
          reject('ID NOT FOUND!')
        }
      })
    })
  },


  deleteFlightTransactionDetail: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE from flight_transactions_detail where id=?', [data], (err, result) => {
        if (!err) {
          resolve(data)
        } else {
          reject(new Error(err))
        }
      })
    })
  }

}