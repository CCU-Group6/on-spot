const passport = require('passport');
const localStrat = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User  =  mongoose.model('User');
passport.use(
    new localStrat({usernameField: 'phoneNumber' },
        (username, password, done) => {
            User.findOne({ phoneNumber: username },
                (err, user) => {
                    if(err)
                        return done(err);
                    else if(!user)
                        return done(null, false, { message: 'Número de telemóvel não registado'});
                    else if(!user.verifyPassword(password)){
                        return done(null, false, {message: 'Password errada'});
                    }
                    else
                        return done(null, user, {message: 'Entrada Sucedida'});
                });
        })
);