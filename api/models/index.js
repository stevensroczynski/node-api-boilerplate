/**
 * USAGE: sequelize-auto -o "./models" -d nest_repo_dev -s ui -h localhost -u postgres -p 5432 -x postgres -e postgres
 *  -s specifies schema
 *  alter models to include schema - look at user.js
 *  requires postgres 6.4.1
 */
'use strict'

const fs = require('fs')
const path = require('path')
const basename  = path.basename(__filename)

const sequelize = require('../db').sequelize
const logger = require('../logger')

// export variable with all models and function to initialize models.
const db = {}

/**
 * Export this as a function to call after the application loads configuration.
 *
 * @param config for the database
 */
db.loadModels = (config) => {
    // will read each sequelize model from the models directory.
    fs.readdirSync(__dirname)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
        })
        .forEach(file => {
            var model = sequelize.import(path.join(__dirname, file))
            db[model.name] = model
        })

    Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
            db[modelName].associate(db)
        }
    })

    logger.info('Models loaded')
}

module.exports = db
