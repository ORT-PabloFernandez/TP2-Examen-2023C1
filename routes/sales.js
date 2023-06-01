const { Router } = require('express');
const {getAllSales, getSaleById, getSalesByPurchaseMethod} = require("../controllers/sales");
const router = Router();

router.get('/purchasemethod', getSalesByPurchaseMethod);
router.get('/all', getAllSales);
router.get('/', getSaleById);

module.exports = router;