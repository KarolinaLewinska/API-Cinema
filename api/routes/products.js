const express = require('express'); 
const router = express.Router(); 
const ProductsController = require('../controllers/products');
const checkAuth = require('../middleware/check-auth');
const productsValidationMiddleware = require('../middleware/products-validation');

router.get('/', checkAuth, ProductsController.getProducts);
router.post('/', checkAuth, productsValidationMiddleware.productsValidator, ProductsController.postProduct);
router.get('/:productId', checkAuth, ProductsController.getProduct);
router.put('/:productId', checkAuth, productsValidationMiddleware.productsValidator, ProductsController.putProduct);
router.delete('/:productId', checkAuth, ProductsController.deleteProduct);

module.exports = router; 