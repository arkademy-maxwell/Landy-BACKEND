const conn = require("../config/databaase/database");

module.exports = {

    getAllAirlines: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT airlines.id, airlines.name, airlines.code, flight_facilities.baggage, flight_facilities.food FROM airlines LEFT JOIN flight_facilities ON airlines.facilities_id = flight_facilities.id',
                (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
        })
    },

    addAirlines: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO airlines SET ?', data, (err, result) => {

                if (!err) {
                    resolve(data)
                }
                else {
                    reject(new Error(err))
                }

            })
        })
    },

    updateAirlines: (data, id) => {
        return new Promise((resolve, reject) => {
            conn.query('select * from airlines where id = ?', id, (err, resultSelect) => {
                if (resultSelect.length > 0) {
                    conn.query('update airlines set ? where id = ?', [data, id], (err, result) => {
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


    deleteAirlines: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE from airlines where id=?', [data], (err, result) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }

}