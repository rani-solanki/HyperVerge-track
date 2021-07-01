const express = require('express');
const bodyParser = require("body-parser");
const dbConnect = require('./config/db.js');
var errorhandler = require('errorhandler')

var cors = require('cors')
const app = express()
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userRoutes = require('./router/api/users')
const authRoutes = require('./router/api/auth')

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(1900, () => {
    console.log("server is runing")
})

app.use(errorhandler);

app.use((err, req, res, next) => {
    console.log("validation error from the errorHandler")
    return res.status(err.status).json({errors: err.errors})
})

