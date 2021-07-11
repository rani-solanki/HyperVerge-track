const Location = require("../models/location");

const locationSearch = async (location) => {
    // console.log(location)
    const { city, state } = location
    // city = "Morena"
    let locations = await Location.findOne({city});
    console.log("lajhbedgkqw",location)
    if (locations) {
        return locations
    }
}
module.exports = { locationSearch };

// $and: [{ city }, { state }]