var express = require('express');
var router = express.Router();
var TasksController = require('../../controllers/tasks.controller')

router.get('/', TasksController.index);
router.post('/', TasksController.store);
router.get('/:tasks', TasksController.show);
router.put('/:tasks', TasksController.update);
router.delete('/:tasks', TasksController.remove);

module.exports = router;