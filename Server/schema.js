const mongoose = require('mongoose')

const mySchema = mongoose.Schema({
    srNo : Number,
    antagonist : String,
    movie : String,
    portrayed_by : String,
    imageLinks : String
})

const Model = mongoose.model("bestantagonists-collection",mySchema)

module.exports = {Model}