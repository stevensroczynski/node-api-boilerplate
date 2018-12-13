const express = require('express')
const router = express.Router()
const request = require('request')

const authRoute = require('./auth')
const dummyDataRoute = require('./dummy-data')
const lookupRoute = require('./lookups')
const userRoute = require('./users')

const logger = require('../logger')

const os = require('os')
const moment = require('moment')
const momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);
const sequelize = require('../db').sequelize

const { name: appName, version: appVersion } = require('../../package.json')

//Routes
router.get('/', function(req, res){
  res.json({
      name: appName,
      version: appVersion,
      uptime: moment.duration(process.uptime(), 'seconds')
  })
})

//Health Check. Provides the server hostname, database connection status, and up-time
router.get('/health', (req, res, next) => {
  let serverStatus = {}
  serverStatus.system = `Server is running on ${os.hostname()}`

  let checkDBConnection = async () => {
    return await sequelize.authenticate()
      .then(() => {
        return ('Sequelize connected to the database.')
      })
      .catch((err) => {
        next(new Error ('Sequelize unable to connect to the database: ' + err))
      })
  }

  checkDBConnection().then((dbStatus) => {
    serverStatus.dbStatus = dbStatus
    serverStatus.uptime = moment.duration(process.uptime(), "seconds").format("d [days,] hh [hours,] mm [minutes,] ss [seconds]")
    res.send(serverStatus)})
})

router.use('/auth', authRoute)
router.use('/dummy-data', dummyDataRoute)
router.use('/lookups', lookupRoute)
router.use('/users', userRoute)

logger.info('Routes loaded')

module.exports = router
