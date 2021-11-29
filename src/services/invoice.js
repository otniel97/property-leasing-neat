// ====================================================
//      INVOICE SERVICE
// ====================================================
const Invoice = require('../models').Invoice;
const models = require('../models');
const Sequelize = require('../models').Sequelize;
const { validateDate } = require('../utils/validations');
const { successMsg, errorMsg, exceptionMsg, notFoundMsg } = require('../utils/responses');

// ==============================================
// Mostrar todos los invoices
// ==============================================
async function getInvoices(req, res) {
  try {
    const invoices = await Invoice.findAll({
      include: [{
        model: models.Contract,
        required: false,
      }],
    });
    return successMsg(res, 200, 'correcto', invoices);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// ==============================================
// Mostrar todos los invoices por paid
// ==============================================
async function getInvoicesByPaid(req, res) {
  try {
    const { isPaid } = req.params;
    const invoices = await Invoice.findAll({
      where: { isPaid },
      include: [{
        model: models.Contract,
        required: false,
      }],
    });
    return successMsg(res, 200, 'correcto', invoices);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// =================================
// Mostrar invoice por id
// =================================
async function getInvoiceById(req, res) {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findOne({
      where: { id },
      include: [{
        model: models.Contract,
        required: false,
      }],
    });
    if (!invoice) {
      return notFoundMsg(res, 'Invoice');
    }
    return successMsg(res, 200, 'correcto', invoice);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// ==============================
// Crear invoice
// ==============================
async function saveInvoice(req, res) {
  try {
    const { invoiceDate, description, invoiceCost, invoiceIncome, contractId } = req.body;

    if (!invoiceDate || validateDate(invoiceDate) <= 0) {
      return exceptionMsg(res, 409, 'La fecha de facturación debe ser mayor o igual a la actual');
    }

    if (invoiceIncome < invoiceCost) {
      return exceptionMsg(res, 409, 'El ingreso no puede ser menor que el costo');
    }

    const contractExists = await models.Contract.findOne({ where: { id: contractId },
      include: [{
        model: Invoice,
        where: {
          [Sequelize.Op.or]: [
            Sequelize.where(Sequelize.fn('date_part', 'MONTH', Sequelize.col('invoiceDate')), new Date(invoiceDate).getMonth() + 1),
          ],
        },
        required: false,
      }],
    });
    if (!contractExists) {
      return notFoundMsg(res, 'Contract');
    }

    if (contractExists.Invoices.length > 0) {
      return exceptionMsg(res, 409, 'El contrato ya tiene una factura para el mes de facturación');
    }

    const invoice = await Invoice.create({ isPaid: true, invoiceDate, description, invoiceCost, invoiceIncome, contractId});

    return successMsg(res, 200, 'Invoice creado', invoice);
  } catch (error) {
    console.log(error);
    return errorMsg(res, 500, 'Lo sentimos!, hemos  cometido un error', error);
  }
}

// =====================================
// Cambiar paid de invoice
// =====================================
async function updateInvoicePaidById(req, res) {
  try {
    const { id } = req.params;
    const invoiceExists = await Invoice.findOne({ where: { id } });

    if (!invoiceExists) {
      return notFoundMsg(res, 'Invoice');
    }

    invoiceExists.set({ isPaid: true });
    await invoiceExists.save();

    return successMsg(res, 200, 'Actualización exitosa', invoiceExists);

  } catch (error) {
    return errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error);
  }
}

module.exports = {
  getInvoices,
  getInvoicesByPaid,
  getInvoiceById,
  saveInvoice,
  updateInvoicePaidById,
};
