const express = require('express')
const router = express.Router()

router.use(express.json())

const { Model } = require('./schema.js')
const { UserModel } = require('./userSchema.js')

const Joi = require('joi')

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

module.exports = router