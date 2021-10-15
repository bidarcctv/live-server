const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    memberId: {
        type: String, 
        unique: true, 
        required: true
    },
    memberName: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    address: {
        type: String,
        trim: true
    },
    remarks: {
        type: String,
        trim: true
    }

})

module.exports = mongoose.model('User', userSchema)