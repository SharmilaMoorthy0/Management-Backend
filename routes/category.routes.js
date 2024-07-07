
const express=require('express')
const { newCategory, DeleteCategory, allCategory, editCategory } = require('../controller/category.controller')




const router=express.Router()
router.post('/new/category',newCategory)
router.delete('/Delete/category/:id',DeleteCategory)
router.get('/all/category',allCategory)

router.put('/update/category/:id',editCategory)



module.exports=router


