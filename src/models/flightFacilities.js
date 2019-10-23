const conn = require("../config/databaase/database");

module.exports = {
    
    getAllFlightFacilities: ()=>{
        return new Promise((resolve, reject) =>{
            conn.query('SELECT * FROM flight_facilities ',
            (err,result)=>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
    
    addFlightFacilities: (data) => {
        return new Promise((resolve, reject)=>{
            conn.query('INSERT INTO flight_facilities SET ?', data, (err, result) =>{

                if(!err){
                    resolve(data)
                }
                else{
                    reject(new Error(err))
                }

            })
        })
    },
    
    updateFlightFacilities: (data, id) => {
        return new Promise ((resolve, reject)=>{
            conn.query('select * from flight_facilities where id = ?', id, (err, resultSelect) => {
                if (resultSelect.length > 0) {
                  conn.query('update flight_facilities set ? where id = ?', [data, id], (err, result) => {
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
    
    
    deleteFlightFacilities: (data) => {
        return new Promise ((resolve, reject) =>{
            conn.query('DELETE from flight_facilities where id=?', [data], (err, result)=>{
                if (!err) {
                    resolve(data)
                }else{
                    reject(new Error(err))
                }
            })
        })
    }

}