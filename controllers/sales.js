const { response, request } = require('express');
const {getAllSalesDatabase, getSaleByIdDatabase} = require("../database/sales");

const getAllSales = async(req = request, res = response) => {
    return res.json( await getAllSalesDatabase());
}

const getSaleById = async (req = request, res = response) => {
    const {id} = req.query;
    return res.json(await getSaleByIdDatabase(id));
}

module.exports = {
    getAllSales,
    getSaleById,
}