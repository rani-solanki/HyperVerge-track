const jwt = require('jsonwebtoken')
const config = require("config");

module.exports = function (req, res, next) {
    //get the token from header
    const token = req.header('x-auth-token');
    //checke if no token
    if (!token) {
        return res.status(401).json({ msg: "no token,authorization denied" });
    }
    //verify token
    try {
        const Result = jwt.verify(token, config.jwtSecret);
        req.user = Result.user;
        next();

    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
}

