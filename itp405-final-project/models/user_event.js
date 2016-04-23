'use strict';

var Sequelize = require('sequelize');
var sequelize = require('./../config/sequelize');

// DEFINE
var User_Event = sequelize.define('user_event', {
	creator: {
		field: 'creator',
		type: Sequelize.BOOLEAN
	}
}, {
	timestamps: false,
	tableName: 'users_events',
});

module.exports = User_Event;
