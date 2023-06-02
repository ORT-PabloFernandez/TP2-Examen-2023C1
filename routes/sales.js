const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');
const salesdb = require('../data/supplies');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

module.exports = router;

router.get('/:id', async (req, res) => {

    const sale = await controller.getSaleById(req.params.id);

    res.json(sale);

})

router.get('/purchasemethod/:purchaseMethod', async (req,res) => {

    const supplies = await controller.getSalesByPurchase(req.params.purchaseMethod);

    res.json(supplies);
})

router.get('/costumer/email/:email', async (req,res) => {
    
    const supplies = await controller.getSuppliesByEmail(req.params.email);

    res.json(supplies);
})

router.get('/customer/bysatisfaction', async (req,res) => {
    const supplies = await controller.getCustomerBySatisfaction();
    res.json(supplies);
})

router.get('/storelocation/:storeLocation', async (req,res) => {
    const supplies = await controller.getSalesByStoreLocation(req.params.storeLocation);

    res.json(supplies);
})
