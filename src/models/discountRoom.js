const conn = require('../config/databaase/database')

module.exports = {
  getDiscount: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM discount_room', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addDiscount: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO discount_room SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateDiscount: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM discount_room WHERE id = ?', id, (err, resultSelect) => {
        if (resultSelect.length > 0) {
          conn.query('UPDATE discount_room SET ? WHERE id = ?', [data, id], (err, result) => {
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
  deleteDiscount: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM discount_room WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}