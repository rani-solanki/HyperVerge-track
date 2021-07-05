const User = require('../models/users')

module.exports = async (req, res, next) => {
    let user = await User.findById(req.user.id);
    const isAdmin = user.isAdmin
    console.log(isAdmin)
    if (!isAdmin) {
        const err = { status: 401, msg: 'only admin can create bus' }
        return next(err)
    }
    next()
}


