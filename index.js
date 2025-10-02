const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user.routes')
const EmployeRoutes=require('./routes/Manage.routes.js')
const CategoryRoutes=require('./routes/category.routes.js')
const LeaveRoutes=require('./routes/leave.routes.js')
const LeaveTypeRoutes=require('./routes/LeaveTypes.routes.js')
const SalaryRoutes=require('./routes/salary.routes.js')
const StatusRoutes=require('./routes/LeaveStatus.routes.js')


const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())

app.use(cors())
app.use('/', userRoutes)
app.use('/',EmployeRoutes)
app.use('/',CategoryRoutes)
app.use('/',LeaveRoutes)
app.use('/',LeaveTypeRoutes)
app.use('/',SalaryRoutes)
app.use('/',StatusRoutes)



const URI = "mongodb+srv://sharmilamoorthy:sharmila2025@cluster0.qqbwzvc.mongodb.net/"
mongoose.connect(URI).then(() => {
    app.listen(PORT, () => {
        console.log(`server is running in ${PORT}`)
        console.log(`mongodb connected`)
    })
}).catch((err) => {
    console.log(err)
})