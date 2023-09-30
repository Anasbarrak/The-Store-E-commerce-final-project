const express = require("express")
const { getProduct, deleteProduct, updateProduct, addproduct } = require("../Controller/ProductController")
const { isAuth } = require("../Middleware/IsAuth")
const ProductRouter = express.Router()
ProductRouter.post("/addproduct",isAuth,addproduct)
ProductRouter.get("/allproducts",getProduct)
ProductRouter.delete("/deleteproduct/:id",deleteProduct)
ProductRouter.put("/updateproduct/:id",updateProduct)

module.exports= ProductRouter