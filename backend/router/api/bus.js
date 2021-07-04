const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const busController = require('../../controllers/bus');
const auth = require('../../middleware/auth');

router.post('/signup',
    [
        check("busName", "enter the bus name").not().isEmpty(),
        check("agency", "enter the bus agency").not().isEmpty(),
        check("vehicleNo", "enter the vehicle no.").not().isEmpty(),
        check("seats", "enter the seats").not().isEmpty(),
        check("busType", "enter the busType").not().isEmpty(),
        check("seatCategory", "enter the seatCategory").not().isEmpty(),
        check("busStaff", "create the busStaff").not().isEmpty(),
        check("policy", "enter the bus policy").not().isEmpty(),
        check("image", "enter the bus image").not().isEmpty(),
        check("from", "enter the start location").not().isEmpty(),
        check("to", "enter the last location").not().isEmpty(),
        check("arrivalTime", "enter the arrivalTime").not().isEmpty(),
        check("departureTime", "enter the departureTime").not().isEmpty()
    ],
    auth, busController.userSignup,
    async (req, res) => {
    })

module.exports = router;
