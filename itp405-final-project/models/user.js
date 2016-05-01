'use strict';

var Sequelize = require('sequelize');
var sequelize = require('./../config/sequelize');

// DEFINE
var User = sequelize.define('user', {
	id: {
		field: 'user_id',
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
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
		validate: {
			isUnique: function (value, next) {
                    var self = this;
                    User.find({where: {email: value}})
                        .then(function (user) {
                            // reject if a different user wants to use the same email
                            if (user && self.id !== user.id) {
                                return next('Email already in use!');
                            }
                            return next();
                        })
                        .catch(function (err) {
                            return next(err);
                        });
                }
		}
	},
	rating: {
		field: 'rating',
		type: Sequelize.DECIMAL,
	},
	hash: {
		field: 'hash',
		type: Sequelize.STRING,
	},
	admin: {
		field: 'admin',
		type: Sequelize.BOOLEAN,
	},

}, {
	timestamps: false,
	tableName: 'users',
});

module.exports = User;
