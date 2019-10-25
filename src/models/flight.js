const conn = require("../config/databaase/database");

module.exports = {
    
    getAllFlight: ()=>{
        return new Promise((resolve, reject) =>{
            conn.query(`SELECT flight.id, flight.code, airlines.name airline_name FROM flight JOIN airlines on airline_id = airlines.id`,
            (err,result)=>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    getTotalData: () => {
        return new Promise((resolve, reject) => {
          conn.query("SELECT COUNT(id) as Amount FROM flight", (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error(err));
            }
          });
        });
      },
    
    addFlight: (data) => {
        return new Promise((resolve, reject)=>{
            conn.query('INSERT INTO flight SET ?', data, (err, result) =>{

                if(!err){
                    resolve(data)
                }
                else{
                    reject(new Error(err))
                }

            })
        })
    },
    
    updateFlight: (data, id) => {
        return new Promise ((resolve, reject)=>{
            conn.query('select * from flight where id = ?', id, (err, resultSelect) => {
                if (resultSelect.length > 0) {
                  conn.query('update flight set ? where id = ?', [data, id], (err, result) => {
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
    
    
    deleteFlight: (data) => {
        return new Promise ((resolve, reject) =>{
            conn.query('DELETE from flight where id=?', [data], (err, result)=>{
                if (!err) {
                    resolve(data)
                }else{
                    reject(new Error(err))
                }
            })
        })
    }

}