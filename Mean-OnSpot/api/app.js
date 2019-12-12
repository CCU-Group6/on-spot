const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose')
const { User } = require('./db/models/user.model')
const { PassportConfig } = require('./config/passportConfig');

const bodyParser = require('body-parser');
const passport = require('passport');
const lodash = require('lodash');
const jwtHelper = require('./config/jwtHelper');
const path = require('path');

//const PORT = process.env.PORT || 8080;
const PORT = 3000;

app.use(bodyParser.json());
app.use(passport.initialize());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Request-Headers", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/' , (req,res) => {
    res.send('ta tranquilo ta favoravel')
});
app.get('/users', (req, res) => {
    //Return array of lists in the database
    User.find().then((lists) => {
        res.send(lists);
    });
});

app.get('/users/:phoneNumber', (req, res) => {
    //Return array of lists in the database
    User.findOne({
        phoneNumber : req.params.phoneNumber,
    }).then((user) => {
        res.send(user);
    }).catch((e) => {
        res.send("err");
    });
});

app.post('/users', (req, res, next) => {
    var name = req.body.name;
    var password = req.body.password;
    var phoneNumber = req.body.phoneNumber;
    var email = req.body.email;
    var licensePlate  = req.body.licensePlate;
    var paymentMethod = req.body.paymentMethod;
    var balance = 0.00; 

    let newUser = new User({
        name,
        password,
        phoneNumber,
        email,
        licensePlate,
        paymentMethod,
        balance
    });

    newUser.save((err, doc) => {
        if (!err){
            res.send(doc); 
        }
        else {
            if (err.code == 11000){
                res.status(422).send(['Phone number or Email already found']);
            }
            else
            next(err);
        }
    });
    console.log(newUser)

});

app.post('/authenticate', (req, res, next) => passport.authenticate('local', (err, user, info) =>{
    if(err)
        return res.status(400).json(err);
    else if(user) {
        return res.status(200).json({ "token": user.generateJwt() });
    }
    else return res.status(404).json(info);
})(req, res));

app.get('/userProfile', jwtHelper.verifyJwtToken, (req, res, next) => { 
    User.findOne({ _id: req._id }, (err, user) =>{
        if(!user)  
            return res.status(404).json({status: false, message: 'User record not found' });

        else 
            return res.status(200).json({status: true, user : lodash.pick(user, ['_id','name', 'phoneNumber', 'paymentMethod', 'balance'])});
    })
});

app.patch('/changeBalance/:id', (req, res) => {
    console.log("aqui");
    User.findOne({_id: req.params.id}, (err, user) => {
        if(!user)  
            return res.status(404).json({status: false, message: 'User record not found' });
        else {
            user.balance += req.body.balance;
            user.save();
        }
    }).then((user) =>{
        res.send(user);
    })
});

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
})

app.use((err, req, res, next) => {
    if(err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
});
