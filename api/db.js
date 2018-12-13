require('pg').defaults.parseInt8 = true
const Sequelize = require('sequelize')
const logger = require('./logger')
const db = {}
const wait = require('./utils/wait')

db.setupDB = (config) => {
    config.dialect.useUTC = false
    if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable], config.database)
    } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, {
            host: config.host,
            dialect: config.dialect,
            logging: logger.debug
        })
    }

    // reference to the Sequelize connection
    db.sequelize = sequelize

let authCallback = (attempts) => {
   sequelize.authenticate()
        .then(() => console.log('Sequelize: Connection to the database has been successfully established.'))
        .catch((err) => {
            wait(1)
            attempts++
            console.error(`Sequelize: Unable to connect to the database: ${err.message}. Attempt: ${attempts}`)
            if(attempts < 99){
                authCallback(attempts)
            } else {
                console.error(`Max number of attempts exceeded. Exiting.`)
                process.exit(1)
            }
        })
    }

authCallback(0)
}



module.exports = db
