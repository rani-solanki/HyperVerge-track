const Ticket = require('../models/Tickets');
const Bus = require('../models/busSchema');
const { ticketsBooked } = require('../Serches/BookTickets');
const { validationResult } = require('express-validator');
const Tickets = require('../models/Tickets');

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
    console.log(error)
    if (error) {
        return next({
            status: 400,
            error: "validation error"
        })
    }

    try {
        const { seats_no, passengers, phoneNo, departureDate, email, } = req.body;
        const bookTickets = {
            seats_no,
            passengers,
            phoneNo,
            email,
            departureDate
        };
        const bus = await Bus.findById(req.params.busId);
        console.log(bus)
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
            bookTickets.userId = req.user.id
            bookTickets.busId = bus.id
            const Tickets = new Ticket(bookTickets);
            await Tickets.save();
            return res.status(200).json(bookTickets);
        }
    }catch(err) {
        console.log(err);
        return next({ status: 400, error: "server error" })
    }
}

// get the tickets 
const getTickets = (req, res) => {
    const _id = req.params.id
    const busId = req.params.busId
    const bus = Bus.findOne({ busId })
    if (!bus) {
        return res.status(404).json({'msg':"Bus Not Found"})
    }

    const ticket = Ticket.findOne({ _id })
    if (!ticket.isEmpty()) {
        return res.status(404).json({ 'msg': "Bus Not Found" })
    }
    
    return res.status(200).json(ticket)
}

// const cancel tickets
const cancelTickets = async (req, res) => {
    const _id = req.params._id
    const busId = req.params.busId

    // search bus
    const bus = await Bus.findById(busId)
    console.log(bus)
    if (!bus) {
        return res.status(404).json({ 'msg': "Bus Not Found" })
    }
    // search tickets
    const ticket = await Ticket.findOne({ _id })
    if (!ticket) {
        return res.status(404).json({ 'msg': "Ticket Not Found" })
    }

    // remove tickets
    const remove = await Ticket.findOneAndRemove({ _id })
    return res.status(200).json({"msg":"Tickets has been removed"})
}

module.exports = { BookTickets, getTickets, cancelTickets };