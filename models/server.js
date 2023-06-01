const express = require('express');
const cors = require('cors');
const {getConnection} = require("../database/config");

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || 3000;
        this.salesPath = '/api/sales';
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Database
        this.connectDB();

        // Rutas de mi aplicación
        this.routes();
    }

    async connectDB() {
        await getConnection();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use(this.salesPath, require('../routes/sales.js'));
        this.app.use( this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
