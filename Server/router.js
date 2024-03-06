const express = require('express')
const router = express.Router()

router.use(express.json())

const {Model} = require('./schema.js')

router.post('/post', (req,res) =>{ 
    try{
        const data = req.body
        console.log(data)
        res.json(data)
    }
    catch(err){
        console.log(err)
        res.send(err)
        res.status(500).json({ message: 'Server Error' })
    }
})

router.get('/read',(req,res) => {
    try{
        res.json({message : "Data Read Succesfully"})
    }
    catch(err){
        console.log(err)
    }
})

router.put('/update',(req,res) => {
    try{
        res.json({message : "Data Updated Succesfully"})
    }
    catch(err){
        console.log(err)
    }
})

router.delete('/delete',(req,res) => {
    try{
        res.json({message : "Data Deleted Succesfully"})
    }
    catch(err){
        console.log(err)
    }
})

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
    const _id = req.params.id
    Model.findByIdAndUpdate({_id : _id},{
        srNo : req.body.srNo,
        antagonist : req.body.antagonist,
        movie : req.body.movie,
        portrayed_by : req.body.portrayed_by,
        imageLinks : req.body.imageLinks
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

router.post('/newEntity' , async(req,res) => {
    try{
        const data = Model.create(req.body)
        console.log(data)
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
})


module.exports = router