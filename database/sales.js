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
    const connectiondb = await getConnection();
    const customersByMail = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ "customer.email": email })
        .project({ items: 1, customer: 1, })
        .toArray();

    return customersByMail;
}


const getUnhappyCustomersDatabase = async() => {
    const connectiondb = await getConnection();

    const unhappyCustomers = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ "customer.satisfaction": { $lt: 3 } })
        .toArray();

    return unhappyCustomers;
}

const getTotalSalesByLocationDatabase = async (location) => {
    const connectiondb = await getConnection();
    let total = 0;

    const salesByLocation = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({storeLocation: location})
        .toArray();


    for (let i = 0; i < salesByLocation.length; i++) {
        const sale = salesByLocation[i];
        const items = sale.items;

        for (let j = 0; j < items.length; j++) {
            const item = items[j];
            const priceObject = item.price;
            const priceValue = priceObject.toString();
            const quantity = item.quantity;
            total += priceValue * quantity;
        }

    }

    console.log(total);

    return {
        location: location,
        total: total,
    };


}


module.exports = {
    getAllSalesDatabase,
    getSaleByIdDatabase,
    getSalesByPurchaseMethodDatabase,
    getCustomerPurchasesByEmailDatabase,
    getUnhappyCustomersDatabase,
    getTotalSalesByLocationDatabase
}