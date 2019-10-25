const flightModel = require('../models/flight')

module.exports ={
    getAllFlight: (req, res) =>{

        flightModel.getAllFlight()
            .then( async resultQuery =>{
                let Amount = await flightModel.getTotalData();
                res.json({
                    status : 200,
                    message: 'success',
                    Amount: Amount[0].Amount,
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
        const {code, airline_id} = req.body
        const data = {code, airline_id}

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
            const {code, airline_id} = req.body
            const data = {code, airline_id}
            const id = req.params.id
    
            flightModel.updateFlight(data, id)
            .then(result =>{
                res.json({
                    status:200,
                    message: 'Suksess',
                    data: data
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