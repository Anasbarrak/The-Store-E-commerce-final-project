const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String,required:true} ,
    Email: String,
    Password: String,
    Date_Of_Birth: String,
    Phone_Number: Number
})
module.exports = mongoose.model('user', userSchema)