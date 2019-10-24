const conn = require("../config/databaase/database");

module.exports = {
    
    getAllFlightTransaction: ()=>{
        return new Promise((resolve, reject) =>{
            conn.query('SELECT X1.id, X1.invoice, X1.date_transaction, X4.name title, X2.first_name, X2.last_name, X2.phone_number, X2.email, X5.name origin, X6.name destination, X7.name airlines,  X1.total_price FROM flight_transactions X1 JOIN users X2 ON X1.users_id = X2.id JOIN flight_routes X3 ON X1.routes_id = X3.id JOIN title X4 ON X2.title_id = X4.id JOIN airport X5 ON X3.origin_id = X5.id JOIN airport X6 ON X3.destination_id = X6.id JOIN airlines X7 ON X3.airlines_id = X7.id',
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