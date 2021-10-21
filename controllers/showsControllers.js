const Show = require('../models/Show')
const showsControllers = {
    getShows: async (req, res) => {
        try{
            let shows = await Show.find()
            res.json({ success: true, response: shows})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    addShow: async (req, res) => {
        // have to check method of security here, from token or some other method.
        try{
            const newShow = new Show({...req.body})
            let show = await newShow.save()
            res.json({ success: true, response: show})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    updateShow: async (req, res) => {
        // have to check method of security here, from token or some other method.
        // should refactor this code to be able to push / pull from arrays like episodes if desired.
        try{
            let { id } = req.params
            let updatedShow = Show.findOneAndUpdate({_id: id}, {...req.body}, {new: true})
            if(!updatedShow) throw new Error("Show not found")
            res.json({ success: true, response: updatedShow})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    },
    deleteShow: async (req, res) => {
        // have to check method of security here, from token or some other method.
        try{
            let { id } = req.params
            let deletedShow = Show.findOneAndDelete({_id: id})
            if(!deletedShow) throw new Error("Show not found")
            res.json({ success: true, response: deletedShow})
        }catch(e){
            res.json({ success: false, response: e.message})
        }
    }
}
module.exports = showsControllers