const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    name:{type: String, required: true},
    releasedOn:{type: Date, required: true, min:'1900-01-01'},
    duration:{type: Number, required: true},
    genre:{type: String, required: true, minlength: 4},
    languagues:[{type: String}],
    director:{type: mongoose.Types.ObjectId, ref:'director'},
    actors:[{type: mongoose.Types.ObjectId, ref:'actor'}],
})
const Movie = mongoose.model('movie', movieSchema)
module.exports = Movie