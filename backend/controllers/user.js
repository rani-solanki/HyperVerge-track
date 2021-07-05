const { validationResult } = require('express-validator');
const User = require('../models/users');
const bcrypt = require('bcrypt');

//@route  POST api/users/signup
//desc    register user
//access  public
const validations = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errors
    }
    else {
        return false
    }
}

exports.userSignup = async (req, res, next) => {
    const error = validations(req)
    if (error) {
        next(error)
        return res.json({ "validation error": error })
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
        return res.status(200).json("user registered")
    }
    catch (err) {
        next(err)
        return res.status(500).json({ "msg": "server error" })
    }
}












