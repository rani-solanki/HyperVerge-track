const { validationResult } = require('express-validator');
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("config");

//@route  POST api/users/signup
//desc    register user
//access  public

const validations = (req) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return error
    }
    else {
        return false
    }
}

const userSignup = async (req, res, next) => {
    console.log(req.body)
    const error = validations(req)
    if (error) {
        return next({ status: 401, err: "server error" })
    }

    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return next({
                status: 400,
                errors: "User is already exists"
            })
        }

        user = new User(req.body)
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        return res.status(200).json("User Regiater seccuesfully")
    }
    catch (err) {
        return next({status: 500, err: "server error" })
    }
}

module.exports = {userSignup}

