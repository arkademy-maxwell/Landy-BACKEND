const conn = require('../config/databaase/database')

module.exports = {
  getFlightRoutes: (data) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT X1.id, X4.name airlines, X2.name origin_airport, X2.location origin_location, X2.code origin_code, X3.name destination_airport, X3.location destination_location, X3.code destination_code, departure, arrival, quantity, price, flight_type.type FROM flight_routes X1 LEFT JOIN airport X2 ON X1.origin_id = X2.id LEFT JOIN airport X3 ON X1.destination_id = X3.id LEFT JOIN airlines X4 ON X1.airlines_id = X4.id JOIN flight_type ON X1.type_id = flight_type.id  ${data.price_min ? `WHERE price BETWEEN '${data.price_min}' AND '${data.price_max}'` : ""}${data.search ? `WHERE X4.name LIKE '%${data.search}%'` : ""} ${data.sort ? ` ORDER by ${data.sort} ${data.sortBy}` : ''}` , (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getTotalData: () => {
    return new Promise((resolve, reject) => {
      conn.query("SELECT COUNT(id) as Amount FROM flight_routes ", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },

  addFlightRoutes: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO flight_routes SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateFlightRoutes: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM flight_routes WHERE id = ?', id, (err, resultSelect) => {
        if (resultSelect.length > 0) {
          conn.query('UPDATE flight_routes SET ? WHERE id = ?', [data, id], (err, result) => {
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
  deleteFlightRoutes: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM flight_routes WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}