// ====================================================
//      Controller Invoice
// ====================================================

const serviceInvoice = require('../services/invoice');

// ======================================
// Mostrar todos los invoices
// ======================================
async function getInvoices(req, res) {
  return serviceInvoice.getInvoices(req, res);
}

// ==================================================
// Mostrar todos los invoices por paid
// ==================================================
async function getInvoicesByPaid(req, res) {
  return serviceInvoice.getInvoicesByPaid(req, res);
}

// =================================
// Mostrar invoice por id
// =================================
async function getInvoiceById(req, res) {
  return serviceInvoice.getInvoiceById(req, res);
}

// ==============================
// Crear invoice
// ==============================
async function saveInvoice(req, res) {
  return serviceInvoice.saveInvoice(req, res);
}

// ================================
// Cambiar paid de invoice
// ================================
async function updateInvoicePaid(req, res) {
  return serviceInvoice.updateInvoicePaidById(req, res);
}

module.exports = {
  getInvoices,
  getInvoicesByPaid,
  getInvoiceById,
  saveInvoice,
  updateInvoicePaid,
};
