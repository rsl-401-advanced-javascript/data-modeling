'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./middleware/error.js');
const notFound = require('./middleware/404.js');

// Models
const Products = require('./models/products.js');
const products = new Products();

const Categories = require('./models/categories.js');
const categories = new Categories();

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Routes
const categoriesRoute = require('./routes/categories');
const productsRoute = require('./routes/products');
app.use(categoriesRoute);
app.use(productsRoute);

// Catchalls
app.use(notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => app.listen(port, () => console.log(`Server up on port ${port}`)),
};