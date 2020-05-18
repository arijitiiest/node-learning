const path = require('path');

const express = require('express');

const adminData = require('./admin');

const rootDir = require('../util/path');

const router = express.Router();

// // html template engine
// router.get('/', (req, res, next) => {
//   console.log(adminData.products);
//   res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });


// // pug template engine
// router.get('/', (req, res, next) => {
//   const products = adminData.products;
//   res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
// });


// express-handlebars template engine
router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
