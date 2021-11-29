// ====================================================
//      Routes API: Auth
// ====================================================

const express = require('express');
const authController = require('../controllers/auth');
const api = express.Router();

// =================================
// Sign in de usuarios
// =================================
api.post('/signin', authController.signIn);

module.exports = api;
