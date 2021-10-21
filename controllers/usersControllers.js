const User = require('../models/User')
const Token = require('../models/Token')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const generateTokens = (user) => {
    const token = jwt.sign({...user}, process.env.SECRETORKEY, {expiresIn: '30m'})
    const refreshToken = jwt.sign({...user}, process.env.SECRETORKEY, {expiresIn: '4h'})
    const newRefreshToken = new Token({
        token: refreshToken,
    })
    return {token, refreshToken, newRefreshToken}
}
const userControllers = {
    signUp: async (req, res) =>{
        console.log("Received Sign Up petition:" + Date())
        const {lastName, firstName, password, eMail} = req.body
        let hashedPass = bcryptjs.hashSync(password)
        const newUser = new User({
            firstName,
            lastName,
            password : hashedPass,
            eMail,
        })
        try{
            await newUser.save()
            const {token, refreshToken, newRefreshToken} = generateTokens(newUser)
            await newRefreshToken.save()
            res.json({success: true, response: {token, refreshToken}})

        }catch(e){
            res.json({success: false, response: e.message})
        }
    },
    signIn: async (req, res)=>{
        console.log("Received Sign In petition:" + Date())
        const {eMail, password} = req.body
        try{
            let user = await User.findOne({eMail})
            if(!user) throw new Error('User not found')
            if(!bcryptjs.compareSync(password, user.password))throw new Error('Invalid username or password')
            const {token, refreshToken, newRefreshToken} = generateTokens(user)
            await newRefreshToken.save()
            res.json({success: true, response: {token, refreshToken}})
        }catch(e){
            res.json({success: false, response: e.message})
        }
    },
    refreshToken: async (req, res) =>{
        console.log("Received Valid from Local Storage User Check Petition:" + Date())
        try{
            const {headers, user} = req
            if(!headers.authorization)throw new Error('Bad headers')
            let oldToken = headers.authorization.replace('Bearer ', '')
            let foundToken = await Token.findOneAndUpdate({token: oldToken, valid: true},{valid:false})
            if(!foundToken)throw new Error("This token isn't valid")
            const {token, refreshToken, newRefreshToken} = generateTokens(user)
            await newRefreshToken.save()
            res.json({success: true, response: {token, refreshToken}})
        }catch(e){
            res.json({success: false, response: e.message})
        }
    },
}
module.exports = userControllers