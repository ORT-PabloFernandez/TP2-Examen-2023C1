const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req, res) => {
    res.json(await controller.getOneSale(req.params.id));
});

router.get('/metodo/:metodo', async (req, res) => {
    res.json(await controller.getSalesByMetodo(req.params.metodo));
});

router.get('/email/:email', async (req, res) => {
    res.json(await controller.getSalesByEmail(req.params.email));
});

router.get('/clientes/insatisfechos', async (req, res) => {
    res.json(await controller.getSalesInsatisfechas());
});

router.get('/totalporlocalizacion/:localizacion', async (req, res) => {
    res.json(await controller.getTotal(req.params.localizacion));
});

module.exports = router;