const Director = require('../models/Director')
const directorsControllers = {
    getDirectors: async (req, res) => {
        try{
            let directors = await Director.find()
            res.json({ success: true, response: directors})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    addDirector: async (req, res) => {
        // have to check method of security here, from token or some other method.
        try{
            const newDirector = new Director({...req.body})
            let director = await newDirector.save()
            res.json({ success: true, response: director})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    updateDirector: async (req, res) => {
        // have to check method of security here, from token or some other method.
        // should refactor this code to be able to push / pull from arrays like directed, starred at, if desired.
        try{
            let { id } = req.params
            let updatedDirector = Director.findOneAndUpdate({_id: id}, {...req.body}, {new: true})
            if(!updatedDirector) throw new Error("Director not found")
            res.json({ success: true, response: updatedDirector})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    deleteDirector: async (req, res) => {
        // have to check method of security here, from token or some other method.
        try{
            let { id } = req.params
            let deletedDirector = Director.findOneAndDelete({_id: id})
            if(!deletedDirector) throw new Error("Director not found")
            res.json({ success: true, response: deletedDirector})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    }
}
module.exports = directorsControllers