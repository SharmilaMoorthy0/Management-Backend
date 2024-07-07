const mongoose=require("mongoose")

const Categoryschema= mongoose.Schema({
    category:{type:String,required:true}
     
     
     
},{
     timestamps:true,
     versionkey:false
})
const Category=mongoose.model('Category',Categoryschema)

module.exports =Category