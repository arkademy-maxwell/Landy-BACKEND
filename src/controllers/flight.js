const flightModel = require('../models/flight')
module.exports ={
    getAllFlight: (req, res) =>{
        flightModel.getAllFlight()
            .then(resultQuery =>{
                res.json({
                    status : 200,
                    message: 'success',
                    data:resultQuery
                })
            })
            .catch(err =>{
                console.log(err)
                res.json({
                    status:400,
                    message:'error'
                })
            })
    },
    addFlight: (req, res) =>{
        const {id, code, seat_row, seat_column, airline_id} = req.body
        const data = {id, code, seat_row, seat_column, airline_id}

        flightModel.addFlight(data)
        .then(result =>{
            res.json({
                status : 200,
                message: 'Suksess',
                data: result
            })
        })
        .catch(err =>{
            console.log(err)
            res.json({
                status: 500,
                message:'error'
            })
        })
        },

        updateFlight:(req, res)=>{
            const {code, seat_row, seat_column, airline_id} = req.body
            const data = {code, seat_row, seat_column, airline_id}
            const id = req.params.id
    
            flightModel.updateFlight(data, id)
            .then(result =>{
                res.json({
                    status:200,
                    message: 'Suksess',
                    data: result
                })
            })
            .catch(err => {
                res.json({
                    status:500,
                    status: 'Error'
                })
            })
        },
        deleteFlight: (req, res)=>{
    
            flightModel.deleteFlight(req.params.id)
            .then(result =>{
                res.json({
                    status: 200,
                    message: 'Suksess',
                    data: result
                })
            })
            .catch(err =>{
                res.json({
                    status:500,
                    message:'Error'
                })
            })
        }
    }