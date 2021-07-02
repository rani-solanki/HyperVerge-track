const { validationResult } = require('express-validator');
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("config");

//@route  POST api/adminauth/login
//desc    admin login
//access  private

exports.adminLogin = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Done validation 
    const { email, password } = req.body;
    try {
        let admin = await User.findOne({ email });
        console.log(admin)
        if (!admin) {
            return res.status(400).json({ errors: [{ msg: "invalid Email or passward" }] })
        }
        const isMatch = await bcrypt.compare(password, admin .password);
        if (!isMatch) { return res.status(400).json({ errors: [{ msg: "invalid passward" }] }) }

        const payload = { admin: { id: admin._id } }
        jwt.sign(payload,
            config.jwtSecret,
            { expiresIn: 360000 }, (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('server error')
    }
}

