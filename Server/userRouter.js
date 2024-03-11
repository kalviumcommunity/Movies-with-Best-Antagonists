const express = require('express')
const router = express.Router()

router.use(express.json())

const { Model } = require('./schema.js')
const { UserModel } = require('./userSchema.js')

const Joi = require('joi')

require('dotenv').config()

const jwt = require('jsonwebtoken')

router.get('/users', async (req, res) => {
    try {
        const test = await UserModel.find({})
        console.log(test)
        res.send(test)
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/newUser', async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        cPassword: Joi.string().required().valid(Joi.ref('password')),
    })

    const {error , value} = schema.validate(req.body)

    if(error){
        console.log(error)
        res.send(error)
    }
    else{
        try {
            const data = UserModel.create(value)
            console.log(data)
            res.send(data)
        }
        catch (err) {
            console.log(err)
        }
    } 
})

router.post('/login', async(req,res) => {
    const { username, password } = req.body
    try{

        const user = await UserModel.findOne({ username,password });
        
        if (user) {
            console.log(user);
            return res.status(200).json({ success: true, message: 'Login successful' });
        } else {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
    }
    catch(err){
        console.log(err)
    }
})

router.post('/auth', async(req,res) => {
    const {username,password} = req.body
    const user = {
        "username" : username,
        "password" : password
    }

    const ACCESS_TOKEN = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({"acsessToken" : ACCESS_TOKEN})
})

module.exports = router