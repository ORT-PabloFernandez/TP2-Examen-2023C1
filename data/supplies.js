const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const { ObjectID } = require('bson');


async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

async function getSale(id){
    const connectiondb = await conn.getConnection();
    const ventas = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({_id: new ObjectID(id)})
                        .toArray();
    return ventas;
}

async function getFilteredSales(purchaseMethod) {
    const connectiondb = await conn.getConnection();
    const ventas =  await connectiondb.db(DATABASE)
                                    .collection(SALES)
                                    .find({})
                                    .toArray();

    const ventasFiltradas = ventas.filter(venta => venta.purchaseMethod == purchaseMethod);
    return ventasFiltradas;
  }

  async function getSalesCustomer(email){
    const connectiondb = await conn.getConnection();
    const ventas = await connectiondb.db(DATABASE)
                                    .collection(SALES)
                                    .find({})
                                    .toArray();

    //el metodo no devuelve data
    const ventasFiltrado = ventas.filter(venta => venta.customer.email == email)
            
    return ventasFiltrado;
    
  }

  async function getSadCustomers(){
    const connectiondb = await conn.getConnection();
    const ventas = await connectiondb.db(DATABASE)
                                    .collection(SALES)
                                    .find({})
                                    .toArray();

    const customers = ventas.filter(ventas => ventas.customer.satisfaction < 3);

    return customers
  }

module.exports = {getAllSales, getSale, getFilteredSales, getSalesCustomer, getSadCustomers};