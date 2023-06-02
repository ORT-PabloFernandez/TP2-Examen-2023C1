const { ObjectId } = require('mongodb');
const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';


async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

async function getSaleById(id){
    const connectiondb = await conn.getConnection();
    const sale = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({_id: new ObjectId(id)});
    
    return sale;
}

async function getSalesByPurchase(purchaseMethod){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({'purchaseMethod':purchaseMethod})
                        .toArray();
    
    return supplies;
}

async function getSuppliesByEmail(email){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({'customer.email' : email})
                        .toArray();

    return supplies;
}

async function getCustomerBySatisfaction(){

    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({'customer.satisfaction' : {$lt:3}})
                        .toArray();

    return supplies;

}

async function getSalesByStoreLocation(storeLocation){

    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({'storeLocation' : storeLocation})
                        .toArray();

    return supplies;

}
module.exports = {getAllSales, getSaleById,getSalesByPurchase,getSuppliesByEmail,getSalesByStoreLocation, getCustomerBySatisfaction};