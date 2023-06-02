const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const { ObjectId } = require('mongodb');



async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

async function getOneSale(id){
    const connectiondb = await conn.getConnection();
    const supplie = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne ({_id: new ObjectId (id)});
                           
    return supplie;
}

async function getSalesByMetodo (metodo){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find ({purchaseMethod: metodo})
                        .project({ _id: 1, saleDate: 1, storeLocation:1, purchaseMethod:1 }) //saco los items para q sea más clara la respuesta
                        .toArray();
                           
    return supplies;
}

async function getSalesByEmail (email){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find ({"customer.email": email})
                        .project({ _id: 1, saleDate: 1, storeLocation:1, purchaseMethod:1, customer:1 }) //saco los items para q sea más clara la respuesta
                        .toArray();
                           
    return supplies;
}

async function getSalesInsatisfechas (){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find ({"customer.satisfaction": { $lt: 3 } })
                        .project({ _id: 1, saleDate: 1, storeLocation:1, purchaseMethod:1, customer:1 }) //saco los items para q sea más clara la respuesta
                        .toArray();
                           
    return supplies;
}

async function getTotalPorLocalizacion (localizacion){
    const connectiondb = await conn.getConnection();
    const total = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find ({storeLocation: localizacion})
                        // .aggregate ([
                        //         {$project: { sumas: {
                        //           $map: {
                        //             input: "$items",
                        //             in: {
                        //                 $reduce: {
                        //                     input: { $multiply: [ "$$this.items.price.$numberDecimal", "$$this.items.quantity" ] },
                        //                     initialValue: 0,
                        //                     in: { $add: ["$$value", "$$this"] }
                        //               }}}}
                        //       }
                        //     },
                        //     {
                        //         $project: {
                        //             total: { $sum: "$sumas" }
                        //           }
                        //     }
                        //   ])
                          .toArray();
                        
                           
    return total;
}

module.exports = {getAllSales, getOneSale, getSalesByMetodo, getSalesByEmail, getSalesInsatisfechas, getTotalPorLocalizacion};