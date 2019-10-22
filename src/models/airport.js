const conn = require('../config/databaase/database')

module.exports = {
  getAirport: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM airport', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addAirport: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO airport SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateAirport: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM airport WHERE id = ?', id, (err, resultSelect) => {
        if (resultSelect.length > 0) {
          conn.query('UPDATE airport SET ? WHERE id = ?', [data, id], (err, result) => {
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
  deleteAirport: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM airport WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}