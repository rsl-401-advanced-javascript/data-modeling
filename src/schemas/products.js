'use strict';

const mongoose = require('mongoose');

const Product = new mongoose.Schema({
  name: String,
  category: String
});

module.exports = mongoose.model("Product", Product);