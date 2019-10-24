const flightTransactionModel = require('../models/flightTransaction')
module.exports ={
    getAllFlightTransaction: (req, res) =>{
        flightTransactionModel.getAllFlightTransaction()
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
    addFlightTransaction: (req, res) =>{
        const invoice = Math.floor(Math.random() * 1000)
        const {total_price, users_id, routes_id } = req.body
        const data = {invoice, total_price, users_id, routes_id}

        flightTransactionModel.addFlightTransaction(data)
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

        updateFlightTransaction:(req, res)=>{
            const {total_price, users_id, routes_id} = req.body
            const data = {total_price, users_id, routes_id}
            const id = req.params.id
    
            flightTransactionModel.updateFlightTransaction(data, id)
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
        deleteFlightTransaction: (req, res)=>{
    
            flightTransactionModel.deleteFlightTransaction(req.params.id)
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