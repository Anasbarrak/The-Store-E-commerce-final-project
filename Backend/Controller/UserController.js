const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users=require('../Model/UserModel');


exports.getUSER=async(req,res)=>{
    try {
        const getuser=await user.find()
        res.status(200).send({msg:'Done', getuser})
        
    } catch (error) {
        res.status(500).send(error)

    }
}

exports.updateUser= async(req, res)=>{
    try {
        const updateuserstatus= await user.findOne()
        res.status(200).send({msg:'Updated successfully', updateuserstatus})
    } catch (error) {
        res.status(401).send(error)
    }
}

exports.deleteUSER=async(req, res)=>{
    try {
        const deleteuser = await user.findByIdAndDelete(req.params.id)
        res.status(200).send({msg: "Deleted successfully", deleteuser})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.register= async(req, res)=>{
    const {name,Email, Password, Date_Of_Birth, Phone_Number}= req.body
    try {
        const find= await users.findOne({Email})
        if (find) {
            res.status(400).send({errors:[{msg:'Email already registered'}]})   
        }
        else {
            const NewUser = new users(req.body)
            const salt=10
            const hashpassword= bcrypt.hashSync(Password, salt)
            NewUser.Password = hashpassword
            const data = {
                id: users._id,
            }
            const token = jwt.sign(data, '123456')
            await NewUser.save()
            res.status(200).send({msg: 'Registered successfully', NewUser, token})
        }
    } catch (error) {
        res.status(500).send({msg:'Registering failed', error})
    }
}
exports.loginUser= async(req, res)=>{
    const {Email,Password}=req.body
    try {
        const user = await users.findOne({Email})
        if (!user){
            res.status(400).send({errors:[{message:'Email does not exist'}]})
        }
        else {
            const Compare = bcrypt.compareSync(Password, user.Password)
            if(!Compare){
                res.status(400).send({errors:[{message:'Wrong password'}]})
            }
            else {
                const data = {
                    id: user._id,
                }
                const token = jwt.sign(data, '123456')
                res.status(200).send({msg:'Login successfully', user, token})
            }
        }
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}
exports.logoutUser= async(req, res)=>{
    const {Email,Password}=req.body
    try {
        const user = await users.findOne({Email})
        if (!user){
            res.status(400).send({errors:[{message:'Email does not exist'}]})
        }
        else {
            const Compare = bcrypt.compareSync(Password, user.Password)
            if(!Compare){
                res.status(400).send({errors:[{message:'Wrong password'}]})
            }
            else {
                const data = {
                    id: user._id,
                }
                const token = jwt.sign(data, '123456')
                res.status(200).send({msg:'Login successfully', user, token})
            }
        }
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}
