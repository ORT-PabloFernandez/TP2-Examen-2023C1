const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getById(id){    
    return sales.getById(id);
}

async function getByPurcheseMethod(method){    
    return sales.getByPurcheseMethod(method);
}

async function getByCustomerEmail(email){    
    return sales.getByCustomerEmail(email);
}
module.exports = {getSales, getById, getByPurcheseMethod, getByCustomerEmail};