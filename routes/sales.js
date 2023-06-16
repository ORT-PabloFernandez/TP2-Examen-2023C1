const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});


router.get('/purchase_method/:method', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    res.json(await controller.getByPurcheseMethod(req.params.method, pageSize, page));
});


router.get('/email/:email', async (req, res) => {
    res.json(await controller.getByCustomerEmail(req.params.email));
});


router.get('/customs_dissatisfied', async (req, res) => { 
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    res.json(await controller.getByCustomerDissatisfied(pageSize, page));
});

router.get('/customs/localization/:localization', async (req, res) => { 
    res.json(await controller.getByAmountByLocalization(req.params.localization));
});


 router.get('/:id', async (req, res) => {
     res.json(await controller.getById(req.params.id));
 });



module.exports = router;