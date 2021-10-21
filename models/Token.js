const mongoose = require('mongoose')
const tokenSchema = new mongoose.Schema({
    token:{type: String},
    valid:{type: Boolean, default: true}
})
const Token = mongoose.model('token', tokenSchema)
module.exports = Token