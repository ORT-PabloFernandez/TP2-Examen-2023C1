const { response, request } = require('express');
const {getAllSalesDatabase, getSaleByIdDatabase, getSalesByPurchaseMethodDatabase, getCustomerPurchasesByEmailDatabase,
    getUnhappyCustomersDatabase, getTotalSalesByLocationDatabase
} = require("../database/sales");

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

const getCustomerPurchasesByEmail = async (req = request, res = response) => {
    const {email} = req.query;
    return res.json(await getCustomerPurchasesByEmailDatabase(email));
}

const getUnhappyCustomers = async(req = request, res = response) => {
    return res.json(await getUnhappyCustomersDatabase() );
}

const getTotalSalesByLocation = async(req = request, res = response) => {
    const {storeLocation} = req.query;
    return res.json(await getTotalSalesByLocationDatabase(storeLocation));
}

module.exports = {
    getAllSales,
    getSaleById,
    getSalesByPurchaseMethod,
    getCustomerPurchasesByEmail,
    getUnhappyCustomers,
    getTotalSalesByLocation
}