const mongoose = require('mongoose');
const products=require('../Model/ProductModel');


exports.getProduct=async(req,res)=>{
    try {
        const Many_products=await products.find()
        res.status(200).send({msg:'Done', Many_products})
        
    } catch (error) {
        res.status(500).send(error)

    }
}

exports.addproduct = async (req, res) => {
    try {
      const newproduct = new products({ ...req.body});
      await newproduct.save();
      res.status(200).send({ msg: "Product added successfully", newproduct });
    } catch (error) {
      res.status(500).send({ msg: "Could not add product" });
    }
};
exports.updateProduct= async(req, res)=>{
    try {
        const updateproduct= await products.findByIdAndUpdate(req.params.id,{
            $set: req.body})
        res.status(200).send({msg:'Updated successfully', updateproduct})
    } catch (error) {
        res.status(401).send(error)
    }
}

exports.deleteProduct=async(req, res)=>{
    try {
        const product_delete = await products.findByIdAndDelete(req.params.id)
        res.status(200).send({msg: "Deleted successfully", product_delete})
    } catch (error) {
        res.status(500).send(error)
    }
}