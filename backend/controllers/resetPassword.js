const {validationResult } = require('express-validator');
const User = require('../models/users');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer")
const crypto = require('crypto');

//@route  POST api/auth/resetPassword
//desc    reset password
//access  private

exports.resetPassword = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors });
    }
    try {
        crypto.randomBytes(32, async (err, res,buffer) => {
            if (err) { console.log(err); }

            const token = buffer.toString("hex");
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(500) .json({ error: "user is not exit" });
            }
            user.resetToken = token;
            user.exprieToken = Date.now() + 360000;

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: "rani19@navgurukul.org",
                    pass: "navgurukul@19"
                }
            });
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Server is ready to take our messages!");
                }
            });
            const mail = {
                to: user.email,
                from: "no-replay@insta.com",
                subject: "Password Reset",
                html: `<p> you requested for password reset</p>
            <h5>click on this <a href = "http://localhost:3000/${token}">link</a> to reset the password`
            }
            transporter.sendMail(mail, (err, data) => {
                if (err) {
                    return res.status(400).json({ status: 'fail'})
                } else {
                    return res.status(200).json({ messege: "check your email", token });
                }
            })
        })

    } catch (err) {
        return res.status(500).send("server error");
    }
}

//@route  POST api/auth/newPassword
//desc    add new password
//access  private

exports.newPassword = async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors });
    }
    try {
        const newPassword = req.body.password
        const sentToken = req.body.token
        const user = User.findOne({ resetToken: sentToken, exprieToken: { $gt: Date.now() }})
        console.log(user)
        if (!user) {
            return res.status(422).json({ error: "Try again session expired" })
        }
        bcrypt.hash(newPassword, 12).then(hashedpassword => {
            user.password = hashedpassword
            user.resetToken = undefined
            user.expireToken = undefined
        })
        await user.save()
        return res.json({ message: "password updated success" })
        
    } catch (err) {
        console.log("server error")
    }
}
