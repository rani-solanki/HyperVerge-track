const errorhandler = require('errorhandler');
var connect = require('connect')
var notifier = require('node-notifier')
var app = connect()

exports.errorNotification = async(req, res, err, code)=> {
    if (process.env.NODE_ENV === 'development') {
        // only use in development
        app.use(errorhandler({ log: errorNotification }))
    }

    if (err.name === "validation error") {
        const message = Object.values(err.errors).map((val) => {
            val.massage
            error = new errRes(message, 400)
            console.log(error)
        })
    }
    
    if (err.res.status === 500) {
        const message = "server error"
        res.json(message)
    }
}













// const asyncHandler = require('@joellesenne/express-async-handler')

// express.get('/', asyncHandler(async (req, res, next) => {
//     const bar = await foo.findAll();
//     res.send(bar)
// }))

// export default asyncHandler;