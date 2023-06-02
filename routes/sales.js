const { Router } = require('express');
const {getAllSales, getSaleById, getSalesByPurchaseMethod, getCustomerPurchasesByEmail, getUnhappyCustomers,
    getTotalSalesByLocation
} = require("../controllers/sales");
const router = Router();

router.get('/totalSalesByLocation', getTotalSalesByLocation);
router.get('/purchasemethod', getSalesByPurchaseMethod);
router.get('/customerPurchases', getCustomerPurchasesByEmail);
router.get('/unhappyCustomers', getUnhappyCustomers);
router.get('/all', getAllSales);
router.get('/', getSaleById);


module.exports = router;