const conn = require('../config/databaase/database')

module.exports = {
  getCustomerInfo: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT customer_info.id, title.name title, customer_info.first_name,customer_info.last_name, nationalities.nation FROM customer_info JOIN nationalities ON customer_info.nationality_code = nationalities.initial JOIN title ON customer_info.title_id = title.id ORDER BY customer_info.id ASC', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addCustomerInfo: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO customer_info SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateCustomerInfo: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM customer_info WHERE id = ?', id, (err, resultSelect) => {
        if (resultSelect.length > 0) {
          conn.query('UPDATE customer_info SET ? WHERE id = ?', [data, id], (err, result) => {
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
  deleteCustomerInfo: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM customer_info WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}