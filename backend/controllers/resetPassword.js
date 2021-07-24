const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const User = require('../models/users');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const apiKey = process.env.SENDGRID_KEY;
const sendgridTransort = require("nodemailer-sendgrid-transport");


//@route  POST api/auth/resetPassword
//desc    reset password
//access  private
const transporter = nodemailer.createTransport(
    sendgridTransort({
        auth: {
            api_key: apiKey
        }
    })
);

const validations = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errors
    }
    else {
        return false
    }
}

// forgot Password 
exports.resetPassword = async (req, res, next) => {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors });
    }
    try {
        crypto.randomBytes(32, async (err, buffer) => {
            if (err) {
                console.log(err);
            }
            const token = buffer.toString("hex");
            console.log(buffer);
            const user = await User.findOne({ email: req.body.email });
            console.log(user);
            if (!user) {
                return res
                    .status(500)
                    .json({ error: "user dont exist with that email" });
            }
            user.resetToken = token;
            user.expireToken = Date.now() + 360000;
            const result = await user.save();
            if (result) {
                transporter.sendMail({
                    to: user.email,
                    from: "rani19@navgurukul.org",
                    subject: "Password Reset",
                    html: `
            <p> you requested for password reset</p>
            <h5>click on this <a href = "http://localhost:3000/${token}">link</a> to reset the password
            `
                });
                return res.status(200).json({ messege: "check your email", token });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("server error");
    }
}

//@route  POST api/auth/newPassword
//desc    add new password
//access  private

exports.newPassword = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors });
    }
    try{
        const newPassword = req.body.password
        const resetToken = req.body.token
        const user = await User.findOne({ resetToken })
        if (!user) {
            return res.status(422).json({ error: "Try again session expired" })
        }
        const salt = bcrypt.genSalt(10)
        user.password = bcrypt.hash(newPassword, salt)
        user.resetToken = undefined
        user.expireToken = undefined
        console.log(user)

        const savedUser = user.save();
        if (savedUser) {
            return res.json({ message: "password updated success" })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json("server error")
    }
}
