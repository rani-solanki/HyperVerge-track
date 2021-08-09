const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const userSignupController = require('../../controllers/user');

// user signup;
router.post('/signup',
    [
        check('name', "name is required")
            .not().isEmpty(),
        check('email', 'Please write the valid email').isEmail(),
        check('password', 'please enter the sward passward')
            .isLength({ min: 6 })
    ],
    userSignupController.userSignup,
    async (req, res) => {
    })
            
module.exports = router;


