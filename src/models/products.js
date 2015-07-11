// Dependencies
var restful = require('node-restful');
var mongoose = require('mongoose');

// Schema
var productSchema = new mongoose.Schema({
  name: String,
  sku: String,
  price: Number
});

// Return model
module.exports = restful.model('Products', productSchema);
