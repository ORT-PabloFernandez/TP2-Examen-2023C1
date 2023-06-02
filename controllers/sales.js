const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getOneSale(id){    
    return sales.getOneSale(id);
}

async function getSalesByMetodo(metodo){    
    return sales.getSalesByMetodo(metodo);
}

async function getSalesByEmail(email){    
    return sales.getSalesByEmail(email);
}

async function getSalesInsatisfechas(){    
    return sales.getSalesInsatisfechas();
}

async function getTotalPorLocalizacion(localizacion){    
    return sales.getTotalPorLocalizacion(localizacion);
}



module.exports = {getSales, getOneSale, getSalesByEmail, getSalesInsatisfechas, getSalesByMetodo, getTotalPorLocalizacion};