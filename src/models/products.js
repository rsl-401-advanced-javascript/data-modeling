'use strict';

const mongoConnect = require('../../util/mongoose-connect');
const MONGODB_URI = process.env.MONGODB_URI ||
  'mongodb://localhost/data-modeling';

const Product = require('../schemas/products');

mongoConnect(MONGODB_URI);

class Products {

  constructor() {
    this.database = [];
  }

  get(id) {}

  post(entry) {
    let product = new Product(entry);
    return product.save()
      .then(res => res);
  }

  put(id, entry) {}

  delete(id) {}

  sanitize(entry) {}

}

module.exports = Products;