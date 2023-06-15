const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getById(id){    
    return sales.getById(id);
}

module.exports = {getSales,getById};