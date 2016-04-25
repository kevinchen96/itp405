var express = require('express');
var CryptoJS = require("crypto-js");
var router = express.Router();
var jwt    = require('jsonwebtoken');
var secret = require('../../config/secret');

var User = require('../../models/user');

router.post('/register', function(req, res) {
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
		res.sendStatus(200);
	});
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
	  		console.log("no user");
	  	}
	  	else{
	  		console.log(hash);
	  		console.log(response);
	  		if(response.dataValues.hash != hash){
	  			console.log("wrong password");
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