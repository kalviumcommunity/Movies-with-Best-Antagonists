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

router.get('/items', async(req,res) => {
    try{
        const test = await Model.find({})
        console.log(test)
        res.send(test)
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router