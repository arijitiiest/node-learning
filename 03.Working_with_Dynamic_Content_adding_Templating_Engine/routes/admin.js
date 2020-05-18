const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

products = [];

// // Normal template engine
// // /admin/add-product => GET
// router.get("/add-product", (req, res, next) => {
//   res.sendFile(path.join(rootDir, "views", "add-product.html"));
// });

// // /admin/add-product => POST
// router.post("/add-product", (req, res, next) => {
//   products.push({ title: req.body.title });
//   res.redirect("/");
// });


// // pug template engine
// // /admin/add-product => GET
// router.get('/add-product', (req, res, next) => {
//   res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
// });

// // /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   products.push({ title: req.body.title });
//   res.redirect('/');
// });


// express-handlebars template engine
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;
