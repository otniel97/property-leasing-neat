// ====================================================
//      Routes API: Contract
// ====================================================

const express = require('express');
const contractController = require('../controllers/contract');
const { authenticate, verifiedAdminRol } = require('../middlewares/auth');
const api = express.Router();

// =================================
// Todos los contracts
// =================================
api.get('/', [authenticate, verifiedAdminRol], contractController.getContracts);

// ====================================
// Todos los contracts por estatus
// ====================================
api.get('/status/:status', contractController.getContractsByStatus);

// ==============================
// Un contract por id
// ==============================
api.get('/:id', contractController.getContractById);

// ===============================
// Crear nuevo contract
// ===============================
api.post('/', authenticate, contractController.saveContract);

// ====================================
// Actualizar status de contract
// ====================================
api.put('/:id/status', authenticate, contractController.updateContractStatus);

module.exports = api;
