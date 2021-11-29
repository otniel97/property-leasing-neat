// ====================================================
//      Service User
// ====================================================

const User = require('../models').User;
const bcrypt = require('bcrypt');
const { successMsg, errorMsg, exceptionMsg } = require('../utils/responses');

// ==============================
// Crear usuario
// ==============================
async function saveUser(req, res) {
  try {
    const {email, password, passwordConfirm, role} = req.body;

    if (password !== passwordConfirm) {
      return exceptionMsg(res, 400, 'Las contraseñas son diferentes');
    }

    const checkUser = await User.findOne({where: { email } });
    if (checkUser) {
      return exceptionMsg(res, 400, 'Ya este email se encuentra registrado');
    }

    const newUser = {
      email,
      password: bcrypt.hashSync(password, 10),
      role,
    };
    const user = await User.create(newUser);

    successMsg(res, 200, 'Registro exitoso', user);

  } catch (error) {
    return errorMsg(res, 500, 'Lo sentimos!, hemos  cometido un error', error);
  }
}

module.exports = {
  saveUser,
};
