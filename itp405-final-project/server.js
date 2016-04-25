require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// create app
var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());


// Set routes
app.use('/', require('./routes'));

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "http://localhost:4200");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Resource", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

// app.listen(8000, function(){
// 	console.log("Listening on port 8000");
// });

module.exports = app;
