var express = require('express');
var router = express.Router();
var BoardsController = require('../../controllers/boards.controller')

router.get('/', BoardsController.index);
router.post('/', BoardsController.store);
router.get('/:board', BoardsController.show);
router.put('/:board', BoardsController.update);
router.delete('/:board', BoardsController.remove);

module.exports = router;
