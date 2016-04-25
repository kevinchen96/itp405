var models = require('../models');
var Event = require('../models/event');
var User = require('../models/user');


var UserController = {};


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

//Get all events
UserController.getUsers = function (req, res) {
  User.findAll({
  	include: [
    {
      model: Event
  	}]
  }).then(function (response) {
    res.json(response);
  });
};


// UserController.getUsers = function (req, res) {
// 	var password = "5f4dcc3b5aa765d61d8327deb882cf99";
//   User.findOne({
//   	where: {
//   		hash: password
//   	}
//   }).then(function (response) {
//     res.json(response);
//   });
// };
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

module.exports = UserController;
