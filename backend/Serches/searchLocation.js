const Location = require("../models/location");

const locationSearch = async (location)=>{
    const city = location["city"]
    const state = location["state"]
    let locations = await Location.findOne({ $and: [{ city },{ state }]});
    console.log("jdsvgcj",locations)
    if (locations) {
        return locations
    }
}

// const search = async (location) => {
//     const { city,  }= location;
//     let locations = await Location.findOne({ $and: [{ city }, { state }] });
//     console.log("jdsvgcj", locations)
//     if (locations) {
//         return locations
//     }
// }

module.exports = { locationSearch};
