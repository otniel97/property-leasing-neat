// ====================================================
//      Controller Portfolio
// ====================================================

const servicePortfolio = require('../services/portfolio');

// ======================================
// Mostrar todas los portfolios
// ======================================
async function getPortfolios(req, res) {
  return servicePortfolio.getPortfolios(req, res);
}

// ==========================================
// Mostrar todas los portfolios por estatus
// ==========================================
async function getPortfoliosByStatus(req, res) {
  return servicePortfolio.getPortfoliosByStatus(req, res);
}

// =================================
// Mostrar portfolio por id
// =================================
async function getPortfolioById(req, res) {
  return servicePortfolio.getPortfolioById(req, res);
}

// ==============================
// Crear portfolio
// ==============================
async function savePortfolio(req, res) {
  return servicePortfolio.savePortfolio(req, res);
}

// ==============================
// Actualizar portfolio
// ==============================
async function updatePortfolio(req, res) {
  return servicePortfolio.updatePortfolioById(req, res);
}

// ==============================
// Cambiar status de portfolio
// ==============================
async function updatePortfolioStatus(req, res) {
  return servicePortfolio.updatePortfolioStatusById(req, res);
}

// =====================================
// Profit
// =====================================
async function profitByPortfolioId(req, res) {
  return servicePortfolio.profitByPortfolioId(req, res);
}

// =====================================
// IdealProfit
// =====================================
async function idealProfitByPortfolioId(req, res) {
  return servicePortfolio.idealProfitByPortfolioId(req, res);
}

// =====================================
// No Payment Percent
// =====================================
async function noPaymentPercentByPortfolioId(req, res) {
  return servicePortfolio.noPaymentPercentByPortfolioId(req, res);
}

module.exports = {
  getPortfolios,
  getPortfoliosByStatus,
  getPortfolioById,
  savePortfolio,
  updatePortfolio,
  updatePortfolioStatus,
  profitByPortfolioId,
  idealProfitByPortfolioId,
  noPaymentPercentByPortfolioId,
};
