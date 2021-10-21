const Movie = require('../models/Movie')
const moviesControllers = {
    getMovies: async (req, res) => {
        try {
            const { filterBy } = req.body
            let willFilterFor = filterBy ? { ...filterBy } : ""
            let movies = await Movie.find({ ...willFilterFor })
            res.json({ success: true, response: movies })
        } catch (e) {
            res.json({ success: false, response: e.message })
        }
    },
    addMovie: async (req, res) => {
        // have to check method of security here, from token or some other method.
        try{
            const newMovie = new Movie({...req.body})
            let movie = await newMovie.save()
            res.json({ success: true, response: movie})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    updateMovie: async (req, res) => {
        // have to check method of security here, from token or some other method.
        try{
            let { id } = req.params
            let updatedMovie = Movie.findOneAndUpdate({_id: id}, {...req.body}, {new: true})
            if(!updatedMovie) throw new Error("Movie not found")
            res.json({ success: true, response: updatedMovie})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    deleteMovie: async (req, res) => {
        // have to check method of security here, from token or some other method.
        try{
            let { id } = req.params
            let deletedMovie = Movie.findOneAndDelete({_id: id})
            if(!deletedMovie) throw new Error("Movie not found")
            res.json({ success: true, response: deletedMovie})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    }
}
module.exports = moviesControllers