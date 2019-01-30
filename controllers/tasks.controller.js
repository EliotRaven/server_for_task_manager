const Task = require('../models/TaskModel')

module.exports = {
    index,
    store,
    show,
    update,
    remove,
    sort,
    getBoardTasks
}

function index (req, res, next) {
    Task.index().then(tasks =>{
        res.status(200).json(tasks)
    }).catch(next)
}

async function store (req, res, next) {
    if(!req.body.list_id && !req.body.board_id) return res.status(422)
    let lastPosition = await Task.where({list_id: req.body.list_id}).orderBy('position', 'DESC').fetch()
    let position = (!lastPosition) ? 1 : lastPosition.toJSON().position + 1
    Task.store({...req.body, position}).then(lists => {
        res.json(lists)
    }).catch(next)
}

function show (req, res, next) {
    Task.findById(req.params.task).then(task => {
        res.status(200).json(task)
    }).catch(next)
}

function update (req, res, next) {
    if(!req.body.id) return res.status(422).json('Update data not received')
    Task.update(req.params.task, req.body).then(task => {
        res.status(200).json(task)
    }).catch(next)
}

function remove (req, res, next) {
    Task.destroy(req.params.task).then(task => {
        res.status(200).json(task)
    }).catch(next)
}

function sort(req, res, next) {
    Task.dndsort({list_id: req.params.id}, req.body).then(data => {
        res.json(data)
    }).catch(next)
}

function getBoardTasks (req, res, next) {
    Task.where({board_id : req.params.id}).fetchAll().then(tasks =>{
        res.status(200).json(tasks)
    }).catch(next)
}