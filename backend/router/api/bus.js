const { getBus, searchBus } = require('../../controllers/bus');
const { FindBusStatus } = require('../../controllers/Status');
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const isAuth = require('../../middleware/auth');
const { BookTickets } = require('../../controllers/tickets');

// get the bus ;
router.get("/:busId", isAuth, getBus, (req, res) => { })

//  tickets status
router.get('/status/:busId', isAuth, FindBusStatus);

// search bus
router.post('/searchbus', isAuth, [
    check('from', "from is required").not().isEmpty(),
    check('to', "to is required").not().isEmpty(),
    check('date', "date is required").not().isEmpty()
], searchBus);

router.post("/:busId/tickets", isAuth, [
    check("seats_no", "seats_no is required").not().isEmpty(),
    check("passengers", "passenger is required").not().isEmpty(),
    check("email", "email is required").not().isEmpty(),
    check("phoneNo", "phone is required").not().isEmpty(),
    check("journeyDate", "epartureDate is required").not().isEmpty()

], BookTickets);
module.exports = router;