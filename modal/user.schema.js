const mongoose=require("mongoose")

const userschema= mongoose.Schema({
     username:{type:String,requried:true},
     Email:{type:String,requried:true},
     password:{type:String,requried:true},
     confirmPassword:{type:String,requried:true}
     
})
const User =mongoose.model('User',userschema)


module.exports =User