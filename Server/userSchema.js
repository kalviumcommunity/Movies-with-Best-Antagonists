const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : String,
    username : String,
    password : String,
    cPassword : String
})

const UserModel = mongoose.model("user",userSchema)

module.exports = {UserModel}