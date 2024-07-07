const LeaveType = require("../modal/LeaveTypes.schema")





const newLeaveType = async (req, res) => {
    try {
       const {  leaveType} = req.body
      
       
       let data={
        leaveType
      
       }
       const saveleaveType=await LeaveType.create(data)
       if(!saveleaveType) {
          return res.json({ status: 0, message: "  LeaveType not created" })
       }
       res.json({ status: 1, message: "  LeaveType created successfully" })
    } catch (error) {
       console.log("  LeaveTypes.controller.js/newLeaveType-->error", error)
    }
 }

 const allLeaveType= async (req, res) => {
    try {
       const leaveType = await LeaveType.find()
       if (!leaveType) {
          return res.json({ status: 0, message: " LeaveType not found" })
       }
       res.json({ status: 1, response:leaveType})
    } catch (error) {
       console.log(" LeaveTypes.controller.js/allLeaveType-->error", error)
    }
 }
 
 const editLeaveType= async (req, res) => {
    try {
       const { id } = req.params
       if (!id) {
          return res.json({ status: 0, message: "LeaveType id requried" })
       }
       const leaveType = await LeaveType.findByIdAndUpdate(id, req.body)
 
       if (!leaveType) {
          return res.json({ status: 0, message: " LeaveType not updated" })
       }
       res.json({ status: 1, message: " LeaveType updated successfully" })
    } catch (error) {
       console.log(" LeaveTypes.controller.js/editLeaveType-->error", error)
    }
 }

 const DeleteLeaveType = async (req, res) => {
    try {
       const { id } = req.params
       if (!id) {
          return res.json({ status: 0, message: "LeaveType id requried" })
       }
       const leaveType= await LeaveType.findByIdAndDelete(id)
       
       if (!leaveType) {
          return res.json({ status: 0, message: " LeaveType not deleted" })
       }
       res.json({ status: 1, message: " LeaveType deleted successfully" })
    } catch (error) {
      
       console.log(" LeaveTypes.controller.js/DeleteLeaveType-->error", error)
    }
 }

 module.exports={newLeaveType,allLeaveType,editLeaveType,DeleteLeaveType}