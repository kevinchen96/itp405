var express = require('express');

var EventController = require('../../controllers/EventController');
var UserController = require('../../controllers/UserController');
var User_EventController = require('../../controllers/User_EventController');
var router = express.Router();


router.get('/events', EventController.getEvents);
router.get('/users', UserController.getUsers);
router.get('/users_events', User_EventController.getUserEvents);


module.exports = router;