const express=require('express')
const { newLeaveStatus, DeleteLeaveStatus, allLeaveStatus, editLeaveStatus } = require('../controller/LeaveStatus.controller')




const router=express.Router()
router.post('/new/leave/Status',newLeaveStatus)
router.delete('/Delete/leave/Status/:id',DeleteLeaveStatus)
router.get('/all/leave/Status',allLeaveStatus)

router.put('/update/leave/Status/:id',editLeaveStatus)



module.exports=router
