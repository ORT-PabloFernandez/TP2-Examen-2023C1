const {getConnection} = require("./config");
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


module.exports = {
    getAllSalesDatabase,
}