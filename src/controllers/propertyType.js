// ====================================================
//      Controller Property Type
// ====================================================

const servicePropertyType = require('../services/propertyType');

// ======================================
// Mostrar todos los property types
// ======================================
async function getPropertyTypes(req, res) {
  return servicePropertyType.getPropertyTypes(req, res);
}

// ==================================================
// Mostrar todos los property types  por estatus
// ==================================================
async function getPropertyTypesByStatus(req, res) {
  return servicePropertyType.getPropertyTypesByStatus(req, res);
}

// =================================
// Mostrar property type por id
// =================================
async function getPropertyTypeById(req, res) {
  return servicePropertyType.getPropertyTypeById(req, res);
}

// ==============================
// Crear property type
// ==============================
async function savePropertyType(req, res) {
  return servicePropertyType.savePropertyType(req, res);
}

// ==============================
// Actualizar property type
// ==============================
async function updatePropertyType(req, res) {
  return servicePropertyType.updatePropertyTypeById(req, res);
}

// ================================
// Cambiar status de property type
// ================================
async function updatePropertyTypeStatus(req, res) {
  return servicePropertyType.updatePropertyTypeStatusById(req, res);
}

module.exports = {
  getPropertyTypes,
  getPropertyTypesByStatus,
  getPropertyTypeById,
  savePropertyType,
  updatePropertyType,
  updatePropertyTypeStatus,
};
