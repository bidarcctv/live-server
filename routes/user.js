const express = require('express')
const { createUser, getUsers , getUserById, updateUser} = require('../controller/user')
const router = express.Router()


router.post('/user/create', createUser)
router.get('/user/getall', getUsers)
router.post('/user/getuserbyid', getUserById)
router.put('/user/update', updateUser)
// router.get('/',(req,res)=> { res.send('hello')})



module.exports = router
