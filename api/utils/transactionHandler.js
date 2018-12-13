const sequelize = require('../../db').sequelize
const errors = require('../utils/errors')

var exports = module.exports

exports.transactionHandler = (model, params, operation, additionalOptions) => {
    return sequelize.transaction().then(function (t) {
        const options = (additionalOptions || {})
        options.transaction = t
        return model[operation](params, options)
            .then(function (res) {
                t.commit()
                if (operation === "destroy") {
                    let numAffected = res
                    if (numAffected == 0) {
                        return {
                            message: (`Error: ${model.name} not found`)
                        }
                    } else {
                        return {
                            message: (`Success: ${model.name} deleted`)
                        }
                    }
                }
                return res
            })
            .catch(function (err) {
                t.rollback()
                if(err.parent){
                    if(err.parent.code in errors) {
                        err.parent.message = errors[err.parent.code]
                    }
                    return err.parent
                }                               
                 return err
            })
    })
}
