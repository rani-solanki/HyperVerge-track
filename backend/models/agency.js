const mongoose = require('mongoose')

const Agency = new mongoose.Schema({

    agent: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    phone: {
        type: Number,
        require: true
    },
    agencyName: {
        type: String,
        require: true,
        index: true
    },
    headOfficeLocation: {
        type: String
    }

}, {
    timestamps: true
})
const agency = mongoose.model('Agencies', AgencySchema)
module.export = agency
