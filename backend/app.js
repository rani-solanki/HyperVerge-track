const express = require('express');
const mongoose = require('mongoose');

const memory = require('dotenv').config();
const { MONGO_DB_CONNECT } = process.env;
const app = express();

if (process.env.NODE_ENV !== 'test') {
    mongoose.connect(MONGO_DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}



