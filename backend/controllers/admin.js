const { check, validationResult } = require('express-validator');
const User = require('../models/users');
const bcrypt = require('bcrypt');

//@route  POST api/Admin/signup
//desc    register admin
//access  public

const validations = (req)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errors
    }
    else {
        return false
    }
}

const adminSignup = async (req, res, next)=>{
    const error = validations(req)
    if (error) {
        return next({ status: 401, error: "validation error" })
    }
    
    const { name, email, password, isAdmin } = req.body;
    try {
        let admin = await User.findOne({ email });
        if (admin) {
            return next({
                status: 400,
                errors: "admin is already exists"
            })
        }

        admin = new User(req.body)
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(password, salt);
        await admin.save();
        return res.status(200).json("admin registered")
    }
    catch (err) {
        return next({ status: 500, errors: "server error" })
    }
}

module.exports = { adminSignup }
