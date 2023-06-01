const { response, request } = require('express');
const {getAllSalesDatabase, getSaleByIdDatabase, getSalesByPurchaseMethodDatabase} = require("../database/sales");

const getAllSales = async(req = request, res = response) => {
    return res.json( await getAllSalesDatabase());
}

const getSaleById = async (req = request, res = response) => {
    const {id} = req.query;
    return res.json(await getSaleByIdDatabase(id));
}

const getSalesByPurchaseMethod = async (req = request, res = response) => {
    const {purchaseMethod} = req.query;
    return res.json(await getSalesByPurchaseMethodDatabase(purchaseMethod) );
}

module.exports = {
    getAllSales,
    getSaleById,
    getSalesByPurchaseMethod
}