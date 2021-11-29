require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const db = require('../models');
const { invoiceContracts } = require('../jobs/invoice');
const { options } = require('../docs/swaggerDoc');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.routesPath = '../routes/index';
    this.corsOptions = {
      origin: [process.env.CLIENT_CORS_URL, process.env.BACKEND_URL_STAGINNG, 'http://localhost:3000', 'http://localhost:8080'],
      optionsSuccessStatus: 200,
    };

    // Database Connection
    this.databaseConnect();

    // Middlewares
    this.middlewares();

    // Body parser
    this.app.use(express.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());

    // Routes app
    this.routes();

  }

  middlewares() {
    // CORS
    this.app.use(cors(this.corsOptions));

    // public directory
    this.app.use(express.static('public'));

    // security
    this.app.disable('x-powered-by');
    this.app.set('x-powered-by', false);
    this.app.use(function(req, res, next) {
      res.removeHeader('x-powered-by');
      next();
    });
  }

  routes() {
    // All endpoints
    this.app.use('/api/v1', require(this.routesPath));
    // Swagger doc
    this.app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(options));
    // not found endpoints
    this.app.use((req, res, next) => {
      res.status(404).sendFile(path.join(__dirname, '../../public', '404.html'));
    });

  }

  listen() {
    this.server = this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto:', this.port);
    });
  }

  async databaseConnect() {
    db.sequelize.authenticate().then(() => {
      console.log('Conectado a base de datos');
    }).catch((err) => {
      console.log(err);
    });

  }

}

module.exports = Server;
