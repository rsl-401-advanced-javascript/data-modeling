'use strict';

const Category = require('../schemas/categories');

class Categories {

  constructor() {
    this.database = [];
  }

  get(_id) {
    return Promise.resolve(this.database.find(cat => cat._id === _id));
  }

  post(record) {
    this.database.push(record);
    return Promise.resolve(this.database.find(cat => cat.name === record.name));
  }

  put(_id, record) {}

  delete(_id) {}

}

module.exports = Categories;