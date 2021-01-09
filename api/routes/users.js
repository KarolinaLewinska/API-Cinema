const express = require('express');

const router = express.Router();  

const UsersController = require('../controllers/users');

router.get('/', UsersController.allUsers);
router.post('/signup', UsersController.newUser);
router.delete('/:userId', UsersController.userDelete);
router.post('/login', UsersController.userLogin);

module.exports = router;