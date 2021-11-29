// ====================================================
//      SERVICE PROPERTY
// ====================================================
const models = require('../models');
const Property = require('../models').Property;
const PropertyType = require('../models').PropertyType;
const Portfolio = require('../models').Portfolio;
const { successMsg, errorMsg, notFoundMsg, exceptionMsg } = require('../utils/responses');

// ==============================================
// Mostrar todas las property
// ==============================================
async function getProperties(req, res) {
  try {
    const properties = await Property.findAll({
      include: [{
        model: models.Portfolio,
        required: false,
      },
      {
        model: models.PropertyType,
        required: false,
      }],
    });
    return successMsg(res, 200, 'correcto', properties);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// ==============================================
// Mostrar todas los property por estatus
// ==============================================
async function getPropertiesByStatus(req, res) {
  try {
    const { status } = req.params;
    const properties = await Property.findAll({
      where: { status },
      include: [{
        model: models.Portfolio,
        required: false,
      },
      {
        model: models.PropertyType,
        required: false,
      }],
    });
    return successMsg(res, 200, 'correcto', properties);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// =================================
// Mostrar property por id
// =================================
async function getPropertyById(req, res) {
  try {
    const { id } = req.params;
    const property = await Property.findOne({
      where: { id },
      include: [{
        model: models.Portfolio,
        required: false,
      },
      {
        model: models.PropertyType,
        required: false,
      }],
    });
    if (!property) {
      return notFoundMsg(res, 'Property');
    }
    return successMsg(res, 200, 'correcto', property);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// ==============================
// Crear property
// ==============================
async function saveProperty(req, res) {
  try {
    const { name, description, cost, income, portfolioId, propertyTypeId } = req.body;

    if (income < cost) {
      return exceptionMsg(res, 409, 'El ingreso no puede ser menor que el costo');
    }

    const portfolioExists = await Portfolio.findOne({ where: { id: portfolioId } });
    if (!portfolioExists) {
      return notFoundMsg(res, 'Portfolio');
    }
    const propertyTypeExists = await PropertyType.findOne({ where: { id: propertyTypeId } });
    if (!propertyTypeExists) {
      return notFoundMsg(res, 'Property Type');
    }
    const property = await Property.create({ name, description, cost, income, portfolioId, propertyTypeId});

    return successMsg(res, 200, 'Property creado', property);
  } catch (error) {
    return errorMsg(res, 500, 'Lo sentimos!, hemos  cometido un error', error);
  }
}

// ==============================
// Actualizar property
// ==============================
async function updatePropertyById(req, res) {
  try {
    const { id } = req.params;
    const { name, description, cost, income, portfolioId, propertyTypeId } = req.body;

    let property = await Property.findOne({ where: { id } });
    if (!property) {
      return notFoundMsg(res, 'Property');
    }

    if (portfolioId !== property.portfolioId) {
      const portfolioExists = await Portfolio.findOne({ where: { id: portfolioId } });
      if (!portfolioExists) {
        return notFoundMsg(res, 'Portfolio');
      }
    }

    if (propertyTypeId !== property.propertyTypeId) {
      const propertyTypeExists = await PropertyType.findOne({ where: { id: propertyTypeId } });
      if (!propertyTypeExists) {
        return notFoundMsg(res, 'Property Type');
      }
    }

    property.set({name, description, cost, income, portfolioId, propertyTypeId });
    await property.save();

    property = property = await Property.findOne({
      where: { id },
      include: [{
        model: models.Portfolio,
        required: false,
      },
      {
        model: models.PropertyType,
        required: false,
      }],
    });

    return successMsg(res, 200, 'Actualización exitosa', property);
  } catch (error) {
    return errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error);
  }
}

// =====================================
// Activar desactivar property
// =====================================
async function updatePropertyStatusById(req, res) {
  try {
    const { id } = req.params;
    const property = await Property.findOne({ where: { id } });

    if (!property) {
      return notFoundMsg(res, 'Property');
    }

    property.set({ status: !property.status });
    await property.save();

    return successMsg(res, 200, 'Actualización exitosa', property);

  } catch (error) {
    return errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error);
  }
}

module.exports = {
  getProperties,
  getPropertiesByStatus,
  getPropertyById,
  saveProperty,
  updatePropertyById,
  updatePropertyStatusById,
};
