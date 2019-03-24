const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../build/index.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../build/index.html'));
});

router.get('/diary', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../build/index.html'));
});

router.get('/chat', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../build/index.html'));
});

module.exports = router;