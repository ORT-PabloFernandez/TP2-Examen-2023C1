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
/*1. Necesitamos un endpoint que nos devuelva una venta particular por _id*/
async function getSaleById(id) {
  const connectiondb = await conn.getConnection();
  const sale = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .findOne({ _id: new ObjectId(id) });
  return sale;
}

/*2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo
 de compra (purchaseMethod), que pueden ser: Phone, Online, In store...  */
async function getSalesByPurchaseMethod(pMethod) {
  const connectiondb = await conn.getConnection();
  const salesByPM = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ purchaseMethod: pMethod })
    .toArray();
  return salesByPM;
}

/*3. Necesitamos un endpoint que nos devuelva las compras de un cliente
 **customner** por email */
async function getSalesByCustomerEmail(email) {
  const connectiondb = await conn.getConnection();
  const salesByEmail = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ "customer.email": email })
    .toArray();
  return salesByEmail;
}

/*4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)*/
async function getListOfCustomersSatisfaction(satisfactionLevel) {
  const connectiondb = await conn.getConnection();
  const listOfCustomers = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ "customer.satisfaction": { $lte: satisfactionLevel } })
    .toArray();
  return listOfCustomers;
}

/*5. Generar un endpoint para obtener el importe total de la venta por **localizacion** */
async function getTotalAmountByStoreLocation(location) {
  const connectiondb = await conn.getConnection();
  const listOfSalesbyStoreLocation = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ storeLocation: location })
    .toArray();
  return listOfSalesbyStoreLocation;
}

module.exports = {
  getAllSales,
  getSaleById,
  getSalesByPurchaseMethod,
  getSalesByCustomerEmail,
  getListOfCustomersSatisfaction,
  getTotalAmountByStoreLocation,
};
