const express = require('express');
const router = express.Router();
const controller = require('./controller.js');
const autRequest = require('../services/authServices.js')

router.get('/projects', controller.getAllProjects);
router.get('/projects/:projectID', controller.getProjectById);
router.delete('/projects/:projectID', controller.deleteProject);
router.put('/projects/:projectID/manageProject', controller.modifyProject);
router.post('/login', controller.loginUser);
router.post('/addUser', controller.addUser);
router.post('/addProject',autRequest.authenticateToken, controller.addProject);


module.exports = router;