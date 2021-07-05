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
        // console.log(config.get("jwtSecret"))
        const Result = jwt.verify(token, config.get("jwtSecret"));
        // console.log(Result)
        req.user = Result.admin;
        next();

    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
}

