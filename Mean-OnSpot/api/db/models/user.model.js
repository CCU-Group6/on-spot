const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    phoneNumber: {
        type: String,
        require: true,
        minlength: 9,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    licensePlate: {
        type: String,
        required: true,
        minlength:1,
        trim: true
    }
})
const User = mongoose.model('User', UserSchema)
module.exports = { User }