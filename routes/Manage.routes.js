const express=require('express')
const { newEmploye, DeleteEmploye, editEmploye, allEmployeForAdmin, Employelogin, allEmploye } = require('../controller/Manage.controller')
const authForAdmin = require('../middleware/authForAdmin')
const auth = require('../middleware/auth')

const router=express.Router()
router.post('/new/employe',newEmploye)
router.delete('/Delete/employe/:id',DeleteEmploye)
router.get('/all/employe/admin',allEmployeForAdmin)
router.get('/all/employe',auth,allEmploye)
router.put('/update/employe/:id',editEmploye)
// router.get('/employe/details/:id',EmployeDetails)
router.post('/login/employe' ,Employelogin)




module.exports=router