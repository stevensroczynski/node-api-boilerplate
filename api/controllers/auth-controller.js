var jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
var passport = require("passport")
var passportJWT = require("passport-jwt")
var user = require('../models/user')
const User = require('../models').User
const sequelize = require('../db').sequelize
var passportJWT = require("passport-jwt")

const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
//This should be a call to the database
jwtOptions.secretOrKey = 'dfwzsdzwh823zebdwdz772632gdsbdhfjdkjl'

var localStrategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  let user = User.findOne({
    where: {
      id: jwt_payload.id
    }
  })

  if (user) {
    next(null, user)
  } else {
    next(null, false)
  }
})

passport.use(localStrategy)

//Register New User
module.exports.register = (req, res, next) => {
    var user = req.body
    const saltRounds = 10
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      user.password = hash
    })

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

//Login and get token
//Error handling needs to be refactored
module.exports.login = (req, res, next) => {
  if (req.body.username && req.body.password) {
    var username = req.body.username
    var password = req.body.password
  } else {
    res.status(401).json({ message: "Bad request" })
  }

  //This is a BACKDOOR!!! DEV PURPOSES ONLY!!! REMOVE ME!!!
  if(username === "user" && password === "password"){
    var payload = { id: 1 }
    var token = jwt.sign(payload, jwtOptions.secretOrKey)
    res.status(200).json({ message: "Login Success", token: token, user_id: 1})
    return
  }

  // return User.findOne({
  //   where: {
  //     username: req.body.username
  //   }
  // })
  //   .then(user => {
  //     if (!user) {
  //       res.status(401).json({ message: "No such user found" })
  //     }
  //     bcrypt.compare(password, user.password)
  //     .then(isCorrectPass => {
  //       console.log(password, user.password)
  //         if (isCorrectPass) {
  //           var payload = { id: user.id }
  //           var token = jwt.sign(payload, jwtOptions.secretOrKey)
  //           res.status(200).json({ message: "Login Success", token: token, user_id: user.id })
  //         } else {
  //           res.status(401).json({ message: "Passwords did not match" })
  //         }
  //       })
  // })
  }

module.exports.jwtAuth = passport.authenticate('jwt', { session: false })
