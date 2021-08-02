const { validationResult } = require('express-validator');
const Location = require('../models/location');

exports.location = async (req, res) => {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { city, state } = req.body;
    try {
        let locations = await Location.find({ city });
        if (locations) {
            let searchedCity = locations.forEach((location) => {
                if (location.state === state) {
                    return res
                        .status(400)
                        .json({ errors: [{ msg: "Location Already Exists" }] });
                }
                console.log("searchedCity")
            })
        }
        const location = new Location({
            city,
            state,
        });
        await location.save();
        res.status(200).json(location)
    } catch (err) {
        console.error(err);
        res.status(500).send("server error");
    }
};
