var express = require('express');
var router = express.Router();
var UserController = require('../../controllers/user.controller')

/* GET users listing. */
router.get('/', UserController.index);
router.post('/', UserController.store);
router.get('/:user', UserController.show);
router.put('/:user', UserController.update);
router.delete('/:user', UserController.remove);

module.exports = router;
