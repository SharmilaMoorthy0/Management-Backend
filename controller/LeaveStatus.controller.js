const LeaveStatus = require("../modal/LeaveStatus.schema")






const newLeaveStatus = async (req, res) => {
    try {
       const {  leaveStatus} = req.body
      
       
       let data={
        leaveStatus
      
       }
       const saveleaveStatus=await LeaveStatus.create(data)
       if(!saveleaveStatus) {
          return res.json({ status: 0, message: "  LeaveStatus not created" })
       }
       res.json({ status: 1, message: "  LeaveStatuscreated successfully" })
    } catch (error) {
       console.log("  LeaveStatus.controller.js/newLeaveStatus-->error", error)
    }
 }

 const allLeaveStatus= async (req, res) => {
    try {
       const leaveStatus = await LeaveStatus.find()
       if (!leaveStatus) {
          return res.json({ status: 0, message: " LeaveStatus not found" })
       }
       res.json({ status: 1, response:leaveStatus})
    } catch (error) {
       console.log(" LeaveStatus.controller.js/allLeaveStatus-->error", error)
    }
 }
 
 const editLeaveStatus= async (req, res) => {
    try {
       const { id } = req.params
       if (!id) {
          return res.json({ status: 0, message: "LeaveStatus id requried" })
       }
       const leaveStatus = await LeaveStatus.findByIdAndUpdate(id, req.body)
 
       if (!leaveStatus) {
          return res.json({ status: 0, message: " LeaveStatus not updated" })
       }
       res.json({ status: 1, message: " LeaveStatus updated successfully" })
    } catch (error) {
       console.log(" LeaveStatuss.controller.js/editLeaveStatus-->error", error)
    }
 }

 const DeleteLeaveStatus = async (req, res) => {
    try {
       const { id } = req.params
       if (!id) {
          return res.json({ status: 0, message: "LeaveStatus id requried" })
       }
       const leaveStatus= await LeaveStatus.findByIdAndDelete(id)
       
       if (!leaveStatus) {
          return res.json({ status: 0, message: " LeaveStatus not deleted" })
       }
       res.json({ status: 1, message: " LeaveStatus deleted successfully" })
    } catch (error) {
      
       console.log(" LeaveStatuss.controller.js/DeleteLeaveStatus-->error", error)
    }
 }

 module.exports={newLeaveStatus,allLeaveStatus,editLeaveStatus,DeleteLeaveStatus}