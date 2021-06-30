const express = require('express');
const bodyParser = require("body-parser");
const { dbConnect } = require('./config/db.js');
var cors = require('cors')
const app = express()
app.use(cors())

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', require('./router/api/users'));
app.use('/api/auth', require('./router/api/auth'));


// app.listen(1900, () => {
//     console.log("server is runing")
// })

