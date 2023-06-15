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

async function getByPurcheseMethod(method){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({purchaseMethod : method})
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


module.exports = {getAllSales, getById, getByPurcheseMethod, getByCustomerEmail};