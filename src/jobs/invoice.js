// ====================================================
//       Job Invoices
// ====================================================
const schedule = require('node-schedule');
const Invoice = require('../models').Invoice;
const Contract = require('../models').Contract;
const { validateJobExpirationDate } = require('../utils/validations');

// ================================================
// Invoive contracts
// ================================================
const invoiceContracts = schedule.scheduleJob('40 23 * * *', async() => {
  console.log('**START CRONJOB -- INVOICE CONTRACTS**');
  const contracts = await Contract.findAll({
    where: { status: true },
    include: [Invoice],
    order: [
      [Invoice, 'invoiceDate', 'desc'],
    ],
  });

  const expiredContracts = contracts.filter((contract) => validateJobExpirationDate(contract.Invoices[0].invoiceDate) >= 28);
  if (expiredContracts.length > 0) {
    for (const contract of expiredContracts) {
      Invoice.create({ isPaid: false, invoiceDate: new Date(), description: 'Factura', invoiceCost: contract.Invoices[0].cost, invoiceIncome: contract.Invoices[0].income, contractId: contract.id});
    }
  }

});

module.exports = {
  invoiceContracts,
};
