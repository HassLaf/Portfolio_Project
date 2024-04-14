const express = require('express');
const router = express.Router();
const controller = require('./controller.js');


router.get('/' , controller.getAllProjects);
router.post('/addUser', controller.addUser);
router.post('/addProject', controller.addProject);


module.exports = router;