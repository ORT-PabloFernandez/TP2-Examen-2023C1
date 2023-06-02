const { ObjectId } = require("mongodb");
const conn = require("./conn");
const DATABASE = "sample_supplies";
const SALES = "sales";

async function getAllSales() {
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find()
    .toArray();
  return supplies;
}

async function getSaleById(id) {
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .findOne({ _id: new ObjectId(id) });

  return supplies;
}

async function getSalesByPurchaseMethod(purchaseMethod) {
  const connectiondb = await conn.getConnection();
  const sales = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ purchaseMethod: purchaseMethod })
    .toArray();
  return sales;
}

async function getSalesByCustomerEmail(email) {
  const connectiondb = await conn.getConnection();
  const sales = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ "customer.email": email })
    .toArray();
  return sales;
}

async function getSalesByUnstisfiedCustomers() {
  const connectiondb = await conn.getConnection();
  const sales = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ "customer.satisfaction": { $lt: 3 } })
    .project({ "customer.email": 1, "customer.satisfaction": 1 })
    .toArray();
  return sales;
}

async function getTotalSalesByStoreLocation(storeLocation) {
  const connectiondb = await conn.getConnection();
  const sales = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ storeLocation: storeLocation })
    .project({ items: 1 })
    .toArray();

  let total = 0;

  sales.forEach((sale) => {
    sale.items.forEach((item) => {
      let price = parseFloat(item.price.toString());
      let quantity = item.quantity;
      total += price * quantity;
    });
  });

  return total;
}

module.exports = {
  getAllSales,
  getSaleById,
  getSalesByPurchaseMethod,
  getSalesByCustomerEmail,
  getSalesByUnstisfiedCustomers,
  getTotalSalesByStoreLocation,
};
