// todo: nice to move these into the configuration files.
const DEFAULTS = require('./config-defaults')

const yaml = require('node-yaml-config'),
    environment = process.env.NODE_ENV || DEFAULTS.NODE_ENV,
    file = process.env.CONFIG || DEFAULTS.config

try {
    // attempt to read the API YAML configuration file and load into the process.config object.
    console.log(`Loading configuration environment '${environment}' from file '${file}'.`)
    process.config = Object.assign(DEFAULTS, yaml.load(file, environment))
} catch (e) {
    // failed to load the configuration YAML file.
    console.error(`Unable to parse configuration file '${file}' for environment ${environment}`)
    process.exit(1)
}
