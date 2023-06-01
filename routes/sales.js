const { Router } = require('express');
const {getAllSales} = require("../controllers/sales");
const router = Router();


router.get('/all', getAllSales);

module.exports = router;