const Tickets = require("../models/Tickets")

const ticketsBooked  = async (busId) => {
    console.log(busId)
    let tickets = await Tickets.find({ busId });
    tickets = tickets.map((ticket) => ticket.seats_no);
    let bookedSeats = [].concat.apply([], tickets);
    console.log("sjkbhk",bookedSeats)
    return bookedSeats
};

module.exports = { ticketsBooked };

