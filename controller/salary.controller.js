const Tosend = require("../mail/Sendmail")
const Manage = require("../modal/Manage.schema")
const Leave = require("../modal/leave.schema")
const Salary = require("../modal/salary.schema")




const newSalary = async (req, res) => {
   try {
      const {Email,BaseSalary,Bonus,TotalSalary } = req.body
     
      if (!Email) {
         return res.json({ status: 0, message: "Email requried" })
      }
      const checkuser = await Manage.findOne({ Email: Email })
      if (!checkuser) {
         return res.json({ status: 0, message: "no user found" })
      }
    
      let data = {
       Email,
        BaseSalary,
        Bonus,
        TotalSalary
      }
      const saveSalary = await Salary.create(data)
      if (!saveSalary) {
         return res.json({ status: 0, message: "  Salary  not created" })
      }
      let subject=`salary of this month ${ TotalSalary}`
      let content=`Dear ${checkuser.FirstName} ${checkuser.LastName} ,your salary is ${ TotalSalary} credited`
      Tosend(checkuser.Email,subject,content)
      res.json({ status: 1, message: " Salary created successfully" })
   } catch (error) {
      console.log(" salary.controller.js/newSalary-->error", error)
   }
}

const allSalary= async (req, res) => {
   const{Email}=req.User
   try {
      const salary = await Salary.find({Email:Email})
      if (!salary) {
         return res.json({ status: 0, message: " Salary not found" })
      }
      res.json({ status: 1, response:salary})
   } catch (error) {
      console.log(" salary.controller.js/allSalary-->error", error)
   }
}
const allSalaryforAdmin = async (req, res) => {
  
   try {
      const salary = await Salary.find()
      if (!salary) {
         return res.json({ status: 0, message: " Salary not found" })
      }
      res.json({ status: 1, response: salary })
   } catch (error) {
      console.log(" salary.controller.js/allSalaryforAdmin-->error", error)
   }
}

const editSalary = async (req, res) => {
   try {
      const { id } = req.params
      if (!id) {
         return res.json({ status: 0, message: " Salary id requried" })
      }
      const salary = await Salary.findByIdAndUpdate(id, req.body)

      if (!salary) {
         return res.json({ status: 0, message: " Salary not updated" })
      }
      res.json({ status: 1, message: " Salary updated successfully" })
   } catch (error) {
      console.log("salary.controller.js/editSalary-->error", error)
   }
}

const DeleteSalary = async (req, res) => {
   try {
      const { id } = req.params
      if (!id) {
         return res.json({ status: 0, message: "Salary id requried" })
      }
      const salary = await Salary.findByIdAndDelete(id)

      if (!salary) {
         return res.json({ status: 0, message: "Salary not deleted" })
      }
      res.json({ status: 1, message: " Salary deleted successfully" })
   } catch (error) {
      console.log("salary.controller.js/DeleteSalary-->error", error)
   }
}

module.exports = { newSalary, allSalary,allSalaryforAdmin, editSalary, DeleteSalary }