const sequelize = require('../db').sequelize
const User = require('../models').User

module.exports.getAll = (req, res, next) => {

    return User.findAll()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            next(err)
        })
}

module.exports.getUserById = (req, res, next) => {
    var userId = req.params.user_id

    return User.findOne({ where: { user_id: userId } })
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            next(err)
        })
}

module.exports.createUser = (req, res, next) => {
    var user = req.body

    sequelize.transaction(t => {
        return User.create( user,
             { transaction: t })
            .then(newUser => {
                res.send(newUser)
            })
            .catch(err => {
                next(err)
            })

    })
}

module.exports.updateUser = (req, res, next) => {
    var userId = req.params.user_id
    var user = req.body

    return User.findOne({ where: { user_id: userId } })
        .then(result => {
            sequelize.transaction(t => {
                return result.updateAttributes(user,
                    { transaction: t })
                    .then(updatedUser => {
                        res.send(updatedUser)
                    })
                    .catch(err => {
                        next(err)
                    })
            })
        })
}

module.exports.deleteUser = (req, res, next) => {
    var userId = req.params.user_id

    sequelize.transaction(t => {
        return User.destroy({ where: { user_id: userId } },
            { transaction: t })
            .then(result => {
                //Needs to be updated to use global error handling
                if (result === 1) {
                    res.send({ message: "User successfully deleted" })
                } else {
                    throw new Error("User not found")
                }
            })
            .catch(err => {
                next(err)
            })
    })
}
