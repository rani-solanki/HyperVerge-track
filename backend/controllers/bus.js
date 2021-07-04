const { validationResult } = require('express-validator');
const User = require('../models/users');

const validations = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errors
    }
    else {
        return false
    }
}

exports.CreateBus = async (req, res) => {
    const error = validation(req)
    try {
        if (error) {
            next(error)
            return res.status(400).json("validation error", error)
        }

        const user = await User.findById(req.user.id)
        let isAdmin = user.isAdmin
        console.log(isAdmin)
        
        if (isAdmin === true) {
            const bus = new Bus(req.body)
            const newbus = await bus.save()
            if (newbus) {
                const busId = bus.id
                return res.status(200).json({ msg: "BusId", busId })
            }
        }
        else {
            return res.status(400).json({ msg: "enter the valid admin token" })
        }
    }
    catch (err) {
        return res.status(401).send({ "error": "Bus number has to be unique" })
    }
}
