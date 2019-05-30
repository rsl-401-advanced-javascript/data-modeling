'use strict';

const Category = require('../schemas/categories');

class Categories {

  constructor() {
    this.database = [];
  }

  get(_id) {
    return Promise.resolve([this.database.find(cat => cat._id === _id)]);
  }

  post(record) {
    this.database.push(record);
    return Promise.resolve(this.database.find(cat => cat.name === record.name));
  }

  put(_id, record) {
    const index = this.database.findIndex(cat => cat._id === _id);
    this.database[index] = {
      ...record,
      _id
    };
    console.log({
      _id,
      record,
      database: this.database
    })
    return this.get(_id).then(r => r[0]);
  }

  delete(_id) {}

}

module.exports = Categories;