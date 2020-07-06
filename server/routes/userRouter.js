const router = require('express').Router();
const userController = require('../controllers/userController');

router
    .get('/:id', userController.getUserById)

    .get('/', userController.getUsers)

    .post('/', userController.createUser)
    
    .put('/:id', userController.editUser)

    .delete('/:id', userController.deleteUser)

module.exports = router;