const express = require('express')
const router = express.Router()

router.use(express.json())

router.post('/post', (req,res) =>{ 
    try{
        const data = req.body
        console.log(data)
        res.json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({ message: 'Server Error' })
    }
})

router.get('/read',async (req,res) => {
    try{
        res.json({message : "Data Read Succesfully"})
    }
    catch(err){
        console.log(err)
    }
})

router.put('/update',async (req,res) => {
    try{
        res.json({message : "Data Updated Succesfully"})
    }
    catch(err){
        console.log(err)
    }
})

router.delete('/delete',async (req,res) => {
    try{
        res.json({message : "Data Deleted Succesfully"})
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router