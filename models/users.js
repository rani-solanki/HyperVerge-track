const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        trim: true,
        required: true,
        Unique: true,
        lowercase: true,
        index:true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    isAdmin: {
        type: Boolean,
        default:false
    },
    resetToken: {
        typr:String
    },
    expaireToken: {
        type:Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const User = mongoose.model('Users', userschema)
module.exports = User
