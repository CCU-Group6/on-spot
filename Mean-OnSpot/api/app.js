const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose')
const { User } = require('./db/models/user.model')
const { PassportConfig } = require('./config/passportConfig');

const bodyParser = require('body-parser');
const passport = require('passport');
const lodash = require('lodash')
const jwtHelper = require('./config/jwtHelper')

app.use(bodyParser.json());
app.use(passport.initialize());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Request-Headers", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});

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
        console.log(req.body);
        console.log(req.params);
        
        res.send(user);
    }).catch((e) => {
        console.log(e);
        res.send("err");
    });
});

app.post('/users', (req, res) => {
    var name = req.body.name;
    var password = req.body.password;
    var phoneNumber = req.body.phoneNumber;
    var email = req.body.email;
    var licensePlate  = req.body.licensePlate;
    let newUser = new User({
        name,
        password,
        phoneNumber,
        email,
        licensePlate
    });
    console.log(req.body);
    console.log(req.params);
    
    newUser.save().then((UserDoc) => {
        res.send(UserDoc);
    });

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
            return res.status(200).json({status: true, user : lodash.pick(user, ['name', 'phoneNumber'])});
    })
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})


