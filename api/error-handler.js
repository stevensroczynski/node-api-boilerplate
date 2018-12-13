const logger = require('./logger')

module.exports.use = (app, db) => {
    const SequelizeDatabaseError = db.sequelize.DatabaseError
    // catch 404 and forward to error handler
    app.use((req, res, next) => {
        var err = new Error('Location Not Found')
        err.status = 404
        next(err)
    })

    // error handler
    app.use((err, req, res, next) => {

        logger.error(err)

        if(err instanceof SequelizeDatabaseError){
            err.status = 503
            //TODO: Potentially set custom error message here
            err.message = err.message
        }

        // set locals, only providing error in development
        // res.locals.message = err.message
        // res.locals.error = req.app.get('env') === 'development' ? err : {}

        // Default Error Response
        res.status(err.status || 500)
        res.send({error: err.message})
    })
}
