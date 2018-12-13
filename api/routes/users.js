var express = require('express')
var router = express.Router()
var userController = require('../controllers/user-controller')

router.get('/', userController.getAll)
router.post('/', userController.createUser)
router.get('/:user_id', userController.getUserById)
router.put('/:user_id', userController.updateUser)
router.delete('/:user_id', userController.deleteUser)

module.exports = router
