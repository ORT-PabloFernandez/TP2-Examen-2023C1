const {getConnection} = require("./config");
const {ObjectId} = require("mongodb");
const DATABASE = 'sample_supplies';
const SALES = 'sales';


const getAllSalesDatabase = async () => {
    const connectiondb = await getConnection();
    const sales = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find()
        .toArray();

    return sales;
}

const getSaleByIdDatabase = async (id) => {
    const connectiondb = await getConnection();
    const sale = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .findOne({ _id: new ObjectId(id)});
    return sale;
}

module.exports = {
    getAllSalesDatabase,
    getSaleByIdDatabase,
}