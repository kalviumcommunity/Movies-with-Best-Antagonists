const mongoose = require('mongoose')

const mySchema = mongoose.Schema({
    id : Number,
    antagonist : String,
    movie : String,
    portrayed_by : String,
    imageLink : String
})

const Model = mongoose.model("bestantagonists-collection",mySchema)

module.exports = {Model}