const express = require('express');
const router = express.Router();  
const UsersController = require('../controllers/users');
const validator = require('../helpers/validate');
const userValidationMiddleware = require('../middleware/user-validation');

router.get('/', UsersController.getUsers);
router.post('/signup', userValidationMiddleware.authValidator,  UsersController.postUser);
router.delete('/:userId', UsersController.deleteUser);
router.post('/login', userValidationMiddleware.authValidator, UsersController.logIn);

module.exports = router;