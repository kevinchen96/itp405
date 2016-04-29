var models = require('../models');
var Event = require('../models/event');
var User = require('../models/user');

var sequelize = require('./../config/sequelize');
var EventController = {};


// BookController.create = function (req, res) {
//   var userId = req.user.id;
//   Book.findOrCreate({
//     where: {
//       isbn: req.body.isbn,
//       source: req.body.source,
//       title: req.body.title,
//       authors: req.body.authors,
//       description: req.body.description,
//       publisher: req.body.publisher,
//       pages: req.body.pages,
//       dateWritten: req.body.dateWritten,
//       type: req.body.type
//     }
//   }).spread(function (book, created) {
//     var bookId = book.dataValues.id;
//     ReadingList.create({
//       userId: userId,
//       bookId: bookId,
//       status: 0
//     }).then(function () {
//       res.sendStatus(200);
//     });
//   });
// };

// // getting the users booklist
// BookController.getUserBookList = function (req, res) {

//   var userId = req.user.id;
//   ReadingList.findAll({
//     where: {
//       userId: userId
//     },
//     include: [{
//       model: Book
//     }]
//   }).then(function (response) {
//     res.json(response);
//   })
// };

// // getting a specific book in a user's booklist
// BookController.getBookInBooklist = function(req, res){
//   var userId = req.user.id;
//   var isbn = req.params.isbn;

//   ReadingList.findAll({
//     where: {
//       userId: userId
//     },
//     include: [{
//       model: Book,
//       where: {
//         isbn: isbn
//       }
//     }]
//   }).then(
//       function(response){
//         response.length > 0 ? res.json(response[0]) : res.sendStatus(404);
//       },
//       function(err){
//         console.log("Error in getBookInBooklist: " + err);
//         res.sendStatus(422);
//       }
//   );
// };
EventController.checkUser = function(req, res){
  Event.findOne({
    where: {
      id: req.params.id
    },
    include: [
    {
      model: User,
      through: {
        // attributes: ['createdAt', 'startedAt', 'finishedAt']
          where: {user_id: req.decoded.id}
      }
    }]
  }).then(function (response) {
    res.json({
         event: response
    });
  });
}

EventController.addUser = function(req, res){
  Event.findOne({
    where: {
      id: req.body.id
    }
  }).then(function (response) {
    User.findOne({
      where: {
       id: req.decoded.id
      }
    }).then(function (user) {
      user.addEvent(response, { creator: false });
    });
    res.json(response);
  });
}

EventController.createEvent = function(req, res){

  Event.create({
    name: req.body.name,
    description: req.body.description,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    date: req.body.date,
    time: req.body.time
  }).then(function (response) {
    User.findOne({
      where: {
       id: req.decoded.id
      }
    }).then(function (user) {
      user.addEvent(response, { creator: true });
    });
    res.json(response);
  });
}
//Get all events
EventController.getEvents = function (req, res) {
  Event.findAll({
  	include: [
    {
      model: User
  	}]
  }).then(function (response) {
  	res.json({
         event: response
    });
  });
};

//Get specific event
EventController.getEventDetails = function (req, res) {
  Event.findOne({
    where: {
      id: req.params.id
  	},
  	include: [
    {
      model: User
  	}]
  }).then(function (response) {
  	res.json({
         event: response
    });
  });
};

EventController.getCreator = function (req, res) {
	console.log("here");
  console.log(req.params.id);
  Event.findOne({
    where: {
      id: req.params.id
  	},
  	include: [
    {
      model: User,
      through: {
        // attributes: ['createdAt', 'startedAt', 'finishedAt']
          where: {creator: true}
      }
  	}]
  }).then(function (response) {
  	res.json({
         event: response
    });
  });
};

EventController.getEventsQuery = function(req, res){
  var queries = req.query.queries;
  var query = "SELECT * FROM events WHERE ";
  query += "description LIKE '%" + queries[0] + "%' ";
  console.log(query)
  for(var i = 1; i < queries.length; i++){
    query += "OR description LIKE '%"  + queries[i] + "%' ";
  }
  query += "OR name LIKE '%" + queries[0] + "%' ";
  for(var i = 1; i < queries.length; i++){
    query += "OR name LIKE '%"  + queries[i] + "%' ";
  }
  query += "OR address LIKE '%" + queries[0] + "%' ";
  for(var i = 1; i < queries.length; i++){
    query += "OR address LIKE '%"  + queries[i] + "%'";
  }
  query += "OR city LIKE '%" + queries[0] + "%' ";
  for(var i = 1; i < queries.length; i++){
    query += "OR city LIKE '%"  + queries[i] + "%'";
  }
  sequelize.query(query, { type: sequelize.QueryTypes.SELECT})
  .then(function(response) {
    res.json({
         event: response
    });
  });
}
// BookController.updateStatus = function (req, res) {
//   var userId = req.user.id;
//   var bookId = req.body.bookId;
//   ReadingList.update(
//       {
//         status: req.body.status
//       },
//       {
//         where: {
//           userId: userId,
//           bookId: bookId
//       }
//   }).then(function (response) {
//     res.send('Updated Status');
//   });
// };

// // change this to an or to account for if the person sent the isbn
// BookController.getBookByISBN = function (req, res) {
//   var isbn = req.params.isbn;
//   Book.findOne({
//     where: {
//       isbn: isbn
//     },
//     include: [Comment]
//   }).then(function (response) {
//     res.send(response);
//   });
// };

// BookController.getBookIdByISBN = function (req, res) {
//   var isbn = req.params.isbn;
//   Book.findOne({
//     where: {
//       isbn: isbn
//     }
//   }).then(function (response) {
//     if(response.id){
//       res.json({id: response.id});
//     } else {
//       res.sendStatus(404);
//     }
//   });
// };

// BookController.removeBook = function (req, res) {
//   var listId = req.params.id;

//   ReadingList.destroy({
//     where: {
//       id: listId
//     }
//   }).then(function (response) {
//     res.send('Removed Book From List');
//   });

// };

// BookController.query = function(req, res) {
//   Amazon.query(req.params.query, function(err, response){
//     if(err) res.sendStatus(404); // not found
//     else{
//       res.json(response);
//     }
//   });
// };

module.exports = EventController;
