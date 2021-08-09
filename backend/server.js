const express = require('express');
const bodyParser = require("body-parser");
const dbConnect = require('./config/db.js');
var errorhandler = require('errorhandler')
const cookieParser = require('cookie-parser');

var cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userRoutes = require('./router/api/users');
const authRoutes = require('./router/api/auth');
const AdminRoutes = require('./router/api/admin');
const adminAuthRoutes = require('./router/api/adminAuth');
const busRoutes = require('./router/api/bus');

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admins', AdminRoutes);
app.use('/api/adminauth', adminAuthRoutes);
app.use('/api/buses', busRoutes);

var PORT = process.env.PORT || 1900;

app.use(errorhandler);
app.use((err, req, res, next) => {
    console.log(err)
    return res.status(err.status).json(err)
})         
if (process.env.NODE_ENV == "production") {
    app.use(express.static("Frontend/build"))
}

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT + '!');
});

module.exports = app
