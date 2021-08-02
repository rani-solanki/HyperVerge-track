const { validationResult } = require('express-validator');
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("config");

//@route  POST api/adminauth/login
//desc    admin login
//access  private

const validations = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errors
    }
    else {
        return false
    }
}
const getSignedJwtToken = function (
    payload,
    secret = config.get("jwtSecret"),
    expiresIn = 36000000
) {
    return jwt.sign(payload, secret, { expiresIn });
};

const adminLogin = async (req, res, next) => {
    const error = validations(req);
    if (error){
        return next({
            status: 401,
            error:"validation error"
        })
    }
    
    // Done validation 
    const { email, password} = req.body;
    try {
        let admin = await User.findOne({ email });
        if (!admin) {
            return res.status(400).json({ errors: [{ msg: "invalid Email or passward" }] })
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) { return res.status(400).json({ errors: [{ msg: "invalid passward" }] }) }
        const isAdmin = admin.isAdmin
        const payload = {
            admin: {
                id: admin._id,
                isAdmin
            }
        }
        const token = getSignedJwtToken(payload)
        return res.status(200).json({ token })
    }
    catch (err) {
        return res.status(500).json({"msg":"server error"})
    }
}

module.exports = {adminLogin}