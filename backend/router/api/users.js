const express = require('express');
const router = express.Router();
const { check} = require('express-validator');
const userSignupController = require('../../controllers/user');

// user signup;
router.post('/signup',
    [
        check('name', "name is required")
            .not().isEmpty(),
        check('email', 'please inclde unique and valid email')
            .isEmail(),
        check('password', 'please enter the sward passward')
            .isLength({ min: 6 }),
        check('isAdmin', 'please confirm isAdmin ')
            .not().isBoolean(),
],
    userSignupController.userSignup,
    async (req, res) => {
    })
    
module.exports = router;


