var models = require('../models');
var Event = require('../models/event');
var User = require('../models/user');

var sequelize = require('./../config/sequelize');
var Validator = require('validatorjs');
var EventController = {};


EventController.checkUser = function(req, res){
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
}

EventController.addUser = function(req, res){
  var rules = {
    id: 'required|numeric',
  };
  var data = {
    id: req.body.id
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
}

EventController.createEvent = function(req, res){
  var rules = {
    name: 'required',
    address: 'required',
    city: 'required',
    state: 'required|size:2',
    zip: 'required|numeric|digits:5',
    date: ['required', 'regex:/^\\d{4}-\\d{2}-\\d{2}$/'],
    time: ['required', 'regex:/^\\d{2}:\\d{2}:\\d{2}$/']
  };
  var data = {
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    date: req.body.date,
    time: req.body.time
  };
  var validation = new Validator(data, rules);
 
  if(validation.fails()){
    res.status(400).send(validation.errors.all());
  }  
  else{
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
  }
};

EventController.updateEventDetails = function (req, res) {
  var rules = {
    id: 'required|numeric',
    name: 'required',
    address: 'required',
    city: 'required',
    state: 'required|size:2',
    zip: 'required|numeric|digits:5',
    date: ['required', 'regex:/^\\d{4}-\\d{2}-\\d{2}$/'],
    time: ['required', 'regex:/^\\d{2}:\\d{2}:\\d{2}$/'],
  };
  var data = {
    id: req.params.id,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    date: req.body.date,
    time: req.body.time
  };
  var validation = new Validator(data, rules);
 
  if(validation.fails()){
    res.status(400).send(validation.errors.all());
  }  
  else{
    Event.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (response) {
        response.update({
          name: req.body.name,
          date: req.body.date,
          time: req.body.time,
          description: req.body.description,
          address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip
        }).then(function (response){
          res.json(response);
        });
        console.log("ok");
    });
  }
};

EventController.getCreator = function (req, res) {
  var rules = {
    id: 'required|numeric'
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
  }
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


module.exports = EventController;
