// ====================================================
//      SERVICE PROPERTY TYPE
// ====================================================
const models = require('../models');
const PropertyType = require('../models').PropertyType;
const { successMsg, errorMsg, exceptionMsg, notFoundMsg } = require('../utils/responses');

// ==============================================
// Mostrar todos los property types
// ==============================================
async function getPropertyTypes(req, res) {
  try {
    const propertyTypes = await PropertyType.findAll({
      include: [{
        model: models.Property,
        required: false,
      }] });
    return successMsg(res, 200, 'correcto', propertyTypes);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// ==============================================
// Mostrar todas los property types por estatus
// ==============================================
async function getPropertyTypesByStatus(req, res) {
  try {
    const { status } = req.params;
    const propertyTypes = await PropertyType.findAll({
      where: { status },
      include: [{
        model: models.Property,
        required: false,
      }],
    });
    return successMsg(res, 200, 'correcto', propertyTypes);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// =================================
// Mostrar property type por id
// =================================
async function getPropertyTypeById(req, res) {
  try {
    const { id } = req.params;
    const propertyType = await PropertyType.findOne({
      where: { id },
      include: [{
        model: models.Property,
        required: false,
      }],
    });
    if (!propertyType) {
      return notFoundMsg(res, 'PropertyType');
    }
    return successMsg(res, 200, 'correcto', propertyType);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// ==============================
// Crear property type
// ==============================
async function savePropertyType(req, res) {
  try {
    const { name, description } = req.body;

    const propertyTypeExists = await PropertyType.findOne({ where: { name } });
    if (propertyTypeExists) {
      return exceptionMsg(res, 400, 'Ya existe un propertyType con el mismo nombre');
    }
    const propertyType = await PropertyType.create({ name, description});

    return successMsg(res, 200, 'PropertyType creado', propertyType);
  } catch (error) {
    return errorMsg(res, 500, 'Lo sentimos!, hemos  cometido un error', error);
  }
}

// ==============================
// Actualizar property type
// ==============================
async function updatePropertyTypeById(req, res) {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const propertyType = await PropertyType.findOne({ where: { id } });
    if (!propertyType) {
      return notFoundMsg(res, 'PropertyType');
    }
    propertyType.set({name, description });
    await propertyType.save();

    return successMsg(res, 200, 'Actualización exitosa', propertyType);
  } catch (error) {
    return errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error);
  }
}

// =====================================
// Activar desactivar property type
// =====================================
async function updatePropertyTypeStatusById(req, res) {
  try {
    const { id } = req.params;
    const propertyType = await PropertyType.findOne({ where: { id } });

    if (!propertyType) {
      return notFoundMsg(res, 'PropertyType');
    }

    propertyType.set({ status: !propertyType.status });
    await propertyType.save();

    return successMsg(res, 200, 'Actualización exitosa', propertyType);

  } catch (error) {
    return errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error);
  }
}

module.exports = {
  getPropertyTypes,
  getPropertyTypesByStatus,
  getPropertyTypeById,
  savePropertyType,
  updatePropertyTypeById,
  updatePropertyTypeStatusById,
};
