const express=require('express')

const auth = require('../middleware/auth')
const authForAdmin = require('../middleware/authForAdmin')
const { newSalary, DeleteSalary, allSalary, editSalary, allSalaryforAdmin } = require('../controller/salary.controller')




const router=express.Router()
router.post('/new/salary',newSalary)
router.delete('/Delete/salary/:id',DeleteSalary)
router.get('/all/salary',auth,allSalary)
router.get('/all/salary/admin',allSalaryforAdmin)

router.put('/update/salary/:id',editSalary)



module.exports=router