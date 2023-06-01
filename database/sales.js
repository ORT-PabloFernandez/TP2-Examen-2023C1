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

const getSalesByPurchaseMethodDatabase = async (purchaseMethod) => {
    const connectiondb = await getConnection();
    const sales = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ purchaseMethod: purchaseMethod })
        .toArray()

    return sales;
}

const getCustomerPurchasesByEmailDatabase = async (email) => {
    const allSales = await getAllSalesDatabase();
    const customersByMail = [];
    for (let i = 0; i < allSales.length; i++) {
        const sale = allSales[i];
        const customer = sale.customer;
        if (customer.email === email) {
            customer.items = sale.items;
            customersByMail.push(customer);
        }
    }

    return customersByMail;
}


const getUnhappyCustomersDatabase = async() => {
    const allSales = await getAllSalesDatabase();
    const connectiondb = await getConnection();


    const unhappyCustomers = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ "customer.satisfaction": { $lt: 3 } })
        .toArray();

    return unhappyCustomers;
}


module.exports = {
    getAllSalesDatabase,
    getSaleByIdDatabase,
    getSalesByPurchaseMethodDatabase,
    getCustomerPurchasesByEmailDatabase,
    getUnhappyCustomersDatabase,
}