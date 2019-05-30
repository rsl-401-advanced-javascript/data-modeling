'use strict';

const {
  Router
} = require('express');
const router = new Router();

router.get('/categories', getCategories);
router.post('/categories', postCategories);
router.get('/categories/:id', getCategory);
router.put('/categories/:id', putCategories);
router.delete('/categories/:id', deleteCategories);

module.exports = router;