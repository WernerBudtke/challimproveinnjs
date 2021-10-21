const mongoose = require('mongoose')
const directorSchema = new mongoose.Schema({
    firstName: {type: String, required: true, minlength:2, maxlength:35},
    lastName: {type: String, required: true, minlength:2, maxlength:35},
    directedMovies: [{type: mongoose.Types.ObjectId, ref:'movie'}],
    directedEpisodes: [{type: mongoose.Types.ObjectId, ref:'show'}]
})
const Director = mongoose.model('director', directorSchema)
module.exports = Director