const { Logger, transports } = require('winston'),
    { Console, File } = transports

/**
 * Determine which Winston Transport to utilize.
 *
 * @param logMethod for Winston logging.
 */
module.exports.transportType = (logMethod) => {
    switch (logMethod) {
        case 'file':
            return File

        case 'console':
            return Console

        default:
            console.error(`Unknown logging type ${logMethod}`)
            return Console
    }
}

/**
 * Generates the options for a Winston Transport.
 *
 * @param level for log severity (i.e. info, warn, error)
 * @param filename to output to (optional for everything other than File).
 * @return configuration for the Winston log options.
 */
const options = (level, filename, name) => {
    return {
        name: name,
        level: level,
        filename,
        json: false,
        colorize: true,
        timestamp: true
    }
}

const transportReader = (systemLog) => {
    const transports = []
    systemLog.transports.forEach(logConfig => {
        transports.push(new (module.exports.transportType(logConfig.type))(
            options(logConfig.level, logConfig.filename, logConfig.name)
        ))
    })
    return transports
}

const logger = new Logger({
    transports: transportReader(process.config.systemLog)
})

logger.log('info', 'Winston Logger Started')

module.exports.info = (message) => logger.log('info', message)
module.exports.warn = (message) => logger.log('warn', message)
module.exports.error = (message) => logger.log('error', message)
module.exports.debug = (message) => logger.log('debug', message)
