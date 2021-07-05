const mongoose = require('mongoose')

const Agency = new mongoose.Schema({
    agent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
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
const agency = mongoose.model('Agencies', Agency)
module.export = agency


