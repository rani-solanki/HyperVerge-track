const router = require('express').Router()
const User = require('../../models/users');
const isAuth = require("../../middleware/auth")
const { GetTickets, cancelTickets } = require("../../controllers/tickets");
const { check } = require('express-validator');
const userLoginController = require('../../controllers/auth')
const resetPasswordController = require('../../controllers/resetPassword');

// user Authrigation
router.get('/Auth', isAuth, async (req, res)=>{
    try {
        console.log(req.user.id)
        const user = await User.findById(req.user.id)
        console.log(user)
        return res.json(user)
    } catch (err) {
        return res.status(500).send('server error')
    }
})

//  user or admin login
router.post('/login',
    [
        check('email', 'please inclde unique and valid email').isEmail(),
        check('password', 'please enter the passward').isLength({ min: 6 })
    ],
    userLoginController.loginuser,async (req, res) => {
})

// reset Password;
router.post("/resetPassword",
    [
        check("email", "please enter a valid email").not().isEmpty()
    ],
    resetPasswordController.resetPassword,
    async (req, res) => {
    });

// set new password
router.post(
    "/newPassword",
    [
        check("password", "please enter a password").not().isEmpty()
    ],
    resetPasswordController.newPassword,
    async (req, res) => {
    }
)

// console.log("auth",GetTickets)
router.get("/tickets/ticket", isAuth, GetTickets)
router.delete("/tickets/ticket/_id", isAuth, cancelTickets)

module.exports = router;

