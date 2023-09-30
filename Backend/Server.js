const express = require('express');
const userRout = require('./Router/UserRouter');
const connectDatabase = require('./Configuration/Config');
const ProductRouter = require('./Router/ProductRouter');
const port= 5000;
const app= express()
app.use(express.json())
connectDatabase()
app.use("/user",userRout) 
app.use("/product",ProductRouter) 
app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})