const mongoose = require('mongoose')

const AgencySchema = new mongoose.Schema({
    agent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
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
        type: String,
        reuiqred:true
    }
}, {
    timestamps: true
})

const agency = mongoose.model('Agencies', AgencySchema)
module.exports = agency


