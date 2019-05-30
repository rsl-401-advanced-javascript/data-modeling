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
      name: 'Pizza'
    });
    received = await db.post(newCategory);
    expected = 'Pizza';

    expect(received.name).toBe(expected);
  });

  it('should be able to return a specified category', async () => {
    received = await db.get(received._id);
    expected = 'Pizza';

    expect(received[0].name).toBe(expected);
  });

  // KEITH TOLD ME TO SKIP THE REST OF THE CATEGORIES AND MOVE ONTO PRODUCTS
  // THE MEMORY-BASED DATABASE IS ACTING WEIRDLY
  it.skip('should be able to update a specified category', async () => {
    const newCategory = new Category({
      name: 'Cars'
    })
    received = await db.put(received[0]._id, newCategory);
    console.log('received', received);
    expected = 'Cars';

    expect(received.name).toBe(expected);
  });
});