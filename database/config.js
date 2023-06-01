require('dotenv').config();
const mongoclient = require('mongodb').MongoClient;
const uri = process.env.MONGODB;
const client = new mongoclient(uri);

let instance = null;

async function getConnection(){
    if(instance == null){
        instance = await client.connect();
        console.log('Conexion exitosa');
    }
    return instance;
}

module.exports = {getConnection};