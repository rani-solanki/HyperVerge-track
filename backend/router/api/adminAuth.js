const router = require('express').Router()
const User = require('../../models/users');
const auth = require("../../middleware/auth")
const { check } = require('express-validator');
const adminLoginController = require('../../controllers/Adminauth')

// admin Authrigation
router.get('/auth', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        return res.json(user)
    } catch (err) {
        return res.status(500).send('server error')
    }
})

// admin login
router.post('/login',
    [
        check('email', 'please inclde unique and valid email').isEmail(),
        check('password', 'please enter the passward').isLength({ min: 6 })
    ],
    adminLoginController.adminLogin , function(req, res){
})
    
module.exports = router;

