const conn = require('../config/databaase/database')

module.exports = {
  getInsuranceFlight: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM insurance_flight', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addInsuranceFlight: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO insurance_flight SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateInsuranceFlight: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM insurance_flight WHERE id = ?', id, (err, resultSelect) => {
        if (resultSelect.length > 0) {
          conn.query('UPDATE insurance_flight SET ? WHERE id = ?', [data, id], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        } else {
          reject('ID NOT FOUND!')
        }
      })
    })
  },
  deleteInsuranceFlight: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM insurance_flight WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}