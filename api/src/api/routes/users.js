const express = require('express');
const router = express.Router();
var userController = require('../controllers/users');

router.get('/', userController.getUsers);
router.post('/add', userController.addUser);

module.exports = router;