const express = require('express');
const router = express.Router();

const PurchasesController = require('../controllers/purchases');

const checkAuth = require('../middleware/check-auth');

router.get('/', checkAuth, PurchasesController.allPurchases);
router.post('/', checkAuth, PurchasesController.newPurchase);
router.get('/:purchaseId', checkAuth, PurchasesController.purchaseDetails);
router.patch('/:purchaseId', checkAuth, PurchasesController.purchaseUpdate);
router.delete('/:purchaseId', checkAuth, PurchasesController.purchaseDelete);

module.exports = router; 