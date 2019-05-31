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
      .then(res => console.log(res.body) && expect(res.body.name).toBe(entry.name));
  });

  it('should return the specified product', () => {
    return mockRequest
      .get('/products/5cf1308b5296201a400b763b')
      .expect(200);
  });

  it('should update the specified product', () => {
    return mockRequest
      .put('/products/5cf1308b5296201a400b763b')
      .send({
        name: 'brooklyn'
      })
      .expect(200)
      .then(res => expect(res.body.name).toBe('brooklyn'));
  });

  it('should delete the specified product', () => {
    return mockRequest
      .delete('/products/5cf1308b5296201a400b763b')
      .expect(200);
  });
});