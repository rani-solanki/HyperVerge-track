const jwt = require('jsonwebtoken')
const config = require("config");

module.exports = function(req, res, next){
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: "no token,authorization denied" });
    }
    try {
        const Result = jwt.verify(token, config.get("jwtSecret"));
        req.user = Result.admin
        console.log("message", req.user)
        // console.log(req.user.admin.id)
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
}

