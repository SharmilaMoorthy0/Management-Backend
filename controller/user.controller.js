const bcrypt = require('bcryptjs')
const User= require('../modal/user.schema')
const jwt=require('jsonwebtoken')

const signUp = async (req, res) => {
    try {
       const { username, Email, password } = req.body
       const checkEmail=await User.findOne({Email:Email})
       if(checkEmail){
          return res.json({status:0,message:"email already taken"})
       }
       let hashpassword = await bcrypt.hash(password, 10)
       let data = {
          username,
          Email,
          password: hashpassword
          
       }
       const saveUser = await User.create(data)
       if (!saveUser) {
          return res.json({ status: 0, message: "user not created" })
       }
       res.json({ status: 1, message: "user created successfully" })
    } catch (error) {
       console.log("user.controller.js/signUp-->error",error)
    }
 }
 const login = async (req, res) => {
    try {
       const { Email, password } = req.body
       if (!Email || !password) {
          return res.json({ status: 0, message: "all credentials needed" })
       }
       const checkUser = await User.findOne({ Email: Email })
       if (!checkUser) {
          return res.json({ status: 0, message: "user not found" })
       }
       const ComparePassword = await bcrypt.compare(password, checkUser.password)
       if (!ComparePassword) {
          return res.json({ status: 0, message: "Invalid Password" })
       }
       let token=jwt.sign({userId:checkUser._id,username:checkUser.username,Email:checkUser.Email},"ABCD123",{expiresIn:'1hr'})
       res.json({ status: 1, message: "login successfully",token:token,user:checkUser  })
    } catch (error) {
       console.log("user.controller.js/login-->error", error)
    }
 }
 
module.exports = { signUp,login}