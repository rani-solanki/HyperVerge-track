const User = require('../models/users');
console.log("admin")
module.exports = async (req, res, next) =>{
    console.log("welcome")
    const isAdmin = req.user.isAdmin;
    console.log("admin",isAdmin)
    if (!isAdmin) {
        const err = { status: 401, msg: 'No token, authorization failed'}
        return next(err)
    }
    next()
}


