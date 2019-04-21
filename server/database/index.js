const express = require('express');
const router = express.Router();

const ctrlLogin = require('./controllers/login');
const ctrlProject = require('./controllers/project');
const ctrlTask = require('./controllers/task');

router.post('/isAuthorized', ctrlLogin.isAuthorized);
router.post('/auth', ctrlLogin.isAuth);  
router.post('/reg', ctrlLogin.isReg); 
router.post('/logout', ctrlLogin.isLogout);

router.post('/createProject', ctrlProject.createProject);
router.post('/getProjects', ctrlProject.getProjects);
router.post('/addMember', ctrlProject.addMember);
router.post('/removeMember', ctrlProject.removeMember);

router.post('/addTask', ctrlTask.addTask);
router.post('/getTasks', ctrlTask.getTasks);

module.exports = router;