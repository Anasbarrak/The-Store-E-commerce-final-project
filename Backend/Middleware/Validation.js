const { body, validationResult } = require("express-validator");

exports.registerValidation=[
    body('Email', 'Invalid email format').isEmail(),
    body('Password', 'Minimum length of password is 6 characters').isLength({min:6})
]
exports.loginValidation=[
    body('Email', 'Invalid email').isEmail(),
    body("Password", 'Minimum length of password is 6 characters').isLength({min:6})
]
exports.validation = (req, res, next)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    next()
}