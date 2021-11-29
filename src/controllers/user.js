// ====================================================
//      Service User
// ====================================================

const serviceUser = require('../services/user');

// ==============================
// Crear usuario
// ==============================
async function saveUser(req, res) {
  return await serviceUser.saveUser(req, res);
}

module.exports = {
  saveUser,
};
