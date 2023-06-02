const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    res.json(await controller.getSale(id));
});

router.get('/metodoCompra/:purchaseMethod', async (req,res) =>{
    const purchaseMethod = req.params.purchaseMethod;
    res.json(await controller.getFilteredSales(purchaseMethod));
})

router.get('/cliente/porEmail/email:', async (req,res)=>{
    const email = req.params.email;
    res.json(await controller.getSalesCustomer(email));
})

router.get('/clientes/insatisfechos', async (req, res) => {
    res.json(await controller.getSadCustomers());
});

module.exports = router;