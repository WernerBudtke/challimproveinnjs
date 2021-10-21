const Episode = require('../models/Episode')
const episodeControllers = {
    getEpisodes: async (req, res) => {
        try{
            let episodes = await Episode.find()
            res.json({ success: true, response: episodes})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    getEpisode: async (req, res) => {
        try {
            const { id } = req.params
            let episode = await Episode.findOne({_id: id}).populate({path: 'director', select:['firstName', 'lastName']}).populate({path: 'actors', select:['firstName', 'lastName']})
            res.json({ success: true, response: episode })
        } catch (e) {
            res.json({ success: false, response: e.message })
        }
    },
    addEpisode: async (req, res) => {
        // have to check method of security here, from token or some other method.
        try{
            const newEpisode = new Episode({...req.body})
            let episode = await newEpisode.save()
            res.json({ success: true, response: episode})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    updateEpisode: async (req, res) => {
        // have to check method of security here, from token or some other method.
        // should refactor this code to be able to push / pull from arrays like actors if desired.
        try{
            let { id } = req.params
            let updatedEpisode = Episode.findOneAndUpdate({_id: id}, {...req.body}, {new: true})
            if(!updatedEpisode) throw new Error("Episode not found")
            res.json({ success: true, response: updatedEpisode})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    deleteEpisode: async (req, res) => {
        // have to check method of security here, from token or some other method.
        try{
            let { id } = req.params
            let deletedEpisode = Episode.findOneAndDelete({_id: id})
            if(!deletedEpisode) throw new Error("Episode not found")
            res.json({ success: true, response: deletedEpisode})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    }
}
module.exports = episodeControllers