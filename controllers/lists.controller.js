const List = require('../models/ListModel')

module.exports = {
    index,
    store,
    show,
    update,
    remove,
}

function index (req, res, next) {
    List.index().then(lists =>{
        res.status(200).json(lists)
    }).catch(next)
}

function store (req, res, next) {
    List.create(req.body).then(list => {
        res.status(200).json(list)
    }).catch(next)
}

function show (req, res, next) {
    List.findById(req.params.list).then(list => {
        res.status(200).json(list)
    }).catch(next)
}

function update (req, res, next) {
    List.update(req.params.list,req.body).then(list => {
        res.status(200).json(list)
    }).catch(next)
}

function remove (req, res, next) {
    List.destroy(req.params.list).then(list => {
        res.status(200).json(list)
    }).catch(next)
}