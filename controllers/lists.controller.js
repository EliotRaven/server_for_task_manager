const List = require('../models/ListModel')

module.exports = {
    index,
    store,
    show,
    update,
    remove,
    listsTasks
}

function index (req, res, next) {
    List.where('board_id', req.query.id).fetchAll({withRelated: ['tasks']}).then(lists => {
        res.status(200).json(lists)
    }).catch(next)
}

function store (req, res, next) {
    List.store(req.body).then(list => {
        return list.load('tasks')
    }).then(list => {
        res.status(200).json(list)
    }).catch(next)
}

function show (req, res, next) {
    List.findById(req.params.list, 'tasks').then(list => {
        res.status(200).json(list)
    }).catch(next)
}

function update (req, res, next) {
    List.update(req.params.list,req.body).then(list => {
        res.status(200).json(list)
    }).catch(next)
}

function remove (req, res, next) {
    console.log('req', req.params, req.query)
    List.destroy(req.params.list).then(list => {
        res.status(200).json({removed: true})
    }).catch(next)
}

function listsTasks (req, res, next) {
    List.where('board_id', req.params.id).fetchAll({withRelated: true}).then(lists => {
        res.status(200).json(lists)
    }).catch(next)
}