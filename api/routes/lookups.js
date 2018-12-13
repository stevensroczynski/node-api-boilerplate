var express = require('express')
var router = express.Router()
var lookupController = require('../controllers/lookup-controller')
var jwtAuth = require('../controllers/auth-controller').jwtAuth

router.get('/', jwtAuth, lookupController.lookup)

module.exports = router