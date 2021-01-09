const express = require('express'); 
const router = express.Router(); 

const ProductsController = require('../controllers/products');

const checkAuth = require('../middleware/check-auth');

router.get('/', checkAuth, ProductsController.allProducts);
router.post('/', checkAuth, ProductsController.newProduct);
router.get('/:productId', checkAuth, ProductsController.productDetails);
router.patch('/:productId', checkAuth, ProductsController.productUpdate);
router.delete('/:productId', checkAuth, ProductsController.productDelete);

module.exports = router; 