'use strict';

var Sequelize = require('sequelize');

var host = process.env.DB_HOST;
var db =  process.env.DB_DATABASE;
var user = process.env.DB_USERNAME;
var pw = process.env.DB_PASSWORD;


var sequelize = new Sequelize(db, user, pw, {
	dialect: 'mysql',
	host: host
});

module.exports = sequelize;
