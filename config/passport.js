let passport       = require('passport');
let BearerStrategy = require('passport-http-bearer').Strategy;
let jwt            = require('jsonwebtoken');
let User           = require('../models/UserModel')

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id)
        .then(function(user) {
            done(null, user.toJSON());
        })
        .catch(function(err) {
            done(err, null);
        });
});

module.exports = passport.use(new BearerStrategy((token, done) => {
    User.find({remember_token: token})
        .then(function (user) {
            return done(null, user.toJSON()[0]);
        })
        .catch(function(err) {
            if (err) {
                return done(err);
            }
        });
    }
));
