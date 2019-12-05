const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: 'Full name can\'t be empty',
        minlength: 1,
        trim: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be at least 4 characters long'],
        trim: true
    },
    saltSecret: String, 
    phoneNumber: {
        type: String,
        require: 'Phone number can\'t be empty',
        minlength: [9, 'Phone Number must be at least 9 characters long'],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        minlength: 1,
        trim: true,
        unique:true
    },
    licensePlate: {
        type: String,
        required: 'License Plate can\'t be empty',
        minlength:1,
        trim: true
    },
    paymentMethod: {
        type: String,
        trim: true
    },
    balance: {
        type: Number,
        required: true,
        trim: true
    }

})


UserSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

UserSchema.path('licensePlate').validate((val) => {
    licensePlateRegex = /^[A-Za-z][A-Za-z]-[0-9][0-9]-[0-9][0-9]|[0-9][0-9]-[0-9][0-9]-[A-Za-z]|[0-9][0-9]-[A-Za-z][A-Za-z]-[0-9][0-9]$/;
    return licensePlateRegex.test(val);
}, 'Invalid License Plate.');


UserSchema.pre('save', function (next){
    bcrypt.genSalt(10,(err, salt) => {
        bcrypt.hash(this.password, salt, (err,hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        })
    })

})


//Methods
UserSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

UserSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id}, "SECRET#123", {
        expiresIn: "30m"
    });
}

const User = mongoose.model('User', UserSchema)
module.exports = { User }