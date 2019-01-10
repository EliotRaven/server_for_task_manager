const Task = require('../models/TaskModel')

module.exports = {
    index,
    store,
    show,
    update,
    remove,
}

function index (req, res, next) {
    Task.index().then(tasks =>{
        res.status(200).json(tasks)
    }).catch(next)
}

function store (req, res, next) {
    Task.create(req.body).then(task => {
        res.status(200).json(task)
    }).catch(next)
}

function show (req, res, next) {
    Task.findById(req.params.task).then(task => {
        res.status(200).json(task)
    }).catch(next)
}

function update (req, res, next) {
    Task.update(req.params.task,req.body).then(task => {
        res.status(200).json(task)
    }).catch(next)
}

function remove (req, res, next) {
    Task.destroy(req.params.task).then(task => {
        res.status(200).json(task)
    }).catch(next)
}