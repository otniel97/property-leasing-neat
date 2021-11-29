// ====================================================
//      Rutas API
// ====================================================

const express = require('express');
const app = express();

// archivo de rutas de modelo user
app.use('/user', require('./user'));

// archivo de rutas de authentication
app.use('/auth', require('./auth'));

// archivo de rutas de modelo portfolio
app.use('/portfolio', require('./portfolio'));

// archivo de rutas de modelo contractType
app.use('/propertyType', require('./propertyType'));

// archivo de rutas de modelo property
app.use('/property', require('./property'));

// archivo de rutas de modelo contract
app.use('/contract', require('./contract'));

// archivo de rutas de modelo invoice
app.use('/invoice', require('./invoice'));

module.exports = app;
