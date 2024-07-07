const express=require('express')
const { signUp, login} = require('../controller/user.controller')


const router=express.Router()
router.post('/user/signup',signUp)
router.post('/login/user',login)

module.exports=router