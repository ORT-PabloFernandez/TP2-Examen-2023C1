const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSale(Id){
    return sales.getSale(Id);
}

async function getFilteredSales(purchaseMethod){
    return sales.getFilteredSales(purchaseMethod);
}

async function getSalesCustomer(email){
    return sales.getFilteredSales(email);
}

async function getSadCustomers(){
    return sales.getSadCustomers();
}

module.exports = {getSales, getSale, getFilteredSales, getSalesCustomer, getSadCustomers};