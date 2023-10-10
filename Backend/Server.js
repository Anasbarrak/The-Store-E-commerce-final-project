const express = require('express');
const cors= require('cors')
const userRout = require('./Router/UserRouter');
const connectDatabase = require ('./Configuration/Config');
const ProductRouter = require('./Router/ProductRouter');
const router = require('./Router/EmailRoutes');
const stripe = require('./Router/stripe');
const port= 5000;
const app= express()
app.use(express.json())
connectDatabase()
app.use(cors({
    origin:"http://localhost:3000"
}))
app.use("/user",userRout) 
app.use("/product",ProductRouter) 
app.use("/email",router)
app.use("/stripe",stripe)
app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})


