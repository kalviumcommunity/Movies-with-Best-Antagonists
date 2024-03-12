const express = require('express')
const router = express.Router()

router.use(express.json())

const {Model} = require('./schema.js')

const Joi = require('joi')

router.get('/list', async (req,res) => {
    try{
        const test = await Model.find({})
        console.log(test)
        res.send(test)
    }
    catch(err){
        console.log(err)
    }
})

router.get('/list/:id', async (req,res) => {
    const _id = req.params.id
    Model.findById({_id})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

router.delete('/delete/:id', async(req,res) => {
    const _id = req.params.id
    Model.findByIdAndDelete({_id:_id})
    .then(res => res.json(res))
    .catch(err => console.log(err))
})

router.put(`/updateUser/:id`, async(req,res) => {
    const schema = Joi.object({
        srNo : Joi.number().required(),
        antagonist : Joi.string().required(),
        movie :Joi.string().required(),
        portrayed_by : Joi.string().required(),
        imageLinks : Joi.string().required(),
        createdBy : Joi.string()
    })
    const {error,value} = schema.validate(req.body)

    if(error){
        console.log(error)
        res.send(error)
    }
    else{
        res.send(value)
        const _id = req.params.id
        Model.findByIdAndUpdate({_id : _id},{
            srNo : req.body.srNo,
            antagonist : req.body.antagonist,
            movie : req.body.movie,
            portrayed_by : req.body.portrayed_by,
            imageLinks : req.body.imageLinks
        })
        .catch(err => res.json(err))
    }
})

router.post('/newEntity' , async(req,res) => {
    const schema = Joi.object({
        srNo : Joi.number().required(),
        antagonist : Joi.string().required(),
        movie :Joi.string().required(),
        portrayed_by : Joi.string().required(),
        imageLinks : Joi.string().required(),
        createdBy : Joi.string()
    })
    const {error,value} = schema.validate(req.body)

    if(error){
        console.log(error)
        res.send(error)
    }
    else{
        console.log(value)
        res.send(value)
        try{
            const data = Model.create(req.body)
            console.log(data)
            res.send(data)
        }
        catch(err){
            console.log(err)
        }
    }
})


module.exports = router