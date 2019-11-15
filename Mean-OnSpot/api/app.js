const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose')
const { User } = require('./db/models/user.model')

const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
    User.find({
        phoneNumber : req.params.phoneNumber
    }).then((lists) => {
        res.send(lists);
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

    newUser.save().then((UserDoc) => {
        res.send(UserDoc);
    });

});

app.patch('/lists', (req, res) => {
    
});

app.delete('/lists', (req, res) => {

});

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})