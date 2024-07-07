const Category = require("../modal/category.schema")


const newCategory = async (req, res) => {
    try {
       const { category} = req.body
      
       
       let data={
        category
      
       }
       const saveCategory=await Category.create(data)
       if(!saveCategory) {
          return res.json({ status: 0, message: "  Category not created" })
       }
       res.json({ status: 1, message: "  Category created successfully" })
    } catch (error) {
       console.log(" category.controller.js/newCategory-->error", error)
    }
 }

 const allCategory= async (req, res) => {
    try {
       const category  = await Category.find()
       if (!category) {
          return res.json({ status: 0, message: " Category not found" })
       }
       res.json({ status: 1, response:category})
    } catch (error) {
       console.log("category.controller.js/allCategory-->error", error)
    }
 }
 
 const editCategory= async (req, res) => {
    try {
       const { id } = req.params
       if (!id) {
          return res.json({ status: 0, message: "Category id requried" })
       }
       const category = await Category.findByIdAndUpdate(id, req.body)
 
       if (!category) {
          return res.json({ status: 0, message: "Category not updated" })
       }
       res.json({ status: 1, message: " Category updated successfully" })
    } catch (error) {
       console.log("category.controller.js/editCategory-->error", error)
    }
 }

 const DeleteCategory = async (req, res) => {
    try {
       const { id } = req.params
       if (!id) {
          return res.json({ status: 0, message: "Category id requried" })
       }
       const category= await Category.findByIdAndDelete(id)
       
       if (!category) {
          return res.json({ status: 0, message: "Category not deleted" })
       }
       res.json({ status: 1, message: " Category deleted successfully" })
    } catch (error) {
       console.log("category.controller.js/DeleteCategory-->error", error)
    }
 }

 module.exports={newCategory,allCategory,editCategory,DeleteCategory}