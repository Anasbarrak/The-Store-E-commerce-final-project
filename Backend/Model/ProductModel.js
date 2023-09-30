const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: String ,
    price: Number,
    desc: String,
    img: String,
   
})
module.exports = mongoose.model('product', productSchema)