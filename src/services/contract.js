// ====================================================
//      CONTRACT SERVICE
// ====================================================
const Contract = require('../models').Contract;
const Property = require('../models').Property;
const models = require('../models');
const { validateDate } = require('../utils/validations');
const { successMsg, errorMsg, exceptionMsg, notFoundMsg } = require('../utils/responses');

// ==============================================
// Mostrar todos los contracts
// ==============================================
async function getContracts(req, res) {
  try {
    const contracts = await Contract.findAll({
      include: [{
        model: models.Property,
        required: false,
      },
      {
        model: models.User,
        required: false,
      }],
    });
    return successMsg(res, 200, 'correcto', contracts);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// ==============================================
// Mostrar todos los contracts por estatus
// ==============================================
async function getContractsByStatus(req, res) {
  try {
    const { status } = req.params;
    const contracts = await Contract.findAll({
      where: { status },
      include: [{
        model: models.Property,
        required: false,
      },
      {
        model: models.User,
        required: false,
      },
      {
        model: models.Invoice,
        required: false,
      }],
    });
    return successMsg(res, 200, 'correcto', contracts);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// =================================
// Mostrar contract por id
// =================================
async function getContractById(req, res) {
  try {
    const { id } = req.params;
    const contract = await Contract.findOne({
      where: { id },
      include: [{
        model: models.Property,
        required: false,
      },
      {
        model: models.User,
        required: false,
      },
      {
        model: models.Invoice,
        required: false,
      }],
    });
    if (!contract) {
      return notFoundMsg(res, 'Contract');
    }
    return successMsg(res, 200, 'correcto', contract);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// ==============================
// Crear contract
// ==============================
async function saveContract(req, res) {
  try {
    const { date, description, propertyId } = req.body;

    if (!date || validateDate(date) <= 0) {
      return exceptionMsg(res, 409, 'La fecha de contrato debe ser mayor o igual a la actual');
    }

    const propertyExists = await Property.findOne({ where: { id: propertyId } });
    if (!propertyExists) {
      return notFoundMsg(res, 'Property');
    }

    const contract = await Contract.create({ date, description, propertyId, userId: req.user.id});

    return successMsg(res, 200, 'Contract creado', contract);
  } catch (error) {
    return errorMsg(res, 500, 'Lo sentimos!, hemos  cometido un error', error);
  }
}

// =====================================
// Activar desactivar contract
// =====================================
async function updateContractStatusById(req, res) {
  try {
    const { id } = req.params;
    const contractExists = await Contract.findOne({ where: { id } });

    if (!contractExists) {
      return notFoundMsg(res, 'Contract');
    }

    contractExists.set({ status: !contractExists.status });
    await contractExists.save();

    return successMsg(res, 200, 'Actualización exitosa', contractExists);

  } catch (error) {
    return errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error);
  }
}

module.exports = {
  getContracts,
  getContractsByStatus,
  getContractById,
  saveContract,
  updateContractStatusById,
};
