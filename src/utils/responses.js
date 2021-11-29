// ====================================================
//      Messages Response
// ====================================================

const successMsg = (res, code, message, data) => {
  return res.status(code).json({
    ok: true,
    message,
    data,
  });
};

const errorMsg = (res, code, message, error) => {
  return res.status(code).json({
    ok: false,
    message,
    error: error.message? error.message.split(': ').pop() : error,
  });
};

const exceptionMsg = (res, code, message) => {
  return res.status(code).json({
    ok: false,
    message,
  });
};

const notFoundMsg = (res, entity) => {
  return res.status(404).json({
    ok: false,
    message: `Not found! Registro de ${entity} no encontrado`,
  });
};

const unauthhorized = (res) => {
  return res.status(403).send({
    ok: false,
    message: 'Unauthorized! No tiene permisos para esta operación',
  });
};

const forbidden = (res) => {
  return res.status(401).send({
    ok: false,
    message: 'Forbidden! No tiene header de autenticación',
  });
};

module.exports = {
  successMsg,
  errorMsg,
  exceptionMsg,
  notFoundMsg,
  unauthhorized,
  forbidden,
};

