// INCLUDE ALL NECESSARY PACKAGES
const express = require("express");
const router = express.Router();
const upload = require("../App/Middleware/mediaUploading");

const productController = require('../App/Api/Controllers/productController');

router.post('/addProduct', upload.any(), productController.create)
router.post('/getAllFeaturedProducts', productController.getAllFeatures)
router.get('/getAllProducts', productController.getAllProducts)
// router.post('/getProductsByIds', productController.getProductsByIds)
router.get('/getProduct/:id', productController.getProductById)
router.get('/getProductsByCategoryId/:id', productController.getProductsByCategoryId)
router.put('/updateProduct/:id', upload.any(), productController.updateProduct)
router.put('/removeFeatured', productController.removeAllFeatured)
router.delete('/deleteProduct/:id', productController.deleteProduct)

module.exports = router;