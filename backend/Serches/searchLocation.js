const Location = require("../models/location");

const locationSearch = async (location) => {
    const { city, state } = location
    let locations = await Location.findOne({ $and: [{ city }, { state }] });
    if (locations) {
        return locations
    }
}
module.exports = { locationSearch };

