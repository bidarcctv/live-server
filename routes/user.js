const express = require('express')
const { createUser, getUsers , getUserById, updateUser, getWinners, addAuthUser, listadmins, login} = require('../controller/user')
const router = express.Router()


router.post('/user/create', createUser)
router.post('/auth/create', addAuthUser)
router.get('/auth/listadmins', listadmins)
router.get('/user/getall', getUsers)
router.post('/user/getuserbyid', getUserById)
router.post('/auth/login', login)
router.put('/user/update', updateUser)
router.get('/user/getwinners', getWinners)
// router.get('/',(req,res)=> { res.send('hello')})



module.exports = router
