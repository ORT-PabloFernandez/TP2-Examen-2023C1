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

async function getSalesId(id){
    const connecctiondb = await conn.getConnection();
    const sale = await connecctiondb.db(DATABASE).collection(SALES).findOne({ _id: new ObjectId(id)});
    return sale;
}

async function getSalesForPurchaseMethod(purchaseMethod){
    const connecctiondb = await conn.getConnection();
    const salesPurchase = await connecctiondb.db(DATABASE).collection(SALES).find({purchaseMethod: {$gt: 0}}).toArray();
}

async function getCustomerSales(email){
    const connecctiondb = await conn.getConnection();
    const salesCustomer = await connecctiondb.db(DATABASE).collection(SALES)
    .find({email:{$gt:0}}).toArray();
}

async function getSatisfactionMenor(){
    const connecctiondb = await conn.getConnection();
    const salesCustomer = await connecctiondb.db(DATABASE).collection(SALES)
    .find(satisfaction=3).toArray();
}

module.exports = {getAllSales,getSalesId,getSalesForPurchaseMethod,getCustomerSales,getSatisfactionMenor};