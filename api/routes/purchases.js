const express = require('express');
const router = express.Router();
const PurchasesController = require('../controllers/purchases');
const checkAuth = require('../middleware/check-auth');
const validator = require('../helpers/validate');
const purchasesValidationMiddleware = require('../middleware/purchases-validation');

router.get('/', checkAuth,  PurchasesController.getPurchases);
router.post('/', checkAuth, purchasesValidationMiddleware.purchasesValidator, PurchasesController.postPurchase);
router.get('/:purchaseId', checkAuth, PurchasesController.getPurchase);
router.put('/:purchaseId', checkAuth, PurchasesController.putPurchase);
router.delete('/:purchaseId', checkAuth, PurchasesController.deletePurchase);

module.exports = router; 