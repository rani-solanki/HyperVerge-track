const busSchema = new mongoose.Schema({
    busName: {
        type: String,
        required: true
    },
    agency: {
        type: Schema.Types.ObjectId,
        ref: Agency
    },
    vehicleNo: {
        type: String,
        unique: true,
        required: true
    },
    seats: [[{
        type: string,
    }]],
    busType: {
        type: String,
        enum: ['Ac','NonAc'],
        default: 'Ac',
        required: true
    },
    seatCategory: {
        type: String,
        enum: ['sleeper', 'semi sleeper'],
        default: 'sleeper',
        required: true
    },
    busStaff: [{
        type: String,
        required: true
    }],
    policy: {
        type: String,
        required: true
    },
    image: [{
        type: String
    }],
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Location,
        index: true,
        required: true
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Location,
        required: true,
        index: true
    },
    arrivalTime: {
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
module.exports = bus

a = {
    "busName": "Booze Bus",
    "agency" : "VRL travels",
    "vehicleNo":"375",
    "seats": [
        ["1A", "1B", "1C", "1D"],
        ["2A","2B","2C","2D"],
        ["3A", "3B","3C","3D"],
        ["4A", "4B", "4C", "4D"],
        ["5A", "5B", "5C", "5D"]
    ],
    "busType":["Ac","nonAc"],
    "seatCategory": ['sleeper', 'semi sleeper'],
    "busStaff":" ",
    "policy":" ",
    "image":" ",
    "from":" ",
    "to":" ",
    "busName":" ",
    "arrivalTime":""
    "departureTime":" "
}