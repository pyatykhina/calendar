const express = require('express');
const logger = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require('path');

require('./database/models/db');

var app = express();

app.use(logger('dev')); 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../build')));

app.use('/', require('./routes'));
app.use('/api', require('./database/index'));

app.use(session({
    secret: 'calendar',
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: null
    },
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

module.exports = app;