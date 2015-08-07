// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express config
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/api'));

// Start server
app.listen(5050);
console.log('API is running on: http://localhost:5050/products/');
