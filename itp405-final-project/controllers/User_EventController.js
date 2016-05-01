var models = require('../models');
var User = require('../models/user');
var Event = require('../models/event');
var User_Event = require('../models/user_event');
var Validator = require('validatorjs');
var User_EventController = {};


//Get all events
User_EventController.getUserEvents = function (req, res) {
  User_Event.findAll({
  }).then(function (response) {
    res.json(response);
  });
};

User_EventController.deleteEvent = function (req,res){
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
    User_Event.destroy({
      where: {
        event_id: req.params.id
      }
    }).then(function (response) {
      Event.destroy({
        where: {
          event_id: req.params.id
        }
      }).then(function(response){
        console.log(response);
      });
      res.json(response);
    });
  }

}

User_EventController.deleteUser = function (req,res){
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
    User_Event.findAll({
      where: {
        creator: true,
        user_id: req.params.id
      }
    }).then(function (response){
      console.log(response);
      if(response.length == 0){
        User.destroy({
          where: {
            id: req.params.id
          }
        }).then(function (response1){
          res.json(response1);
        });
      }
      else{
        for(var i = 0; i < response.length; i++){
        (function() {
          var j = i;
          User_Event.destroy({
            where: {
              event_id: response[j].dataValues.event_id
            }
          }).then(function(response2){
            console.log(response);
            console.log(i);
            Event.destroy({
              where: {
                id: response[j].dataValues.event_id,
              }
            }).then(function (response3) {
              if(j == response.length-1){
                User_Event.destroy({
                  where: {
                    user_id: req.params.id
                  }
                }).then(function (response4){
                  User.destroy({
                    where: {
                      id: req.params.id
                    }
                  }).then(function (response5){
                    res.json(response5);
                  });
                });
              }
          });
        });
        })();
      }
      }
    });
  }
}


module.exports = User_EventController;
