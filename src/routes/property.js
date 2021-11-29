// ====================================================
//      Routes API: Property
// ====================================================

const express = require('express');
const propertyController = require('../controllers/property');
const { authenticate, verifiedAdminRol } = require('../middlewares/auth');
const api = express.Router();

// =================================
// Todos los property types
// =================================
api.get('/', [authenticate, verifiedAdminRol], propertyController.getProperties);

// ====================================
// Todos los property types por estatus
// ====================================
api.get('/status/:status', propertyController.getPropertiesByStatus);

// ==============================
// Un property type por id
// ==============================
api.get('/:id', propertyController.getPropertyById);

// ===============================
// Crear nuevo property type
// ===============================
api.post('/', [authenticate, verifiedAdminRol], propertyController.saveProperty);

// ====================================
// Actualizar property type
// ====================================
api.put('/:id', [authenticate, verifiedAdminRol], propertyController.updateProperty);

// ====================================
// Actualizar status de property type
// ====================================
api.put('/:id/status', [authenticate, verifiedAdminRol], propertyController.updatePropertyStatus);

module.exports = api;
