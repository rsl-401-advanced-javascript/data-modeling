'use strict';

const Categories = require('../src/models/categories');

describe('Categories', () => {
  const db = new Categories();
  let received;
  let expected;

  it('should be empty upon instantiation', () => {
    received = db.database;
    expected = [];

    expect(received).toStrictEqual(expected);
  });
});