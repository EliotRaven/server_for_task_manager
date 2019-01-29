const Board = require('../models/BoardModel')

module.exports = {
    index,
    store,
    show,
    update,
    remove,
    boardsLists,
    getPivot
}

function index (req, res, next) {
    Board.where({user_id: req.query.authuser_id}).fetchAll().then(boards =>{
        res.status(200).json(boards)
    }).catch(next)
}

function store (req, res, next) {
    Board.create(req.body, req.query.authuser_id).then(board => {
        res.status(200).json(board)
    }).catch(next)
}

function show (req, res, next) {
    Board.findById(req.params.board, 'lists').then(board => {
        res.status(200).json(board)
    }).catch(next)
}

function update (req, res, next) {
    Board.update(req.params.board,req.body).then(board => {
        res.status(200).json(board)
    }).catch(next)
}

function remove (req, res, next) {
    Board.destroy(req.params.board).then(board => {
        res.status(200).json(board)
    }).catch(next)
}

function boardsLists(req, res, next) {
    Board.forge({id: req.query.id}).fetch({withRelated: 'lists'}).then(board => {
        res.status(200).json(board.toJSON().lists)
    }).catch(next)
}

function getPivot(req, res, next) {
    Board.forge({id: 1}).fetch({withRelated: 'users'}).then(boards => {
        res.status(200).json(boards.toJSON().users)
    }).catch(next)
}