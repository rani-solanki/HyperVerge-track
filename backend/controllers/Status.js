const Bus = require('../models/busSchema');

const FindBusStatus = async (req, res) => {
    try {
        const bus = await Bus.findById(req.params.busId);
        if (!bus) {
            return res.status(400).json({ msg: "there is no such bus" });
        }
        const seats = bus.seats;
        let allBookedSeats = await allBookedTickets(req.params.busId);
        let statusObj = {};
        
        for (let i = 0; i < seats.length; i++) {
            for (let j = 0; j < seats[i].length; j++) {
                if (allBookedSeats.includes(seats[i][j])) {
                    statusObj[`${seats[i][j]}`] = "Booked";
                } else {
                    statusObj[`${seats[i][j]}`] = "Empty";
                }
            }
        }
        return res.status(200).json(statusObj);
    } catch (err) {
        res.status(500).json("server Error");
    }
};

module.exports = { FindBusStatus };