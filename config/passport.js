const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const User = require('../models/User');
const validPassword = require('../utils/PasswordUtils').validPassword;

const verifyCallback = (username, password, done) => {
    User.findOne({username: username}, (err, user) => {
        if (err){
            return done(err);
        }
        if(!user){
            return done(null, false);
        }
        const isValid = validPassword(password, user.password);

        if(isValid){
            return done(null, user);
        }
        else{
            return done(null, false);
        }
    });
}

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId, (err, user) => {
        if(err) {done(err);}
        done(null, user);
    });
})