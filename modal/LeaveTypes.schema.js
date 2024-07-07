const mongoose=require("mongoose")

const LeaveTypeschema= mongoose.Schema({
    leaveType:{type:String,required:true}
     
     
     
},{
     timestamps:true,
     versionkey:false
})
const  LeaveType=mongoose.model('LeaveType', LeaveTypeschema)

module.exports =LeaveType