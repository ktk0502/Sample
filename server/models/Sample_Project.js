const mongoose = require('mongoose')

const SampleSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String
})

const SampleModel = mongoose.model("Sample_Project",SampleSchema)
module.exports = SampleModel