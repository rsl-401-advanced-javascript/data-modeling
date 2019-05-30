'use strict';

const mongoose = require('mongoose');

const Product = new mongoose.Schema({
  name: String,
  category: String
});

Product.pre('save', async () => {
  await Promise.resolve(this.name = name.toUpperCase());
});

module.exports = mongoose.model("Product", Product);