
const express=require('express')

const auth = require('../middleware/auth')
const authForAdmin = require('../middleware/authForAdmin')
const { Employelogin, newEmploye, DeleteEmploye, allEmploye, allEmployeForAdmin, editEmploye } = require('../controller/Manage.controller')
const router=express.Router()
router.post('/login/employe', Employelogin)

router.post('/new/employe',newEmploye)
router.delete('/Delete/employe/:id',DeleteEmploye)
router.get('/all/employe',auth,allEmploye)
router.get('/all/employe/admin',allEmployeForAdmin)

router.put('/update/employe/:id',editEmploye)



module.exports=router