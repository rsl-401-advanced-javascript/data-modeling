'use strict';

const Product = require('../schemas/products');

class Products {

  constructor() {
    this.database = [];
  }

  get(id) {
    return Product.findOne({
        _id: id
      })
      .then(res => res);
  }

  post(entry) {
    let product = new Product(entry);
    return product.save()
      .then(res => res);
  }

  put(id, entry) {
    return Product.updateOne({
        _id: id
      }, {
        name: entry.name
      })
      .then(() => this.get(id));
  }

  delete(id) {
    return Product.deleteOne({
        _id: id
      })
      .then(() => 'Deleted product');
  }

  sanitize(entry) {}

}

module.exports = Products;