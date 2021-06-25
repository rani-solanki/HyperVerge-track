const router = require('express').Router()
const User = require('../../models/users');
const crypto = require('crypto');
const auth = require("../../middleware/auth")
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("config");

// user Authrigation
router.get('/auth', auth, async(req,res)=>{
    try {
        const user = await User.findById(req.user.id)
        return res.json(user)

    } catch (err) {
        return res.status(500).send('server error')
    }
})

//  user or admin login
const valid = [
    check('email', 'please inclde unique and valid email'),
    check('password', 'please enter the sward passward').isLength({ min: 6 })
]

router.post('/login', valid,auth,async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()});
    }

    // Done validation 
    const { email, password } = req.body;
    try {

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: [{ msg: "invalid Email or passward" }] })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) { return res.status(400).json({ errors: [{ msg: "invalid passward" }] })}

        const payload = { user: {id:user._id} }
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
})

// forget Password;
router.post("/resetPassword",[
        check("email", "please enter a valid email").not().isEmpty()],
    async (req, res) => {
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
                const user = await User.findOne({ email: req.body.email });
                console.log(user);
                if (!user) {
                    return res
                        .status(500)
                        .json({ error: "user is not exit"});
                }
                user.resetToken = token;
                user.expaireToken = Date.now() + 360000;
                const result = await user.save();
                console.log("result")
                if (result) {
                    transporter.sendMail({
                        to: user.email,
                        from: "no-replay@insta.com",
                        subject: "Password Reset",
                        html: `<p> you requested for password reset</p>
            <h5>click on this <a href = "http://localhost:3000/${token}">link</a> to reset the password`
                    });
                    console.log("finally")
                    res.json({ messege: "check your email", token });
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).send("server error");
        }
    }
);

module.exports = router
