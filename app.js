// load configuration into process.config
require('./api/config')
require('./api/logger')

const express = require('express')
const proxy = require('express-http-proxy')
const path = require('path')

// include our routes and middleware.
const middleware = require('./api/middleware')
const errorHandler = require('./api/error-handler')
const db = require('./api/db')

// build the Express server
const app = express()
const staticApp = express()

// initialize db and logging
db.setupDB(process.config.database)

// database & logging is setup, continue onward loading the models.
const modelIndex = require('./api/models/index')
modelIndex.loadModels(process.config.database)

// models ready, load the rest of the controllers, etc.
const routerIndex = require('./api/routes/index')
middleware.setGlobalMiddleware(app, process.config)

// Master Route to the Router
app.use('/', routerIndex)
errorHandler.use(app, db)

//Start API Server
middleware.startServer(app)

staticApp.use(express.static(path.join(__dirname, 'dist/www')))
staticApp.use('/api', proxy(process.config.uiAPI || DEFAULTS.uiAPI))
staticApp.all('/*', (req, res) => {
    res.sendFile('src/www/index.html', { root: __dirname })
})

middleware.startStaticServer(staticApp)

// export API global variables
module.exports = app
