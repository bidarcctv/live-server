const Receipt = require('../model/receipts')
const User = require('../model/user')


exports.getReceiptId = (req, res, next, _id) => {
    Receipt.findById(_id).exec((err, receipt) => {
        if (err) {
            return res.status(500).json({
                error: "category id not found."
            })
        }
        req.profile = receipt
        next()
    })
}

exports.createReceipt =(req,res)=>{
    Receipt.find().exec((err,receipts)=>{
        let receipt = new Receipt(req.body);

        // console.log(receipts.map(d=> d.receiptNo).includes(receipt.receiptNo));
        if(!receipts.map(d=> d.receiptNo).includes(receipt.receiptNo)){
            receipt.save((err,receipt)=>{
                if(err){
                    return res.status(401).json({
                        status:'failed to add receipt',
                        error:err
                    })
                }
                console.log(receipt);
                res.json({
                    status:'success',
                    response:receipt
                })
            })
        }else{
            res.json({
                status: 'failed',
                response: 'Receipt ' +receipt.receiptNo + ' already exist'
            })
        }
    })
    // console.log(Receipt);
}

exports.getReceipt = (req,res)=>{
    Receipt.find().exec((err,receipts)=>{
        if(err){
            return res.status(401).json({
                status:'failed getting receipts',
                error : err
            })
        }
        res.json({
            status:'success',
            count:receipts.length,
            response:receipts
        })
        req.profiles = receipts
    })
}

exports.getReceiptByMember = (req, res) => {
    User.findOne({ memberId: req.body.memberId }).exec((err, items) => {

        if (items == null) {
            return res.status(401).json({
                error: "Users not found"
            })
        }
        Receipt.find({ memberId: req.body.memberId }).exec((err, items) => {
            if (err) {
                return res.status(401).json({
                    error: err
                })
            }
            res.json({
                status: 'success',
                response: items
            })
        })
    })
    
}

exports.updateReceipt = (req, res) => {
    Receipt.findByIdAndUpdate({ _id: req.body._id }, { $set: req.body }, { new: true, useFindAndModify: false },
        (err, category) => {
            if (err) {
                return res.status(400).json({
                    err,
                    error: 'update receipt failed'
                })
            }
            category.__v = undefined
            res.json({status: 'success', message: 'Receipt update successful'})
        })
}

exports.removeReceipt = (req, res) => {
    const receipt = req.profile
    console.log(receipt)
    receipt.remove((err, receipt) => {
        if (err || !receipt) {
            return res.status(400).json({
                error: "delete receipt failed"
            })
        }
        res.json({
            status: 'success',
            response: receipt,
            message: 'Successfully Deleted.'
        })
    })
}