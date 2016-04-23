'use strict';

var Sequelize = require('sequelize');
var sequelize = require('./../config/sequelize');

// DEFINE
var Event = sequelize.define('event', {
	id: {
		field: 'event_id',
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	location: {
		field: 'location',
		type: Sequelize.STRING,
	},
	date: {
		field: 'date',
		type: Sequelize.DATE,
	},
	time: {
		field: 'time',
		type: Sequelize.TIME,
	}
}, {
	timestamps: false,
	tableName: 'events',
});

module.exports = Event;
