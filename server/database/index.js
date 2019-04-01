const express = require('express');
const router = express.Router();

const ctrlLogin = require('./controllers/login');

router.post('/isAuthorized', ctrlLogin.isAuthorized);
router.post('/auth', ctrlLogin.isAuth);  
router.post('/reg', ctrlLogin.isReg); 
router.post('/logout', ctrlLogin.isLogout);

module.exports = router;