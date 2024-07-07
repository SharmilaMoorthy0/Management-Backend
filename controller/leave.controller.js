const Leave = require("../modal/leave.schema")




const newLeave = async (req, res) => {
   try {
      const { From, To, Reason,Description ,client,Image,status} = req.body
      const userId = req.User.userId
      let data = {
         From,
         To,
         Reason,
         Description,
         client,
         Image,
         status,
         createdby: userId

      }
      const saveLeave = await Leave.create(data)
      if (!saveLeave) {
         return res.json({ status: 0, message: "  Leave not applied" })
      }
      res.json({ status: 1, message: "  Leave applied successfully" ,leave:data})
   } catch (error) {
      console.log(" leave.controller.js/newLeave-->error", error)
   }
}

const allLeave = async (req, res) => {
   
   try {
      const leave = await Leave.find({ createdby:req.User.userId})
      if (!leave) {
         return res.json({ status: 0, message: " Leave not found" })
      }
      res.json({ status: 1, response: leave })
   } catch (error) {
      console.log(" leave.controller.js/allLeave-->error", error)
   }
}
const allLeaveforAdmin = async (req, res) => {
  
   try {
      const leave = await Leave.find()
      if (!leave) {
         return res.json({ status: 0, message: " Leave not found" })
      }
      res.json({ status: 1, response: leave })
   } catch (error) {
      console.log(" leave.controller.js/allLeaveforAdmin-->error", error)
   }
}

const editLeave = async (req, res) => {
   try {
      const { id } = req.params
      if (!id) {
         return res.json({ status: 0, message: "Leave id requried" })
      }
      const leave = await Leave.findByIdAndUpdate(id, req.body)

      if (!leave) {
         return res.json({ status: 0, message: "Leave not updated" })
      }
      res.json({ status: 1, message: " Leave updated successfully" })
   } catch (error) {
      console.log("leave.controller.js/editLeave-->error", error)
   }
}

const DeleteLeave = async (req, res) => {
   try {
      const { id } = req.params
      if (!id) {
         return res.json({ status: 0, message: "Leave id requried" })
      }
      const leave = await Leave.findByIdAndDelete(id)

      if (!leave) {
         return res.json({ status: 0, message: "Leave not deleted" })
      }
      res.json({ status: 1, message: " Leave deleted successfully" })
   } catch (error) {
      console.log("leave.controller.js/DeleteLeave-->error", error)
   }
}



 

module.exports = { newLeave, allLeave,allLeaveforAdmin, editLeave, DeleteLeave}