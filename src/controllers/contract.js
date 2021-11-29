// ====================================================
//      Controller Contract
// ====================================================

const serviceContract = require('../services/contract');

// ======================================
// Mostrar todos los contracts
// ======================================
async function getContracts(req, res) {
  return serviceContract.getContracts(req, res);
}

// ==================================================
// Mostrar todos los contracts por estatus
// ==================================================
async function getContractsByStatus(req, res) {
  return serviceContract.getContractsByStatus(req, res);
}

// =================================
// Mostrar contract por id
// =================================
async function getContractById(req, res) {
  return serviceContract.getContractById(req, res);
}

// ==============================
// Crear contract
// ==============================
async function saveContract(req, res) {
  return serviceContract.saveContract(req, res);
}

// ================================
// Cambiar status de contract
// ================================
async function updateContractStatus(req, res) {
  return serviceContract.updateContractStatusById(req, res);
}

module.exports = {
  getContracts,
  getContractsByStatus,
  getContractById,
  saveContract,
  updateContractStatus,
};
