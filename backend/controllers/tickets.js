const Ticket = require('../models/Tickets');
const Bus = require('../models/busSchema');
const { ticketsBooked } = require('../Serches/BookTickets');
const { validationResult } = require('express-validator');

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
    const error = validations(req)
    if (error) {
        return next({
            status: 400,
            error: "validation error"
        })
    }
    
    try {
        const { seats_no, passengers, phoneNo, journeyDate, email, } = req.body;
        const bookTickets={
            seats_no,
            passengers,
            phoneNo,
            email,
            journeyDate
        };

        const bus = await Bus.findById(req.params.busId);
        if (!bus) {
            return res.status(400).json({ msg: "Bus NOt Found" });
        }
        const BookedSeats = await ticketsBooked(req.params.busId);
    
        // Not available seats 
        let seats = bus.seats;
        const selected_seats = seats_no
        isBooked = seats_no.filter((bookedSeat) => {
            return BookedSeats.includes(bookedSeat);
        })
        
        var val = false
        console.log(seats,selected_seats)
        for (let index = 0; index < selected_seats.length; index++) {
            if (seats[index].includes(selected_seats[index])) {
                val = true
            } else {
                val = false
                return res.status(404).json({ "seats Not found": selected_seats[index] })
            }

            if(isBooked.length > 0) {
                return res.status(400).json({ "msg": "These seats are already book" })
            }
        }
        if (val === true) {
            bookTickets.userId = req.user.user.id
            bookTickets.busId = bus.id
            const Tickets = new Ticket(bookTickets);
            console.log(Tickets)
            await Tickets.save();
            return res.status(200).json(bookTickets);
        }
    }catch(err) {
        console.log(err);
        return next({ status: 500, error: "server error" })
    }
}

// const cancel tickets
const cancelTickets = async (req, res) => {
    console.log("Cancel the tickets")
    const _id = req.params._id

    // search tickets
    const ticket = await Ticket.findOne({ _id })
    if (!ticket) {
        return res.status(404).json({ 'msg': "Ticket Not Found" })
    }
    
    // remove tickets
    const remove = await Ticket.findOneAndRemove({ _id })
    return res.status(200).json({"msg":"Tickets has been removed"})
}

// get Booked Tikets
const GetTickets = async (req, res, next) => {
    const tickets = await Ticket.find({ userId: req.user.user.id }).populate('busId');
    console.log()
    if (!tickets.length) {
        return next({ status: 400, errors: "You have not booked any ticket" });
    }
    
    console.log(tickets);
    res.status(200).json(tickets);
};

module.exports = { BookTickets,cancelTickets, GetTickets };