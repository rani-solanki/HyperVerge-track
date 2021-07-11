const { BookTickets, getTickets, cancelTickets} = require('../../controllers/tickets');
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const isAuth = require('../../middleware/auth');

console.log(BookTickets)
router.post("/buses/:busId/tickets", isAuth, [
    check("seats_no", "seats_no is required").not().isEmpty(),
    check("passengers", "passenger is required").not().isEmpty(),
    check("email", "email is required").not().isEmpty(),
    check("phoneNo", "phone is required").not().isEmpty(),
    check("departureDate", "epartureDate is required").not().isEmpty()

], BookTickets);

// get tickets 
router.get('/buses/:busId/tickets/:_id', isAuth, getTickets);

router.delete('/buses/:busId/tickets/:_id', isAuth, cancelTickets)

module.exports = router;


