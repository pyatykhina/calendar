const express = require('express');
const router = express.Router();

const ctrlLogin = require('./controllers/login');

router.post('/auth', ctrlLogin.isAuth);  
router.post('/reg', ctrlLogin.isReg);

module.exports = router;