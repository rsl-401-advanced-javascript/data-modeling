'use strict';

const {
  server
} = require('../src/app');
const supertest = require('supertest');
const mockRequest = supertest(server);
const mongoConnect = require('../util/mongoose-connect');
const mongoClose = require('../util/mongoose-close');
const MONGOLAB_URI = process.env.MONGOLAB_URI ||
  'mongodb://localhost/data-modeling';

describe('Products', () => {

  beforeAll(() => {
    return mongoConnect(MONGOLAB_URI);
  });

  let id;

  it('should create a new product and save it to the database', () => {
    const entry = {
      name: 'deep dish',
      category: 'pizza'
    };
    return mockRequest
      .post('/products')
      .send(entry)
      .expect(200)
      .then(res => {
        id = res.body._id;
        expect(res.body.name).toBe(entry.name);
      });
  });

  it('should return the specified product', () => {
    return mockRequest
      .get(`/products/${id}`)
      .expect(200);
  });

  it('should update the specified product', () => {
    return mockRequest
      .put(`/products/${id}`)
      .send({
        name: 'brooklyn'
      })
      .expect(200)
      .then(res => expect(res.body.name).toBe('brooklyn'));
  });

  it('should delete the specified product', () => {
    return mockRequest
      .delete(`/products/${id}`)
      .expect(200)
      .then(res => expect(res.body).toBe('Deleted product'));
  });

  afterAll(() => {
    return mongoConnect.close();
  });
});