const { validationResult } = require('express-validator');
const Agency = require('../models/agency');

const validations = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errors
    }
    else {
        return false
    }
}

exports.userSignup = async (req, res, next) => {
    const error = validations(req)
    if (error) {
        next(error)
        return res.json({ "validation error": error })
    }
    try {
        const { agent, phone, agencyName, headOfficeLocation } = req.body
        const agency = Agency.findOne({ agent });
        if (!agency.isEmpty()) {
            return res.status(404).json()
        }

        const agency = new Location({
            agent,
            phone,
            agencyName,
            headOfficeLocation
        })

        await location.save()
        return res.json("bus Added")
    } catch (err) {
        console.log(err)
        return res.status(500).json({ "message": "sever error" })
    }
}
