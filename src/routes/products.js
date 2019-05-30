'use strict';

const {
  Router
} = require('express');
const router = new Router();

router.get('/products', getProducts);
router.post('/products', postProducts);
router.get('/products/:id', getProduct);
router.put('/products/:id', putProducts);
router.delete('/products/:id', deleteProducts);

module.exports = router;