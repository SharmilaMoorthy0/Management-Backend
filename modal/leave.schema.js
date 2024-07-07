const mongoose=require("mongoose")

const Leaveschema= mongoose.Schema({
    From:{type:String,required:true},
    To:{type:String,required:true},
    Reason:{type:String,required:true},
    Description:{type:String,required:true},
    client:{type:String},
    Image:{type:String},
    status:{type:String,default:"Pending"},
    createdby:{type:mongoose.Types.ObjectId}
     
     
     
},{
     timestamps:true,
     versionkey:false
})
const Leave=mongoose.model('Leave',Leaveschema)

module.exports =Leave