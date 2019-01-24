var express = require('express');
var router = express.Router();
var ListsController = require('../../controllers/lists.controller')

router.get('/', ListsController.index);
router.post('/', ListsController.store);
router.get('/:list([0-9]*)', ListsController.show);
router.put('/:list([0-9]*)', ListsController.update);
router.delete('/:list([0-9]*)', ListsController.remove);

// router.get('/', ListsController.boardsLists)
router.get('/tasks', ListsController.listsTasks)

module.exports = router;
