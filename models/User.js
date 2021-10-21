const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true, minlength:2, maxlength:35},
    lastName: {type: String, required: true, minlength:2, maxlength:35},
    password: {type: String, required: true, minlength: 6, maxlength:255},
    eMail: {type: String, required: true, unique: true, minlength: 6, maxlength:255},
    admin: {type: Boolean, default: false},
    disabled:{type: Boolean, default: false},
    disabledAt:{type: Date}
})
const User = mongoose.model('user', userSchema)
module.exports = User