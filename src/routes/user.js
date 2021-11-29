// ====================================================
//      Routes API: User
// ====================================================

const express = require('express');
const userController = require('../controllers/user');
const api = express.Router();

// ==================================
// Crear nuevo usuario
// ==================================
api.post('/', userController.saveUser);

module.exports = api;
