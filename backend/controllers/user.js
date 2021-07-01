const {validationResult } = require('express-validator');
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("config");
const {errorNotification} = require('./errorHandler');

//@route  POST api/users/signup
//desc    register user
//access  public

exports.userSignup = async (req, res, next) => {
    const error = validationResult(req.body)
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }
    const { name, email, password, isAdmin } = req.body;
    try {
        let user = await User.findOne({ email });
        console.log("user.password",user)
        if (user){
            return res.status(404).send({ "error": "user already exit" })
        }
        // user = new User(req.body)
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        
        const payload = {
            user: { id: user.id }
        }
        jwt.sign(payload,
            config.jwtSecret, (err, token) => {
                if (err) throw err;
                return res.json({ token });
            });
        await user.save();
    }
    catch (err) {
        console.log(err,res)
        return res.status(500).json({ "msg": "server error" })
    }
}










