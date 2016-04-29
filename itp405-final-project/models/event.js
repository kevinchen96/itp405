'use strict';

var Sequelize = require('sequelize');
var sequelize = require('./../config/sequelize');

// DEFINE
var Event = sequelize.define('event', {
	id: {
		field: 'event_id',
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		field: 'name',
		type: Sequelize.STRING,
	},
	description: {
		field: 'description',
		type: Sequelize.STRING,
	},
	address: {
		field: 'address',
		type: Sequelize.STRING,
	},
	city: {
		field: 'city',
		type: Sequelize.STRING,
	},
	state: {
		field: 'state',
		type: Sequelize.STRING,
	},
	zip: {
		field: 'zip',
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
