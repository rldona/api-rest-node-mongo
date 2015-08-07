// Dependencies
var express = require('express');
var router = express.Router();

// Model
var Product = require('../models/products');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products/v1/');

// Return router
module.exports = router;
