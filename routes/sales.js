const { Router } = require('express');
const {getAllSales, getSaleById, getSalesByPurchaseMethod, getCustomerPurchasesByEmail} = require("../controllers/sales");
const router = Router();

router.get('/purchasemethod', getSalesByPurchaseMethod);
router.get('/customerPurchases', getCustomerPurchasesByEmail);
router.get('/all', getAllSales);
router.get('/', getSaleById);

module.exports = router;