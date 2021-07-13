const { validationResult } = require('express-validator');
const Bus = require('../models/busSchema');
const Agency = require('../models/agency');
const Staff = require('../models/staff');
const Location = require('../models/location');
const User = require('../models/users')
const auth = require('../middleware/auth');
const { locationSearch, search } = require('../Serches/searchLocation');
const { ticketsBooked } = require('../Serches/BookTickets');
const { BookTickets } = require('./tickets');
const Ticket = require('../models/Tickets');

const validations = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errors
    }
    else {
        return false
    }
}

exports.CreateBus = async (req, res, next)=>{
    console.log("sajdgbh")
    const error = validations(req)
    console.log(error)
    try {
        if (error) {
            return next({
                status: 400,
                error: "validation error"
            })
        }
        const { busName, vehicleNo,
            seats, busType,
            seatCategory, policy,
            images, from, to, busStaff,
            arrivalTime, departureTime,
        } = req.body;

        let bus_size = [];
        list = ["A", "B", "C", "D"];
        for (let i = 0; i < 4; i++) {
            row = [];
            for (let j = 1; j <= seats; j++) {
                row.push(j + list[i]);
            }
            bus_size.push(row);
        }
        const busDetails = {
            busName: req.body.busName,
            vehicleNo: req.body.vehicleNo,
            seats: bus_size,
            busType: req.body.busType,
            seatCategory:req.body.seatCategory,
            policy: req.body.policy,
            images: req.body.images,
            from: req.body.from,
            to: req.body.to,
            // busStaff: req.body.busStaff,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime
        }

        // add location 
        let formLocation = await locationSearch(from);
        console.log("formLocation",formLocation)
        if (!formLocation) { return res.status(404).json({ msg: "No such location found" }) }
        busDetails.from = formLocation._id;

        let toLocation = await locationSearch(to);
        console.log("toLocation",toLocation)
        if (!toLocation) { return res.status(404).json({ msg: "No such location found" }) }
        busDetails.to = toLocation._id;

        // add agency 
        let agencyProfile = await Agency.findOne({ agent: req.user.id });
        if (!agencyProfile) { return res.status(404).json({ msg: "No such agency found" }) }
        busDetails.agency = agencyProfile._id

        // Add staff 
        const staff = await Staff.findOne({ phone: busStaff })
        console.log(staff)
        if (!staff) {
            return res.status(404).json({ msg: "staff Not Found" })
        }
        busDetails.busStaff = staff.id
        const bus = new Bus(busDetails)
        const newbus = await bus.save()
        if (newbus) {
            const busId = bus.id
            return res.status(200).json({ msg: busId })
        }
        next('route')
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({ "error": "server error" })
    }
}

exports.getBus = async (req, res) => {
    try {
        const bus = await Bus.findById(req.params.busId);

        if (!bus) {
            return res.status(404).json({ msg: "Bus NOt Found" });
        }
        return res.status(200).json(bus);
    } catch (err) {
        res.status(500).json({ msg: "server Error" });
    }
};

exports.cancelBus = async (req, res) => {
    try {
        const busId = req.params.busId
        const bus = Bus.findOne({ busId })
        if (bus) {
            return res.status(404).json({"msg":"Bus Not Found"})
        }

        const removeBus = await Bus.findOneAndRemove({ busId })
        console.log(removeBus)
        if (removeBus) {
            return res.status(200).json({"msg":"Bus has been cancel"})
        }
    }catch(err){
        return res.status(500).json({"msg": "server error"})
    }
}

// reset bus
exports.resetBus = async (req, res) => {
    try {
        
        const busId = req.params.busId
        console.log(busId)
        const bus = await Bus.findOne({ _id: busId });

        if(!bus){
            return res.status(404).json({"msg": "Bus Not Found" })
        }

        const deleteTickes = await Ticket.deleteMany({ busId: req.params.busId })
        console.log(deleteTickes)
        return res.status(200).json({ "msg": "Reset bus is Succesfully" });

    }catch (err) {
        console.log(err)
        return res.status(500).json({"msg":"server error"})
    }
}


