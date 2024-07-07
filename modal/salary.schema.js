const mongoose=require("mongoose")

const Salaryschema= mongoose.Schema({
    Email:{type:String,required:true},
    BaseSalary:{type:Number,required:true},
    Bonus:{type:Number,required:true},
    TotalSalary:{type:Number,required:true}
     
     
     
},{
     timestamps:true,
     versionkey:false
})
const Salary=mongoose.model('Salary',Salaryschema)

module.exports =Salary