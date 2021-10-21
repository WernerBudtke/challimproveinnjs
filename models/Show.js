const mongoose = require('mongoose')
const seasonSchema = new mongoose.Schema({
    name:{type: String, required: true},
    episodes:[{type: mongoose.Types.ObjectId, ref:'episode'}]
})
const showSchema = new mongoose.Schema({
    name:{type: String, required: true},
    airedOn:{type: Date, required: true, min:'1900-01-01'},
    genre:{type: String, required: true, minlength: 4},
    languagues:[{type: String}],
    director:{type: mongoose.Types.ObjectId, ref:'director'},
    actors:[{type: mongoose.Types.ObjectId, ref:'actor'}],
    seasons:[seasonSchema],
})
const Show = mongoose.model('show', showSchema)
module.exports = Show