var express = require('express');
var CryptoJS = require("crypto-js");
var EventController = require('../../controllers/EventController');
var UserController = require('../../controllers/UserController');
var User_EventController = require('../../controllers/User_EventController');
var middleware = require('../middleware');
var router = express.Router();

var User = require('../../models/user');

router.use('/me', middleware);
router.get('/me', function(req, res){
    res.json(req.decoded);
});

router.get('/events', EventController.getEvents);
router.get('/users', UserController.getUsers);
router.get('/users_events', User_EventController.getUserEvents);

module.exports = router;