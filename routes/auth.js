const express = require('express');
const passport = require('passport')
const router = express.Router();
const authController = require('../controllers/auth.controller')

router.get('/registration', authController.signUp)
router.post('/signup', authController.registration)
router.get('/login', authController.signIn)
router.post('/login',  authController.login);
router.post('/logout', authController.logout)

module.exports = router;