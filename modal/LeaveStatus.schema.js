const mongoose=require("mongoose")

const LeaveStatusschema= mongoose.Schema({
    leaveStatus:{type:String,required:true}
     
     
     
},{
     timestamps:true,
     versionkey:false
})
const  LeaveStatus=mongoose.model('LeaveStatus', LeaveStatusschema)

module.exports =LeaveStatus