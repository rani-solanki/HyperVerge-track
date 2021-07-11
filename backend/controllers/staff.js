const { check, validationResult } = require('express-validator')
const Agency = require('../models/agency');
const Staffs = require('../models/staff');

exports.addStaff = async (req, res, next) => {
    console.log(req.body)
    const errors = validationResult(req);
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
        // find the agency by user id
        console.log(req.user.id)
        let agencyInfo = await Agency.findOne({adminId: req.user.id});
        console.log("agency from the staff collection", agencyInfo)

        // check whether agency is there or not
        if (agencyInfo) {
            let staff = await Staffs.findOne({phone });
            if (staff) {
                return res.json({ "msg": "staff is already exit" });
            }

            // add staff 
            staff = new Staffs(newstaff)
            console.log(staff)
            await staff.save()
            return res.status(200).json(staff);

        } else {
            console.log("Not found")
            return res.status(404).json({"msg": "Not Found agency" })
        }
    } catch (err) {
        console.log(err)
        return next({
            status: 500,
            error: "server error"
        });
    }
}

