const { check, validationResult } = require('express-validator')
const Agency = require('../models/agency');
const Staffs = require('../models/staff');

exports.addStaff = async (req, res, next) => {
    console.log(req.body)
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return next({
            status: 400,
            error: "validation error"
        });
    }

    // decalearation 
    const {
        phone,
        name,
        address,
        isDriver
    } = req.body;

    // create newStaff 
    const newstaff = {
        phone,
        name,
        address,
        isDriver
    };
    
    // add adminid in staff
    newstaff.adminId = req.user.id;
    try {

        let staff = await Staffs.findOne({ phone });
        if (staff) {
            return res.status(400).json({ "msg": "staff is already exit" });
        }

        // add staff 
        staff = new Staffs(newstaff)
        console.log(staff)
        await staff.save()
        return res.status(200).json(staff);

    } catch (err) {
        console.log(err)
        return next({
            status: 500,
            error: "server error"
        });
    }
}

