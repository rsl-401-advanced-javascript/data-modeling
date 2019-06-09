'use strict';

const mongoose = require('mongoose');

const Product = new mongoose.Schema({
  name: String,
  category: String
});

Product.pre('save', function (next) {
  this.name = this.name.toUpperCase();
  next();
});

module.exports = mongoose.model("Product", Product);