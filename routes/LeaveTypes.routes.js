const express=require('express')
const { newLeaveType, DeleteLeaveType, allLeaveType, editLeaveType } = require('../controller/LeaveTypes.controller')





const router=express.Router()
router.post('/new/leave/type',newLeaveType)
router.delete('/Delete/leave/type/:id',DeleteLeaveType)
router.get('/all/leave/type',allLeaveType)

router.put('/update/leave/type/:id',editLeaveType)



module.exports=router
