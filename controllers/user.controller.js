const User = require('../models/UserModel')

module.exports = {
    index,
    store,
    show,
    update,
    remove,
}

function index (req, res, next) {
    User.index().then(users=>{
        res.status(200).json(users)
    }).catch(next)
}

function store (req, res, next) {
    User.create(req.body).then(user => {
        res.status(200).json(user)
    }).catch(next)
}

function show (req, res, next) {
    User.findById(req.params.user).then(user => {
        res.status(200).json(user)
    }).catch(next)
}

function update (req, res, next) {
    User.update(req.params.user,req.body).then(user => {
        res.status(200).json(user)
    }).catch(next)
}

function remove (req, res, next) {
    User.destroy(req.params.user).then(user => {
        res.status(200).json(user)
    }).catch(next)
}