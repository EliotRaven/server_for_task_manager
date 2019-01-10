var express = require('express');
var router = express.Router();
var ListsController = require('../../controllers/lists.controller')

router.get('/', ListsController.index);
router.post('/', ListsController.store);
router.get('/:lists', ListsController.show);
router.put('/:lists', ListsController.update);
router.delete('/:lists', ListsController.remove);

module.exports = router;
