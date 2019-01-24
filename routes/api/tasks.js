var express = require('express');
var router = express.Router();
var TasksController = require('../../controllers/tasks.controller')

router.get('/', TasksController.index);
router.post('/', TasksController.store);
router.get('/:task([0-9]*)', TasksController.show);
router.put('/:task([0-9]*)', TasksController.update);
router.delete('/:task([0-9]*)', TasksController.remove);

router.put('/sort/:id([0-9]*)', TasksController.sort);
router.get('/board/:id([0-9]*)', TasksController.getBoardTasks);

module.exports = router;