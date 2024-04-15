const express = require('express');
const router = express.Router();
const controller = require('./controller.js');
const autRequest = require('../services/authServices.js')

router.post('/login', controller.loginUser);
router.get('/' ,autRequest.authenticateToken, controller.getAllProjects);
router.post('/addUser',autRequest.authenticateToken, controller.addUser);
router.post('/addProject', controller.addProject);


module.exports = router;