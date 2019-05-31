'use strict';

const {
  server
} = require('../src/app');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Products', () => {

  it('should create a new product and save it to the database', () => {
    const entry = {
      name: 'deep dish',
      category: 'pizza'
    };
    return mockRequest
      .post('/products')
      .send(entry)
      .expect(200)
      .then(res => expect(res.body.name).toBe(entry.name));
  });
});