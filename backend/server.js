const express = require('express');
const bodyParser = require("body-parser");
const dbConnect = require('./config/db.js');
var cors = require('cors')
const app = express()
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userRoutes = require('./router/api/users')
const authRoutes = require('./router/api/auth')

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// app.listen(1900, () => {
//     console.log("server is runing")
// })
