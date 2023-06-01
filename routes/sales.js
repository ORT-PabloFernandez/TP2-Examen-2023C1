const { Router } = require('express');
const {getAllSales, getSaleById} = require("../controllers/sales");
const router = Router();


router.get('/all', getAllSales);
router.get('/', getSaleById);

module.exports = router;