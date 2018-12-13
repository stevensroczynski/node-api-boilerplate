const mlogger = require('morgan')
const fs = require('fs')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('./logger')
const path = require('path')

module.exports.setGlobalMiddleware = (app, config) => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    // app.use(cookieParser())
   
    
    startAccessLogger(app, config)
    
    // Prevents an error when browser tries to retrieve a favicon
    function ignoreFavicon(req, res, next) {
        if (req.originalUrl === '/favicon.ico') {
            res.status(204).json({ nope: true })
        } else {
            next()
        }
    }
    
    app.use(ignoreFavicon)
}

startAccessLogger = (app, config) => {
    let accessLogStream;
    if (config.accessLog && config.accessLog.type === 'file') {
        // setup the access logger if specified
        accessLogStream = fs.createWriteStream(config.accessLog.filename, { flags: 'a' })
        logger.info('Logging to the access log')
    }
    
    app.use(mlogger('dev', {stream: accessLogStream}))
}

/**
 * Called to configure express.

 * @param app
 * @return {http.Server}
 */
module.exports.startServer = (app) => {
    // Get port from environment and store in Express.
    const port = normalizePort(process.config.ports.API_PORT || '1234')
    app.set('port', port)

    // Create HTTP server and listen on provided port, on all network interfaces.
    const server = app.listen(port)
    server.on('error', onError)
    server.on('listening', onListening)

    /**
     * Normalize a port into a number, string, or false.
     */
    function normalizePort(val) {
        var port = parseInt(val, 10)

        if (isNaN(port)) {
            // named pipe
            return val
        }

        if (port >= 0) {
            // port number
            return port
        }

        return false
    }

    /**
     * @param connection the server is listening on.
     * @return {string} message for log output indicating listen location
     */
    function listenMessage(connection) {
        return typeof connection === 'string'
            ? `Pipe ${connection}`
            : `Port ${connection.port}`
    }

    /**
     * Event listener for HTTP server "error" event.
     */
    function onError(error) {
        if (error.syscall !== 'listen') {
            throw error
        }

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                logger.error(`${listenMessage(port)} requires elevated privileges`)
                process.exit(1)
                break

            case 'EADDRINUSE':
                logger.error(`${listenMessage(port)} is already in use`)
                process.exit(1)
                break

            default:
                throw error
        }
    }

    /**
     * Event listener for HTTP server "listening" event.
     */
    
    function onListening() {
        logger.info(`Ready to Rock on ${listenMessage(server.address())}`)
        console.log("\n\n\n" + fs.readFileSync(path.join(__dirname, "../config/startupascii.txt"), "utf-8") + "\n\n\n")
    }

    return server
}

/**
 * Called to configure express.
 *
 * @param app
 * @return {http.Server}
 */
module.exports.startStaticServer = (app) => {
    // Get port from environment and store in Express.
    const port = normalizePort(process.config.ports.STATIC_PORT  || '5601')
    app.set('port', port)

    // Create HTTP server and listen on provided port, on all network interfaces.
    const server = app.listen(port)
    server.on('error', onError)
    server.on('listening', onListening)

    /**
     * Normalize a port into a number, string, or false.
     */
    function normalizePort(val) {
        var port = parseInt(val, 10)

        if (isNaN(port)) {
            // named pipe
            return val
        }

        if (port >= 0) {
            // port number
            return port
        }

        return false
    }

    /**
     * @param connection the server is listening on.
     * @return {string} message for log output indicating listen location
     */
    function listenMessage(connection) {
        return typeof connection === 'string'
            ? `Pipe ${connection}`
            : `Port ${connection.port}`
    }

    /**
     * Event listener for HTTP server "error" event.
     */
    function onError(error) {
        if (error.syscall !== 'listen') {
            throw error
        }

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                logger.error(`${listenMessage(port)} requires elevated privileges`)
                process.exit(1)
                break

            case 'EADDRINUSE':
                logger.error(`${listenMessage(port)} is already in use`)
                process.exit(1)
                break

            default:
                throw error
        }
    }

    /**
     * Event listener for HTTP server "listening" event.
     */
    function onListening() {
        logger.info(`Serving Static Files on ${listenMessage(server.address())}`)
    }

    return server
}