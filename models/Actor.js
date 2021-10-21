const mongoose = require('mongoose')
const actorSchema = new mongoose.Schema({
    firstName: {type: String, required: true, minlength:2, maxlength:35},
    lastName: {type: String, required: true, minlength:2, maxlength:35},
    performedInMovies: [{type: mongoose.Types.ObjectId, ref:'movie'}],
    performedInEpisodes: [{type: mongoose.Types.ObjectId, ref:'show'}]
})
const Actor = mongoose.model('actor', actorSchema)
module.exports = Actor