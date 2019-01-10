const expressJwt = require('express-jwt');

module.exports = function () {
    return expressJwt({ secret: process.env.JWT_SECRET }).unless({
        path: ['/', '/auth/login', '/auth/registration']
    });
}