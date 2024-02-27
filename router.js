const express = require('express')
const router = express.Router()

router.use(express.json())

router.post('/post', (req,res) =>{ 
    try{
        res.status(200)
        const data = req.body
        console.log(data)
        res.json(data)
    }
    catch(err){
        console.log(err)
    }
})

router.get('/read',async (req,res) => {
    try{
        await res.json({message : "Data Read Succesfully"})
    }
    catch(err){
        console.log(err)
    }
})

router.put('/update',async (req,res) => {
    try{
        await res.json({message : "Data Updated Succesfully"})
    }
    catch(err){
        console.log(err)
    }
})

router.delete('/delete',async (req,res) => {
    try{
        await res.json({message : "Data Deleted Succesfully"})
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router