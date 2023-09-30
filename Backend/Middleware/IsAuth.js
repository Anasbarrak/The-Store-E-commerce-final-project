const jwt = require ('jsonwebtoken')
const User = require('../Model/UserModel')


exports.isAuth = async(req, res, next)=>{
    const token= req.header('token')
    try {
        const deCode = jwt.verify(token, '123456')
        if (!deCode){
            res.status(400).send({message:'You are not auth'})
        }
        const user = await User.findById(deCode.id)
        req.user = user
        next()
    } catch (error) {
        console.log(error)
    }
}