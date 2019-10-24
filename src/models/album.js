const conn = require('../config/databaase/database')

module.exports = {
  getAlbum: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM album ', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addAlbum: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO album SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteAlbum: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM album WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}