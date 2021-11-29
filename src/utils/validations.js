// ====================================================
//      Validations
// ====================================================

const moment = require('moment');

const validateDate = (date) => {
  const expiration = moment(date).format('YYYY-MM-DD');
  const today = moment(new Date()).format('YYYY-MM-DD');
  const days = moment(expiration).diff(moment(today), 'days');
  return days;
};

const validateJobExpirationDate = (date) => {
  const expiration = moment(date, 'YYYY-MM-DD').add(1, 'days');
  const today = moment(new Date()).format('YYYY-MM-DD');
  const days = moment(today).diff(moment(expiration), 'days');
  return days;
};

module.exports = {
  validateDate,
  validateJobExpirationDate,
};
