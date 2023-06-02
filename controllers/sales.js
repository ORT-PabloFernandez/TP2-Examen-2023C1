const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSaleById(id){
    return sales.getSaleById(id);
}

async function getSuppliesByEmail(email){
    return sales.getSuppliesByEmail(email);
}

async function getSalesByPurchase(purchaseMethod){
    return sales.getSalesByPurchase(purchaseMethod);
}

async function getCustomerBySatisfaction(){
    return sales.getCustomerBySatisfaction();
}

async function getSalesByStoreLocation(storelocation){
    const supplies = sales.getSalesByStoreLocation(storelocation);

    let total = 0;
    for (let index = 0; index < supplies.length; index++) {
        const sale = supplies[index];

        for (const key in sale) {
            if (key === 'items'){
                const items = key;
                for (const propiedad in items) {
                    if (propiedad === 'price') {
                        
                        total = propiedad.$numberDecimal += total;
                        
                    }
                }
            }        
    }
    console.log(total);
    return total;
    
    }}


module.exports = {getSales,getSaleById,getSalesByStoreLocation, getSuppliesByEmail,getSalesByPurchase,getCustomerBySatisfaction};