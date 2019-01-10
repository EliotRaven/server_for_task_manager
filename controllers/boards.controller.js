const Board = require('../models/BoardModel')

module.exports = {
    index,
    store,
    show,
    update,
    remove,
}

function index (req, res, next) {
    Board.index().then(boards =>{
        res.status(200).json(boards)
    }).catch(next)
}

function store (req, res, next) {
    Board.create(req.body).then(board => {
        res.status(200).json(board)
    }).catch(next)
}

function show (req, res, next) {
    Board.findById(req.params.board).then(board => {
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