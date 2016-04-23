'use strict'

var Event = require('./event');
var User = require('./user');
var User_Event = require('./user_event');

// Event.belongsTo(User, {foreignKey: 'user_id'});
// User.hasMany(Event, {foreignKey: 'user_id'});


User.belongsToMany(Event, { through: User_Event, foreignKey: 'user_id'});
Event.belongsToMany(User, { through: User_Event, foreignKey: 'event_id'});





// User_Event.belongsTo(User, {foreignKey: 'user_id'});
// User.hasMany(User_Event, {foreignKey: 'user_id'});
// User_Event.belongsTo(Event, {foreignKey: 'event_id'});
// Event.hasMany(User_Event, {foreignKey: 'event_id'});

// ReadingList.belongsTo(User);
// User.hasMany(ReadingList);

// ReadingList.belongsTo(Book);

// Comment.belongsTo(User);
// User.hasMany(Comment);

// Comment.belongsTo(Book);
// Book.hasMany(Comment);

// User.hasMany(Follower);
// Follower.belongsTo(User, { foreignKey: 'followerId', as: 'personFollowing' });
// Follower.belongsTo(User, { foreignKey: 'userId'} );


module.exports = {
	Event: Event,
	User: User,
	User_Event: User_Event
}
