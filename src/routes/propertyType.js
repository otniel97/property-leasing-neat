// ====================================================
//      Routes API: Property Type
// ====================================================

const express = require('express');
const propertyTypeController = require('../controllers/propertyType');
const { authenticate, verifiedAdminRol } = require('../middlewares/auth');
const api = express.Router();

// =================================
// Todos los property types
// =================================
api.get('/', [authenticate, verifiedAdminRol], propertyTypeController.getPropertyTypes);

// ====================================
// Todos los property types por estatus
// ====================================
api.get('/status/:status', propertyTypeController.getPropertyTypesByStatus);

// ==============================
// Un property type por id
// ==============================
api.get('/:id', propertyTypeController.getPropertyTypeById);

// ===============================
// Crear nuevo property type
// ===============================
api.post('/', [authenticate, verifiedAdminRol], propertyTypeController.savePropertyType);

// ====================================
// Actualizar property type
// ====================================
api.put('/:id', [authenticate, verifiedAdminRol], propertyTypeController.updatePropertyType);

// ====================================
// Actualizar status de property type
// ====================================
api.put('/:id/status', [authenticate, verifiedAdminRol], propertyTypeController.updatePropertyTypeStatus);

module.exports = api;
