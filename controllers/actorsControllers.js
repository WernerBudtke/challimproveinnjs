const Actor = require('../models/Actor')
const actorsControllers = {
    getActors: async (req, res) => {
        try{
            let actors = await Actor.find()
            res.json({ success: true, response: actors})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    addActor: async (req, res) => {
        // have to check method of security here, from token or some other method.
        try{
            const newActor = new Actor({...req.body})
            let actor = await newActor.save()
            res.json({ success: true, response: actor})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    updateActor: async (req, res) => {
        // have to check method of security here, from token or some other method.
        // should refactor this code to be able to push / pull from arrays like directed, starred at, if desired.
        try{
            let { id } = req.params
            let updatedActor = Actor.findOneAndUpdate({_id: id}, {...req.body}, {new: true})
            if(!updatedActor) throw new Error("Actor not found")
            res.json({ success: true, response: updatedActor})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    deleteActor: async (req, res) => {
        // have to check method of security here, from token or some other method.
        try{
            let { id } = req.params
            let deletedActor = Actor.findOneAndDelete({_id: id})
            if(!deletedActor) throw new Error("Actor not found")
            res.json({ success: true, response: deletedActor})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    }
}
module.exports = actorsControllers