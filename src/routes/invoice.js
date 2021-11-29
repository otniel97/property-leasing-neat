// ====================================================
//      Routes API: Invoice
// ====================================================

const express = require('express');
const invoiceController = require('../controllers/invoice');
const { authenticate, verifiedAdminRol } = require('../middlewares/auth');
const api = express.Router();

// =================================
// Todos los invoices
// =================================
api.get('/', [authenticate, verifiedAdminRol], invoiceController.getInvoices);

// ====================================
// Todos los invoices por paid
// ====================================
api.get('/paid/:isPaid', invoiceController.getInvoicesByPaid);

// ==============================
// Un invoice por id
// ==============================
api.get('/:id', invoiceController.getInvoiceById);

// ===============================
// Crear nuevo invoice
// ===============================
api.post('/', authenticate, invoiceController.saveInvoice);

// ====================================
// Actualizar pago de invoice
// ====================================
api.put('/:id/paid', authenticate, invoiceController.updateInvoicePaid);

module.exports = api;
