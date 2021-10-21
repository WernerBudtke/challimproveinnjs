const express = require('express')
const passport = require('passport')
const router = express.Router()

const usersControllers = require('../controllers/usersControllers')
router.route('/user/signup')
.post(usersControllers.signUp)
router.route('/user/signin')
.post(usersControllers.signIn)
router.route('/user/refreshtoken')
.get(
    passport.authenticate('jwt', {session: false}),
    usersControllers.refreshToken
)

const moviesControllers = require('../controllers/moviesControllers')
router.route('/movies/')
.post(moviesControllers.getMovies)
router.route('/movies/add')
.post(moviesControllers.addMovie)
router.route('/movie/:id')
.put(moviesControllers.updateMovie)
.delete(moviesControllers.deleteMovie)

const directorsControllers = require('../controllers/directorsControllers')
router.route('/directors/')
.post(directorsControllers.addDirector)
.get(directorsControllers.getDirectors)
router.route('/director/:id')
.put(directorsControllers.updateDirector)
.delete(directorsControllers.deleteDirector)

const actorsControllers = require('../controllers/actorsControllers')
router.route('/actors/')
.post(actorsControllers.addActor)
.get(actorsControllers.getActors)
router.route('/actor/:id')
.put(actorsControllers.updateActor)
.delete(actorsControllers.deleteActor)

const episodesControllers = require('../controllers/episodesControllers')
router.route('/episodes/')
.post(episodesControllers.addEpisode)
.get(episodesControllers.getEpisodes)
router.route('/episode/:id')
.get(episodesControllers.getEpisode)
.put(episodesControllers.updateEpisode)
.delete(episodesControllers.deleteEpisode)

const showsControllers = require('../controllers/showsControllers')
router.route('/shows/')
.post(showsControllers.addShow)
.get(showsControllers.getShows)
router.route('/show/:id')
.put(showsControllers.updateShow)
.delete(showsControllers.deleteShow)

module.exports = router