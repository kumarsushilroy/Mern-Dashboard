
const express = require('express');
const { createProduct, getallProducts, getsingleProduct, updateProduct, deleteProduct } = require('../Controllers/ProductControl');
const middleware = require('./MiddleWare/middleware') 
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })  

//Create Product
router.route('/create/product', upload.single('productimage')).post(createProduct);

// Get All Products
router.route('/get/all/products').get(getallProducts);

// Get single Product
router.route('/get/single/product/:id').get(getsingleProduct);

// Update Product
router.route('/update/product/:id').put(updateProduct); 

//Delete Products
router.route('/product/delete/:id').delete(deleteProduct);




module.exports = router;