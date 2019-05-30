'use strict';

const Categories = require('../src/models/categories');
const Category = require('../src/schemas/categories');

describe('Categories', () => {
  const db = new Categories();
  let received;
  let expected;

  it('should be empty upon instantiation', () => {
    received = db.database;
    expected = [];

    expect(received).toStrictEqual(expected);
  });

  it('should be able to create a new category', async () => {
    const newCategory = new Category({
      name: "Pizza"
    });
    received = await db.post(newCategory);
    expected = "Pizza";

    expect(received.name).toBe(expected);
  });
});