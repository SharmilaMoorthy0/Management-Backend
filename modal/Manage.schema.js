const mongoose=require("mongoose")

const Manageschema= mongoose.Schema({
      Image:{type:String,requried:true},
     FirstName:{type:String,requried:true},
     LastName:{type:String},
     Email:{type:String,requried:true},
     Password:{type:String,requried:true},
     Age:{type:String,requried:true},
     Mobile:{type:Number,requried:true},
     DateOfBirth:{type:String,requried:true},
     DateOfJoining:{type:String,requried:true},
     Category:{type:String,requried:true},
     Gender:{type:String,requried:true},
    

     
     
     
},{
     timestamps:true,
     versionkey:false
})
const Manage=mongoose.model('Manage',Manageschema)

module.exports =Manage