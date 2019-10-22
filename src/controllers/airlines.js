const airlinesModel = require('../models/airlines')
module.exports ={
    getAllAirlines: (req, res) =>{
        airlinesModel.getAllAirlines()
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
    addAirlines: (req, res) =>{
        const {id, name, code, facilities_id} = req.body
        const data = {id, name, code, facilities_id}

        airlinesModel.addAirlines(data)
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

        updateAirlines:(req, res)=>{
            const {name, code, facilities_id} = req.body
            const data = {name, code, facilities_id}
            const id = req.params.id
    
            airlinesModel.updateAirlines(data, id)
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
        deleteAirlines: (req, res)=>{
    
            airlinesModel.deleteAirlines(req.params.id)
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