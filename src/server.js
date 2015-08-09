// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 5050;

// MongoDB
mongoose.connect('mongodb://localhost/products');

// Express config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/api'));

// Start server
app.listen(port, function() {
  console.log('API is running on: http://localhost:'+ port +'/products/v1/');
});
