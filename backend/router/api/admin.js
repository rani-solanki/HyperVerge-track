const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const adminController = require('../../controllers/admin');

// admin signup;
router.post('/signup',
    [
        check('name', "name is required").not().isEmpty(),
        check('email', 'please inclde unique and valid email').isEmail(),
        check('password', 'please enter the sward passward').isLength({ min: 6 }),
        check('isAdmin','please enter the admin').not().isEmpty()
    ],
    adminController.adminSignup, async (req, res) => { }
)

module.exports = router;

