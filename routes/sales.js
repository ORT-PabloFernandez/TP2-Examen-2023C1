const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

module.exports = router;

router.get("/:id", async (req, res) =>{
    const id = req.params.id;
    res.json(sales.controller.getSalesId(id));
});

router.get("/:purchaseMethod", async (req, res) =>{
    const id = req.params.id;
    res.json(sales.controller.getSalesForPurchaseMethod(req.params.purchaseMethod));
});

router.get("/:customerSales", async (req, res) =>{
    const id = req.params.id;
    res.json(sales.controller.getCustomerSales(req.params.email));
});

router.get("/:salesSatisfaction", async (req, res) =>{
    const id = req.params.id;
    res.json(sales.controller.getCustomerSales(req.params.satisfaction));
});