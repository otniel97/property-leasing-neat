// ====================================================
//      SERVICE PORTFOLIO
// ====================================================
const models = require('../models');
const Portfolio = require('../models').Portfolio;
const { successMsg, errorMsg, exceptionMsg, notFoundMsg } = require('../utils/responses');

// ==============================================
// Mostrar todos los portfolios
// ==============================================
async function getPortfolios(req, res) {
  try {
    const portfolios = await Portfolio.findAll({
      include: [{
        model: models.Property,
        required: false,
      }],
    });
    return successMsg(res, 200, 'correcto', portfolios);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// ==============================================
// Mostrar todas los portfolios por estatus
// ==============================================
async function getPortfoliosByStatus(req, res) {
  try {
    const { status } = req.params;
    const portfolios = await Portfolio.findAll({
      where: { status },
      include: [{
        model: models.Property,
        required: false,
      }],
    } );
    return successMsg(res, 200, 'correcto', portfolios);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// =================================
// Mostrar portfolio por id
// =================================
async function getPortfolioById(req, res) {
  try {
    const { id } = req.params;
    const portfolio = await Portfolio.findOne({
      where: { id },
      include: [{
        model: models.Property,
        required: false,
      }] });
    if (!portfolio) {
      return notFoundMsg(res, 'Portfolio');
    }
    return successMsg(res, 200, 'correcto', portfolio);
  } catch (error) {
    return errorMsg(res, 500, 'Ha ocurrido un error', error);
  }
}

// ==============================
// Crear portfolio
// ==============================
async function savePortfolio(req, res) {
  try {
    const { name, description } = req.body;

    const portfolioExists = await Portfolio.findOne({ where: { name } });
    if (portfolioExists) {
      return exceptionMsg(res, 400, 'Ya existe un portfolio con el mismo nombre');
    }
    const portfolio = await Portfolio.create({ name, description});

    return successMsg(res, 200, 'Portfolio creado', portfolio);
  } catch (error) {
    return errorMsg(res, 500, 'Lo sentimos!, hemos  cometido un error', error);
  }
}

// ==============================
// Actualizar portfolio
// ==============================
async function updatePortfolioById(req, res) {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const portfolio = await Portfolio.findOne({ where: { id } });
    if (!portfolio) {
      return notFoundMsg(res, 'Portfolio');
    }
    portfolio.set({name, description });
    await portfolio.save();

    return successMsg(res, 200, 'Actualización exitosa', portfolio);
  } catch (error) {
    return errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error);
  }
}

// =====================================
// Activar desactivar portfolio
// =====================================
async function updatePortfolioStatusById(req, res) {
  try {
    const { id } = req.params;
    const portfolio = await Portfolio.findOne({ where: { id } });

    if (!portfolio) {
      return notFoundMsg(res, 'Portfolio');
    }

    portfolio.set({ status: !portfolio.status });
    await portfolio.save();

    return successMsg(res, 200, 'Actualización exitosa', portfolio);

  } catch (error) {
    return errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error);
  }
}

// =====================================
// Profit
// =====================================
async function profitByPortfolioId(req, res) {
  try {
    const { id } = req.params;
    const { firstDate, secondDate } = req.query;
    const portfolio = await Portfolio.findOne({ where: { id } });

    if (firstDate > secondDate) {
      return exceptionMsg(res, 400, 'La fecha inicial no puede ser mayor a la fecha final');
    }

    if (!portfolio) {
      return notFoundMsg(res, 'Portfolio');
    }

    const results = await models.Invoice.findAll({
      group: ['Contract.Property.portfolioId'],
      attributes: [
        [models.Sequelize.fn('SUM', models.Sequelize.col('invoiceIncome')), 'totalIncomes'],
        [models.Sequelize.fn('SUM', models.Sequelize.col('invoiceCost')), 'totalCosts'],
      ],
      where: { isPaid: true, invoiceDate: {[models.Sequelize.Op.between]: [firstDate, secondDate]}},
      include: [{
        model: models.Contract,
        attributes: [],
        required: true,
        include: [{
          model: models.Property,
          attributes: [],
          where: { portfolioId: id },
          required: true,
        }],
      }],
    });

    const result = results.length > 0? { totalIncomes: results[0].dataValues.totalIncomes, totalCosts: results[0].dataValues.totalCosts } : { totalIncomes: 0, totalCosts: 0 };

    return successMsg(res, 200, 'correcto', result);

  } catch (error) {
    return errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error);

  }
}

// =====================================
// IdealProfit
// =====================================
async function idealProfitByPortfolioId(req, res) {
  try {
    const { id } = req.params;
    const { firstDate, secondDate } = req.query;
    const portfolio = await Portfolio.findOne({ where: { id } });

    if (firstDate > secondDate) {
      return exceptionMsg(res, 400, 'La fecha inicial no puede ser mayor a la fecha final');
    }

    if (!portfolio) {
      return notFoundMsg(res, 'Portfolio');
    }

    const results = await models.Invoice.findAll({
      group: ['Contract.Property.portfolioId'],
      attributes: [
        [models.Sequelize.fn('SUM', models.Sequelize.col('invoiceIncome')), 'totalIncomes'],
        [models.Sequelize.fn('SUM', models.Sequelize.col('invoiceCost')), 'totalCosts'],
      ],
      where: { invoiceDate: {[models.Sequelize.Op.between]: [firstDate, secondDate]}},
      include: [{
        model: models.Contract,
        attributes: [],
        required: true,
        include: [{
          model: models.Property,
          attributes: [],
          where: { portfolioId: id },
          required: true,
        }],
      }],
    });

    const result = results.length > 0? { totalIncomes: results[0].dataValues.totalIncomes, totalCosts: results[0].dataValues.totalCosts } : { totalIncomes: 0, totalCosts: 0 };

    return successMsg(res, 200, 'correcto', result);
  } catch (error) {
    return errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error);

  }
}

// =====================================
// No Payment Percent
// =====================================
async function noPaymentPercentByPortfolioId(req, res) {
  try {
    const { id } = req.params;
    const { firstDate, secondDate } = req.query;
    const portfolio = await Portfolio.findOne({ where: { id } });

    if (firstDate > secondDate) {
      return exceptionMsg(res, 400, 'La fecha inicial no puede ser mayor a la fecha final');
    }

    if (!portfolio) {
      return notFoundMsg(res, 'Portfolio');
    }

    const totalPaidInvoices = await models.Invoice.count({
      where: { isPaid: false, invoiceDate: {[models.Sequelize.Op.between]: [firstDate, secondDate]}},
      include: [{
        model: models.Contract,
        attributes: [],
        required: true,
        include: [{
          model: models.Property,
          attributes: [],
          where: { portfolioId: id },
          required: true,
        }],
      }],
    });
    const totalInvoices = await models.Invoice.count({
      where: { invoiceDate: {[models.Sequelize.Op.between]: [firstDate, secondDate]}},
      include: [{
        model: models.Contract,
        attributes: [],
        required: true,
        include: [{
          model: models.Property,
          attributes: [],
          where: { portfolioId: id },
          required: true,
        }],
      }],
    });

    return successMsg(res, 200, 'correcto', { noPaymentPercent: totalPaidInvoices/totalInvoices*100 });
  } catch (error) {
    return errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error);

  }
}

module.exports = {
  getPortfolios,
  getPortfoliosByStatus,
  getPortfolioById,
  savePortfolio,
  updatePortfolioById,
  updatePortfolioStatusById,
  profitByPortfolioId,
  idealProfitByPortfolioId,
  noPaymentPercentByPortfolioId,
};
