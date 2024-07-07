const express=require('express')
const { editLeave, allLeave, DeleteLeave, newLeave, allLeaveforAdmin } = require('../controller/leave.controller')
const auth = require('../middleware/auth')
const authForAdmin = require('../middleware/authForAdmin')




const router=express.Router()
router.post('/new/leave',auth,newLeave)
router.delete('/Delete/leave/:id',DeleteLeave)
router.get('/all/leave',auth,allLeave)
router.get('/all/leave/admin',allLeaveforAdmin)

router.put('/update/leave/:id',editLeave)



module.exports=router