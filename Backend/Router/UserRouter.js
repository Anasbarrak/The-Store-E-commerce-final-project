const mongoose = require("mongoose");
const {getUSER, deleteUSER, register, loginUser, logoutUser} = require("../Controller/UserController");
const express=require("express");
const { loginValidation, validation, registerValidation } = require("../Middleware/Validation");
const { isAuth } = require("../Middleware/IsAuth");
const userRout=express.Router();

userRout.get("/get",getUSER);
userRout.delete("/delete/:id", deleteUSER );
userRout.post('/register', registerValidation, validation, register);
userRout.post('/login',loginValidation ,validation , loginUser)
userRout.get('/getuser', isAuth, (req, res)=>{
    res.send({user: req.user})
})
userRout.post('/logout', validation, logoutUser)
module.exports=userRout


