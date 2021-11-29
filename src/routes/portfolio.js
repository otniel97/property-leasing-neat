// ====================================================
//      Routes API: Portfolio
// ====================================================

const express = require('express');
const portfolioController = require('../controllers/portfolio');
const { authenticate, verifiedAdminRol } = require('../middlewares/auth');
const api = express.Router();

// =================================
// Todas los portfolios
// =================================
api.get('/', [authenticate, verifiedAdminRol], portfolioController.getPortfolios);

// =================================
// Todas los portfolios por estatus
// =================================
api.get('/status/:status', portfolioController.getPortfoliosByStatus);

// ==============================
// Un portfolio por id
// ==============================
api.get('/:id', portfolioController.getPortfolioById);

// ===============================
// Crear nuev portfolio
// ===============================
api.post('/', [authenticate, verifiedAdminRol], portfolioController.savePortfolio);

// ====================================
// Actualizar portfolio
// ====================================
api.put('/:id', [authenticate, verifiedAdminRol], portfolioController.updatePortfolio);

// ====================================
// Actualizar status de portfolio
// ====================================
api.put('/:id/status', [authenticate, verifiedAdminRol], portfolioController.updatePortfolioStatus);

// ==============================
// profit de un portfolio
// ==============================
api.get('/:id/profit', [authenticate, verifiedAdminRol], portfolioController.profitByPortfolioId);

// ==============================
// idealprofit de un portfolio
// ==============================
api.get('/:id/idealProfit', [authenticate, verifiedAdminRol], portfolioController.idealProfitByPortfolioId);

// ==================================
// No payment percent de un portfolio
// ==================================
api.get('/:id/noPaymentPercent', [authenticate, verifiedAdminRol], portfolioController.noPaymentPercentByPortfolioId);

module.exports = api;
