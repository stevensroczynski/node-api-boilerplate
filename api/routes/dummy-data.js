var express = require('express')
var router = express.Router()
var dummyDataController = require('../controllers/dummy-data-controller')
var jwtAuth = require('../controllers/auth-controller').jwtAuth

router.get('/grid', jwtAuth, dummyDataController.getGridData)

module.exports = router
