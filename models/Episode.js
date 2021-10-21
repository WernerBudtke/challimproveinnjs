const mongoose = require('mongoose')
const episodeSchema = new mongoose.Schema({
    name:{type: String, required: true},
    duration:{type: Number, required: true},
    actors:[{type: mongoose.Types.ObjectId, ref:'actor'}],
    director:{type: mongoose.Types.ObjectId, ref:'director'}
})
const Episode = mongoose.model('episode', episodeSchema)
module.exports = Episode