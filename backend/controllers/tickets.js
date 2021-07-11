const Ticket = require('../models/Tickets');
const Bus = require('../models/busSchema');

const validations = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errors
    }
    else {
        return false
    }
}

const BookTickets = async (req, res, next) => {
    try {
        if (error) { return next({ status: 400, error: "validation error" }) }
        const { seats_no, passengers, departureDate, email, phoneNo } = req.body

        const { seats_no, passengers, journeyDate, email, contactNo } = req.body;

        const createTicket = {
            seats_no,
            passengers,
            journeyDate,
            email,
            contactNo,
        };

        const bus = await Bus.findById(req.params.busId);
        if (!bus) {
            return res.status(400).json({ msg: "Bus NOt Found" });
        }
        let seats = bus.seats;
        for (var index = 0; index < seats.length; index++){
            for (var seat = 0; seat < seats.length; seat++){
                
            }
        }

    } catch (err) {
        console.log(err)
        return next({ status: 400, error:"server error"}
    }2
} 