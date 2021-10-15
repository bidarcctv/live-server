const mongoose = require('mongoose')


const receiptSchema = new mongoose.Schema({
    receiptDate:{
        type:Date,
        required:true
    },
    receiptNo:{
        type:Number,
        required:true,
        unique:true,
        index: true
    },
    memberId:{
        type:String,
        required:true
    },
    memberName:{
        type:String,
        required:true
    },
    installmentNo:{
        type:Number,
        required:true
    },
    receiptAmount:{
        type:Number,
        required:true
    },
    remark:{
        type:String
    },
    smsPhone:{
        type:Number
    }

})

module.exports = mongoose.model('Receipt',receiptSchema)