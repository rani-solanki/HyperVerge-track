const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    busName: {
        type: String,
        required: true
    },
    agency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agency'
    },
    vehicleNo: {
        type: String,
        unique: true,
        required: true
    },
    seats: [[{
        type: String,
    }]],

    busType: {
        type: String,
        enum: ['Ac','NonAc'],
        default: 'Ac',
        required:"true"
    },
    seatCategory: {
        type: String,
        enum: ['sleeper', 'semi sleeper'],
        default: 'sleeper',
        required: true
    },
    busStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staffs',
        required: true
    },
    secdule: {
        type: Array,
        required:true
    },
    policy: {
        type: String,
        required: true
    },
    image: [{
        type: String
    }],
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Location',
        index: true,
        required: true
    },
    to:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: true,
        index: true
    },
    arrivalTime:{
        type: Date,
        default: Date.now,
        required: true
    },
    departureTime: {
        type: Date,
        default: Date.now,
        required: true,
    }
},
    {
        timestamps: true
    }
)

const bus = mongoose.model('Buses', busSchema)
module.exports = bus;


