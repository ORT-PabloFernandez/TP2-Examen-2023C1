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



module.exports = router;