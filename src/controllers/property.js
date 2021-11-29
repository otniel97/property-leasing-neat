// ====================================================
//      Controller Property
// ====================================================

const serviceProperty = require('../services/property');

// ======================================
// Mostrar todos los property types
// ======================================
async function getProperties(req, res) {
  return serviceProperty.getProperties(req, res);
}

// ==================================================
// Mostrar todos los property types  por estatus
// ==================================================
async function getPropertiesByStatus(req, res) {
  return serviceProperty.getPropertiesByStatus(req, res);
}

// =================================
// Mostrar property type por id
// =================================
async function getPropertyById(req, res) {
  return serviceProperty.getPropertyById(req, res);
}

// ==============================
// Crear property type
// ==============================
async function saveProperty(req, res) {
  return serviceProperty.saveProperty(req, res);
}

// ==============================
// Actualizar property type
// ==============================
async function updateProperty(req, res) {
  return serviceProperty.updatePropertyById(req, res);
}

// ================================
// Cambiar status de property type
// ================================
async function updatePropertyStatus(req, res) {
  return serviceProperty.updatePropertyStatusById(req, res);
}

module.exports = {
  getProperties,
  getPropertiesByStatus,
  getPropertyById,
  saveProperty,
  updateProperty,
  updatePropertyStatus,
};
