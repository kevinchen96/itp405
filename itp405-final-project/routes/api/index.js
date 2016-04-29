var express = require('express');
var CryptoJS = require("crypto-js");
var EventController = require('../../controllers/EventController');
var UserController = require('../../controllers/UserController');
var User_EventController = require('../../controllers/User_EventController');
var middleware = require('../middleware');
var router = express.Router();

var User = require('../../models/user');

router.use('/me', middleware);
router.get('/me', UserController.getMe);

router.post('/me/events', EventController.createEvent);
router.get('/me/user_creator/:id', UserController.checkIfCreator);

router.post('/me/events/join', EventController.addUser);
router.get('/me/events/joined/:id', EventController.checkUser);

router.get('/events', EventController.getEvents);
router.get('/events/:id', EventController.getEventDetails);
router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUser);
router.get('/users_events', User_EventController.getUserEvents);

router.get('/creator/:id', EventController.getCreator);

router.get('/query/events', EventController.getEventsQuery);
router.get('/query/players', UserController.getPlayersQuery);
module.exports = router;