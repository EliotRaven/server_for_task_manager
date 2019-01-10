const Auth = require('../services/auth')

module.exports = {
    login,
    registration,
    signIn,
    signUp,
    logout
};

function login(req, res, next) {
    Auth.login(req.body).then(user => {
        user ? res.status(200).json(user) : res.status(404).json('error')
    }).catch(next);
}

function registration(req, res, next) {
    Auth.registration(req.body).then(user => {
        return res.json(user)
    }).catch(next)
}

function signIn(req, res, next) {
    return res.render('login')
}

function signUp(req, res, next) {
    return res.render('signup')
}

function logout(req, res, next) {
    Auth.logout(req.body.id, null).then(user => {
        req.logout()
        req.session.destroy(()=>{
            res.clearCookie('connect.sid', {path: '/'}).json(user)
        })
    }).catch(next);

}