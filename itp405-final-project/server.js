require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');

// create app
var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set routes
app.use('/', require('./routes'));

app.listen(8000, function(){
	console.log("Listening on port 8000");
});

module.exports = app;
