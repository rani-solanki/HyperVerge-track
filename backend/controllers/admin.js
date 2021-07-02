const { validationResult } = require('express-validator');
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("config");

//@route  POST api/Admin/signup
//desc    register admin
//access  public

exports.adminSignup = async (req, res, next) => {
    const error = validationResult(req.body)
    if (!error.isEmpty()) {
        return next(error)
        // return res.status(400).json({ error: error.array() })
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

        const payload = {
            admin: { id: admin.id }
        }
        jwt.sign(payload,
            config.jwtSecret, (err, token) => {
                if (err) throw err;
                console.log(token)
                return res.json({ token });
            });
        await admin.save();
    }
    catch (err) {
        return next({
            status: 400,
            errors: "admin is already exists"
        })
    }
}

