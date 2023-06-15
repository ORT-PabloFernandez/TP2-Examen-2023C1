const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});


router.get('/:id', async (req, res) => {
    res.json(await controller.getById(req.params.id));
});

router.get('/purchaseMethod/:method', async (req, res) => {
    res.json(await controller.getByPurcheseMethod(req.params.method));
});

router.get('/email/:email', async (req, res) => {
    res.json(await controller.getByCustomerEmail(req.params.email));
});


module.exports = router;