const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSalesId(id){
    return sales.getSalesId(id);
}

async function getSalesForPurchaseMethod(){
    return sales.getSalesForPurchaseMethod();
}

async function getCustomerSales(email){
    return sales.getCustomerSales();
}

async function getSatisfactionMenor(){
    return sales.getSatisfactionMenor();
}
module.exports = {getSales, getSalesId,getCustomerSales,getSatisfactionMenor};