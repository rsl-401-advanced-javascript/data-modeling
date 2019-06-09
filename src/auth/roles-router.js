'use strict';

const {
  Router
} = require('express');
const Role = require('./roles-model');

const router = module.exports = new Router();

router.get('/public-stuff', (req, res) => {

});

router.get('/hidden-stuff', (req, res) => {

});

router.get('/something-to-read', (req, res) => {

});

router.post('/create-a-thing', (req, res) => {

});

router.put('/update', (req, res) => {

});

router.patch('/jp', (req, res) => {

});

router.delete('/bye-bye', (req, res) => {

});

router.get('/everything', (req, res) => {

});

router.post('/create-role', async (req, res) => {
  const newRole = new Role({
    role: req.body.role,
    capabilities: req.body.capabilities.split(', ')
  });
  await newRole.save();
  res.send(`${req.body.role} saved!`);
});