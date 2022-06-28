const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    username:{
        type: String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:String
    }
}, {timestamps:true})

module.exports = mongoose.model('Auth', authSchema)