// ====================================================
//      Middleware Auth
// ====================================================

const jwt = require('jsonwebtoken');
const { unauthhorized, forbidden, errorMsg } = require('../utils/responses');

// ======================================
// Middleware para usuario autenticado
// ======================================

const authenticate = (req, res, next) => {
  if (!req.headers.authorization) {
    return forbidden(res);
  }

  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, process.env.SEED, (error, data) => {
    if (error) {
      return errorMsg(res, 500, 'Lo sentimos!, hemos  cometido un error', error);
    }
    req.user = data.user;
    next();
  });
};

// ======================================
// Verificar ADMIN_ROLE
// ======================================
const verifiedAdminRol = (req, res, next) => {
  if (req.user.role !== 'Admin') {
    return unauthhorized(res);
  }
  next();
};


module.exports = {
  authenticate,
  verifiedAdminRol,
};
