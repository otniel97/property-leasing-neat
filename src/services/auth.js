// ====================================================
//      AUTH SERVICE
// ====================================================

const User = require('../models').User;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { successMsg, errorMsg, exceptionMsg } = require('../utils/responses');

async function signIn(req, res) {
  try {
    const {email, password} = req.body;

    const userExists = await User.findOne({ where: { email } });
    if (!userExists) {
      return exceptionMsg(res, 404, 'Usuario o clave incorrecta');
    }

    if (!bcrypt.compareSync(password, userExists.password)) {
      return exceptionMsg(res, 404, 'Usuario o clave incorrecta');
    }

    if (!userExists.status) {
      return exceptionMsg(res, 400, 'Usuario no activo, por favor comuníquese con la organización');
    }

    const token = jwt.sign({ user: userExists }, process.env.SEED, { expiresIn: process.env.EXPIRATION_DATE });

    return successMsg(res, 200, `Inicio de sesión correcto`, { token, userExists });

  } catch (error) {
    console.error(error.toString());
    errorMsg(res, 500, `lo sentimos hemos cometido un error!`, error);
  }
}

module.exports = {
  signIn,
};
