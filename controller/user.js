const User = require('../model/user')


exports.createUser =(req,res)=>{
    let user = new User(req.body)
    user.save((err,user)=>{
        if(err){
            return res.status(401).json({
                status:'failed to create user',
                error:err
            })
        }
        res.json({
            status:'success',
            response:user
        })
    })
}

exports.getUsers = (req,res)=>{
    User.find().exec((err,users)=>{
        if(err){
            return res.status(401).json({
                status:'failed getting users',
                error : err
            })
        }
        res.json({
            status:'success',
            members:users
        })
    })
}


exports.getUserById = (req, res) => {
    User.find({ memberId: req.body.memberId }).exec((err, items) => {
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
}

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate({ _id: req.body._id }, { $set: req.body }, { new: true, useFindAndModify: false },
        (err, category) => {
            if (err) {
                return res.status(400).json({
                    err,
                    error: 'update user failed'
                })
            }
            category.__v = undefined
            res.json({status: 'success', message: 'User update successful'})
        })
}
