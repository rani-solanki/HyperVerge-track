const Tickets = require("../models/Tickets")

const ticketsBooked  = async (busId) => {
    let tickets = await Tickets.find({ busId });
    tickets = tickets.map((ticket) => ticket.seats_no);
    let bookedSeats = [].concat.apply([], tickets);
    return bookedSeats
};

module.exports = { ticketsBooked };

