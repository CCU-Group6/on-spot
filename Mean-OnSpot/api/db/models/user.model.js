const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
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
    saltSecret: String, 
    phoneNumber: {
        type: String,
        require: true,
        minlength: 9,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique:true
    },
    licensePlate: {
        type: String,
        required: true,
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