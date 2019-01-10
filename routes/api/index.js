const express = require('express');
const router = express.Router();
const users = require('./users')
const boards = require('./boards')
const lists = require('./lists')
const tasks = require('./tasks')

router.use('/users', users);
router.use('/boards', boards);
router.use('/lists', lists);
router.use('/tasks', tasks);

module.exports = router;