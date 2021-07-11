const { validationResult } = require('express-validator');
const Bus = require('../models/busSchema');
const Agency = require('../models/agency');
const Satff = require('../models/staff');
const Location = require('../models/location');
const User = require('../models/users')
const auth = require('../middleware/auth');
const {locationSearch} = require('../Serches/searchLocation');

const validations = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errors
    }
    else {
        return false
    }
}

exports.CreateBus = async (req, res,next) => {
        const error = validations(req)
    try {
        if (error) {
            return next({
                status: 400,
                error:"validation error"
            })
        }
        const {
            busName,
            vehicleNo,
            seats,
            busType,
            seatCategory,
            policy,
            images,
            from,
            to,
            arrivalTime,
            departureTime,
        } = req.body;

        let bus_size = [];
        list = ["A", "B", "C", "D"];
        for (let i = 0; i < 4; i++) {
            row = [];
            for (let j = 1; j <= seats; j++){
                row.push(j + list[i]);
            }
            bus_size.push(row);
        }        
        const busDetails = {
            busName:req.body.busName,
            vehicleNo:req.body.vehicleNo,
            seats:bus_size,
            busType:req.body.busType,
            seatCategory:req.body.seats,
            policy:req.body.policy,
            images: req.body.images,
            from: req.body.from,
            to:req.body.to,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime
        }
        // const { agency }
        // if (agency) {
        //     busDetails.agency = agencyProfile._id;
        // }

        let formLocation = await locationSearch(from);
        console.log(formLocation)
        if (!formLocation) { return res.status(404).json({ msg: "No such location found" })}

        let toLocation = await locationSearch(to);
        if (!toLocation) {return res.status(404).json({ msg: "No such location found" })}
        const bus = new Bus(busDetails)
        console.log(bus)
        const newbus = await bus.save()
        if (newbus) {
            const busId = bus.id
            return res.status(200).json({ msg: "BusId", busId })
        }
    }
    catch(err) {
        console.log(err)
        return res.status(401).send({ "error": "server error" })
    }
}

