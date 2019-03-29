const express = require('express');
const logger = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

require('./database/models/db');

var app = express();

app.use(logger('dev')); 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.use(express.static(path.join(__dirname, '../build')));

const isAuthorized = (req, res, next) => {
    if (!req.session.isAuthorized) {
        return next();
    }
    res.redirect('/');
}; 

app.get('/main', isAuthorized, (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../build/index.html'));
});

app.get('/diary', isAuthorized, (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../build/index.html'));
});

app.get('/chat', isAuthorized, (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../build/index.html'));
});

app.use('/api', require('./database/index'));

module.exports = app;