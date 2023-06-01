const { response, request } = require('express');
const {getAllSalesDatabase} = require("../database/sales");

const getAllSales = async(req = request, res = response) => {
    return res.json( await getAllSalesDatabase());
}


module.exports = {
    getAllSales,
}