const conn = require("./conn");
const DATABASE = "sample_supplies";
const SALES = "sales";
const { ObjectId } = require("mongodb");

async function getAllSales() {
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find()
    .toArray();
  return supplies;
}

async function getSaleId(id) {
  const connectiondb = await conn.getConnection();
  const sale = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .findOne({ _id: new ObjectId(id) });
  return sale;
}

async function getCustomersUnhappy() {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ satisfaction: { $lt: 3 } })
    .project({ customer: 1 });
  return customers;
}

async function getSalesMethod(method) {
  const connectiondb = await conn.getConnection();
  const sales = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ purchaseMethod: method })
    .toArray();
  return sales;
}

async function getPurchaseEmail(mail) {
  const connectiondb = await conn.getConnection();
  console.log(mail);
  const purchase = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .findOne({ email: mail });
  return purchase;
}

module.exports = {
  getAllSales,
  getSaleId,
  getSalesMethod,
  getPurchaseEmail,
  getCustomersUnhappy,
};
