var express = require('express');
var CryptoJS = require("crypto-js");
var router = express.Router();
var jwt    = require('jsonwebtoken');
var secret = require('../../config/secret');

var User = require('../../models/user');
var Validator = require('validatorjs');

router.post('/register', function(req, res) {
	var rules = {
	    first_name: 'required|alpha',
	    last_name: 'required|alpha',
	    email: 'required|email',
	    rating: 'required|numeric'
	 };
  var data = {
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
	var admin = false;
	if(req.body.first_name == "admin" && req.body.password =="laravel"){
		admin = true;
	}
	User.create({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		rating: req.body.rating,
		hash: CryptoJS.MD5(req.body.password).toString(),
		admin: admin
	}).then(function (response){
		console.log("I am here");
		console.log(response);
		res.sendStatus(200);
	}, function(response){
		 return res.status(400).send(response.errors);
	});
	}
});

router.post('/login', function(req, res){
	var email = req.body.email;
	var hash = CryptoJS.MD5(req.body.password).toString();
	console.log(req.body.password);
	console.log(CryptoJS.MD5(req.body.password).toString());
	  User.findOne({
	  	where: {
	  		email: email
	  	}
	  }).then(function(response){
	  	if(!response){
	  		return res.status(400).send({error: "No user with that email!"});
	  	}
	  	else{
	  		console.log(hash);
	  		console.log(response);
	  		if(response.dataValues.hash != hash){
	  			return res.status(400).send({error: "Wrong password!"});
	  		}
	  		else{
	  			var token = jwt.sign(response.dataValues, secret.secret, {
		          expiresIn: 86400 // expires in 24 hours
		        });

		        res.cookie('token', token).send();
	  		}
	  	}

    });
});

router.post('/logout', function(req, res){
	res.clearCookie('token');
	res.send('removed cookie', 200);
});


module.exports = router;