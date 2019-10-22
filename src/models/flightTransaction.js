const conn = require("../config/databaase/database");

module.exports = {
    
    getAllFlightTransaction: ()=>{
        return new Promise((resolve, reject) =>{
            conn.query('SELECT * FROM flight_transactions ',
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