// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// Server Port
var port = process.env.PORT || 5050;

// MONGOLAB_URI & MONGOHQ_URL are necessary to MongoLab (Heroku)
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/products';

// MongoDB
mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '.' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

// Express config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/api'));

// Start server
app.listen(port, function() {
  console.log('API is running on: http://localhost:'+ port +'/products/v1/');
});
