const User = require('../model/user');
const Auth = require('../model/auth');


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

exports.listadmins = (req,res)=> {
     Auth.find().exec((err,admins)=>{
        if(err){
            return res.status(401).json({
                status:'failed getting users',
                error : err
            })
        }


        console.log(admins)

        let result = []
        admins.map(d=> {
            let {username, _id} = d;
            result.push({username, _id})
        })

        console.log(result)
        
        res.json({
            status:'success',
            adminUsers:result
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
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    err,
                    error: 'update user failed'
                })
            }
            user.__v = undefined
            res.json({status: 'success', message: 'User update successful', user: user})
        })
}

exports.login = (req, res) => {
    Auth.findOne({username:req.body.username, password: req.body.password}).exec((err, user) => {
        if (err) {
            return res.status(401).json({
                error: err
            })
        }
        

        if(!user){
            res.json({
                status: 'fail',
                message:'invalid credentials'
            })
            return
        }else if(user && user.isAdmin == 'true'){ 
            res.json({
                status: 'success',
                response: {"user": user.username, "admin": true}
            })
            return
        }


        // let result
        // if(user.password == req.body.password){

        // }
        res.json({
            status: 'success',
            response: user
        })
    })
}

exports.getWinners = (req, res) => {
    User.find({ remarks: 'Winner' }).exec((err, items) => {
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

exports.addAuthUser = (req,res) => {
    let authUser = new Auth(req.body)
    authUser.save((err,aU)=>{
        if(err){
            return res.status(401).json({
                status: 'failed to create auth user',
                error: err
            })
        }
        res.json({
            status:'sucess',
            response:aU
        })
    })
}

