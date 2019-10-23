const conn = require("../config/databaase/database");

module.exports = {
    
    getAllFlightTransaction: ()=>{
        return new Promise((resolve, reject) =>{
            conn.query('SELECT X1.id,X1.invoice, X1.date_transaction, X4.name AS origin_airport, X5.name AS destination_airport, X2.quantity, X2.price, title.name title , X3.first_name, X3.last_name,passenger_type.name passenger_type, X3.email, X3.phone_number, X6.name airline FROM flight_transactions X1 JOIN flight_routes X2 ON X1.routes_id = X2.id JOIN users X3 ON X1.users_id = X3.id JOIN airport X4 ON X2.origin_id = X4.id JOIN airport X5 ON X2.destination_id = X5.id JOIN airlines X6 ON X2.airlines_id = X6.id JOIN title ON X3.title_id = title.id JOIN passenger_type ON X1.passenger_id = passenger_type.id',
            (err,result)=>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
    
    addFlightTransaction: (data) => {
        return new Promise((resolve, reject)=>{
            conn.query('INSERT INTO flight_transactions SET ?', data, (err, result) =>{

                if(!err){
                    resolve(data)
                }
                else{
                    reject(new Error(err))
                }

            })
        })
    },
    
    updateFlightTransaction: (data, id) => {
        return new Promise ((resolve, reject)=>{
            conn.query('select * from flight_transactions where id = ?', id, (err, resultSelect) => {
                if (resultSelect.length > 0) {
                  conn.query('update flight_transactions set ? where id = ?', [data, id], (err, result) => {
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
    
    
    deleteFlightTransaction: (data) => {
        return new Promise ((resolve, reject) =>{
            conn.query('DELETE from flight_transactions where id=?', [data], (err, result)=>{
                if (!err) {
                    resolve(data)
                }else{
                    reject(new Error(err))
                }
            })
        })
    }

}