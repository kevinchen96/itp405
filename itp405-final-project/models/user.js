'use strict';

var Sequelize = require('sequelize');
var sequelize = require('./../config/sequelize');

// DEFINE
var User = sequelize.define('user', {
	id: {
		field: 'user_id',
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	first_name: {
		field: 'first_name',
		type: Sequelize.STRING,
	},
	last_name: {
		field: 'last_name',
		type: Sequelize.STRING,
	},
	email: {
		field: 'email',
		type: Sequelize.STRING,
	},
	rating: {
		field: 'rating',
		type: Sequelize.DECIMAL,
	},

}, {
	timestamps: false,
	tableName: 'users',
});

module.exports = User;
