var models = require('../models');
var Event = require('../models/event');
var User = require('../models/user');
var sequelize = require('./../config/sequelize');
var Validator = require('validatorjs');

var UserController = {};


UserController.isAdmin = function(req, res){
  res.json({success: true})
}

UserController.checkIfCreator = function(req, res){
  if(req.decoded.id == req.params.id){
    res.json({
      isCreator: true
    });
  }
  else{
    res.json({
      isCreator: false
    });
  }
}

UserController.getMe = function(req, res){
  User.findOne({
    where: {
     id: req.decoded.id
    },
    include: [
    {
      model: Event
    }]
  }).then(function (response) {
    res.json(response);
  });
}

//Get all events
UserController.getUsers = function (req, res) {
  User.findAll({
    where:{
      admin: false
    },
  	include: [
    {
      model: Event
  	}]
  }).then(function (response) {
    console.log(response);
    res.json({
      user: response
    });
  });
};

UserController.getUser = function (req, res) {
  var rules = {
    id: 'required|numeric',
  };
  var data = {
    id: req.params.id
  };
  var validation = new Validator(data, rules);
 
  if(validation.fails()){
    res.status(400).send({ 
      errors: {
        id: validation.errors.get('id')
      }
    });
  }  
  else{
    User.findOne({
      where:{
        id: req.params.id
      },
      include: [
      {
        model: Event
      }]
    }).then(function (response) {
      res.json({
        user: response
      });
    });
  }
};

UserController.updateUser = function (req, res) {
  var rules = {
    id: 'required|numeric',
    first_name: 'required|alpha',
    last_name: 'required|alpha',
    email: 'required|email',
    rating: 'required|numeric'
  };
  var data = {
    id: req.params.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    rating: req.body.rating
  };
  var validation = new Validator(data, rules);
 
  if(validation.fails()){
    res.status(400).send(validation.errors.all());
  }  
  else{
    User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (response) {
        response.update({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          rating: req.body.rating
        }).then(function (response){
          res.json(response);
        });
    });
  }
};

UserController.getPlayersQuery = function(req, res){
  var queries = req.query.queries;
  var query = "SELECT * FROM users WHERE ";
  query += "first_name LIKE '%" + queries[0] + "%' ";
  for(var i = 1; i < queries.length; i++){
    query += "OR first_name LIKE '%"  + queries[i] + "%' ";
  }
  query += "OR last_name LIKE '%" + queries[0] + "%' ";
  for(var i = 1; i < queries.length; i++){
    query += "OR last_name LIKE '%"  + queries[i] + "%' ";
  }
  query += "OR email LIKE '%" + queries[0] + "%' ";
  for(var i = 1; i < queries.length; i++){
    query += "OR email LIKE '%"  + queries[i] + "%'";
  }
  sequelize.query(query, { type: sequelize.QueryTypes.SELECT})
  .then(function(response) {
    res.json({
         user: response
    });
  });
}



module.exports = UserController;
