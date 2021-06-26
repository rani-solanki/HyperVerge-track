const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("config");

const authorization = [
    check('name', "name is required").not().isEmpty(),
    check('email', 'please inclde unique and valid email').isEmail(),
    check('password', 'please enter the sward passward').isLength({ min: 6 }),
    check('isAdmin', 'please confirm isAdmin ').not().isBoolean(),
]

router.post('/signup',authorization, async (req, res) => {
    const error = validationResult(req.body)
    if (!error.isEmpty()) {return res.status(400).json({error:error.array() })}
    const {name,email,password,isAdmin}=req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(404).send({"error":"user already exit"})
        }
        user = new User({
            name,
            email,
            password,
            isAdmin
        })
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        await user.save();

        const payload = {
            user: {id:user.id}
        }
        jwt.sign(payload,
            config.jwtSecret, (err, token) => {
                if (err) throw err;
                return res.json({ token });
            });
        await user.save();
        return res.send("user rgisered")
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})
module.exports = router;
