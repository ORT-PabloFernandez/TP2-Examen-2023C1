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

async function getById(id){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({_id: new ObjectId(id)}) 
                        .toArray();  
    return supplies;
}

async function getByPurcheseMethod(method, pageSize, page){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({purchaseMethod : method}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return supplies;
}


async function getByCustomerEmail(email){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.email" : email})
                        .toArray();    
    return supplies;
}


async function getByCustomerDissatisfied(pageSize, page){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.satisfaction" : {$lte: 2 }}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return supplies;
}


async function getByLocalization(localization){
    const connectiondb = await conn.getConnection();
    const suppliesByLocalization = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"storeLocation" : localization})
                        .toArray();    
    return suppliesByLocalization;
}

module.exports = {getAllSales, getById, getByPurcheseMethod, getByCustomerEmail, getByCustomerDissatisfied,getByLocalization};