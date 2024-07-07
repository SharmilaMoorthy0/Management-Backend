const Manage = require('../modal/Manage.schema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const newEmploye = async (req, res) => {
   try {
      const { Image, FirstName, LastName, Email, Password, Mobile, DateOfBirth, DateOfJoining, Category, Gender, Age } = req.body
      const checkEmail = await Manage.findOne({ Email: Email })
      if (checkEmail) {
         return res.json({ status: 0, message: "email already taken" })
      }

      let data = {
         Image,
         FirstName,
         LastName,
         Email,
         Password,
         Age,
         Mobile,
         DateOfBirth,
         DateOfJoining,
         Category,
         Gender,



      }

      const saveEmploye = await Manage.create(data)
      if (!saveEmploye) {
         return res.json({ status: 0, message: " Employee not created" })
      }
      res.json({ status: 1, message: " Employee created successfully" })
   } catch (error) {
      console.log("Manage.controller.js/newEmploye-->error", error)
   }
}



const allEmployeForAdmin = async (req, res) => {
   try {

      const Employe = await Manage.find()
      if (!Employe) {
         return res.json({ status: 0, message: "Employe not found" })
      }
      res.json({ status: 1, response: Employe })
   } catch (error) {
      console.log("Manage.controller.js/allEmployeForAdmin-->error", error)
   }
}
const allEmploye = async (req, res) => {
   try {
      const { Email } = req.User

      const Employe = await Manage.find({ Email: Email })
      if (!Employe) {
         return res.json({ status: 0, message: "Employe not found" })
      }
      res.json({ status: 1, response: Employe })
   } catch (error) {
      console.log("Manage.controller.js/allEmploye-->error", error)
   }
}

const editEmploye = async (req, res) => {
   try {

      const { id } = req.params


      if (!id) {
         return res.json({ status: 0, message: "Employe id requried" })
      }
      const Employe = await Manage.findByIdAndUpdate(id, req.body)

      if (!Employe) {
         return res.json({ status: 0, message: "Employe not updated" })
      }
      res.json({ status: 1, message: "updated successfully" })
   } catch (error) {
      console.log("Manage.controller.js/editEmploye-->error", error)
   }
}

const DeleteEmploye = async (req, res) => {
   try {
      const { id } = req.params
      if (!id) {
         return res.json({ status: 0, message: "Employe id requried" })
      }
      const Employe = await Manage.findByIdAndDelete(id)

      if (!Employe) {
         return res.json({ status: 0, message: "Employe not deleted" })
      }
      res.json({ status: 1, message: "deleted successfully" })
   } catch (error) {
      console.log("Manage.controller.js/DeleteEmploye-->error", error)
   }
}

// const EmployeDetails=async(req,res)=>{
//    try {
//       const{id}=req.params
//       if(!id){
//          return res.json({ status: 0, message: "Employe id requried" })
//       }
//       const Employe=await Manage.findById(id) 

//       if (!Employe) {
//          return res.json({ status: 0, message: "Employe details not found" })
//       }
//       res.json({ status: 1, res:Employe})
//    } catch (error) {
//       console.log("Manage.controller.js/Employedetails-->error", error)
//    }
// }
const Employelogin = async (req, res) => {
   try {
      const { Email, Password } = req.body
      if (!Email || !Password) {
         return res.json({ status: 0, message: "all credentials needed" })
      }
      const checkUser = await Manage.findOne({ Email: Email })
      if (!checkUser) {
         return res.json({ status: 0, message: "User not found" })
      }

      if (!(Password === checkUser.Password)) {
         return res.json({ status: 0, message: "Invalid Password" })
      }

      let token = jwt.sign({ userId: checkUser._id, Email: checkUser.Email }, "ABCD123", { expiresIn: '1hr' })
      res.json({ status: 1, message: "login successfully", token: token, user: checkUser })
   } catch (error) {
      console.log("manage.controller.js/Employelogin-->error", error)
   }
}
const EmployeSearch=async(req,res)=>{
   try {
       const { query } = req.body;
       const results = await Manage.find({
           $or: [
             { FirstName: { $regex: query, $options: 'i' } }, // Case-insensitive search on productName
           //   { description: { $regex: query, $options: 'i' } } // Case-insensitive search on description
           ]
         });
         res.json({ status: 1,response: results });
       } catch (error) {
          console.log("manage.controller.js/EmployeSearch-->error", error)

     }
   }
module.exports = { newEmploye, DeleteEmploye, editEmploye, allEmployeForAdmin, Employelogin, allEmploye ,EmployeSearch}
