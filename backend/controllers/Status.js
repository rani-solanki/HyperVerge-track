const Bus = require('../models/busSchema');
const { ticketsBooked } = require('../Serches/BookTickets');

const FindBusStatus = async (req, res) => {
    try {
        const bus = await Bus.findById(req.params.busId);
        if (!bus) {
            return res.status(400).json({ msg: "there is no such bus" });
        }
        const seats = bus.seats;
        let BookedSeats = await ticketsBooked(req.params.busId);
        
        let ticketsStatus = {};
        for (let index = 0; index < seats.length; index++) {
            for (let Pointer = 0; Pointer < seats[index].length; Pointer++){
                if (BookedSeats.includes(seats[index][Pointer])){
                    ticketsStatus[`${seats[index][Pointer]}`] = "Booked";
                } else {
                    ticketsStatus[`${seats[index][Pointer]}`] = "Empty";
                }
            }
        }
        return res.status(200).json(ticketsStatus);
    }catch(err){
        console.log(err)
        res.status(500).json("server Error");
    }
};

module.exports = { FindBusStatus };