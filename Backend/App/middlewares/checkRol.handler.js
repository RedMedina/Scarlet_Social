const boom = require('@hapi/boom');

const checkRolHandler = (rol) => (req, res, next) => {
  try {
    const { user } = req;
    const rolesBy = user.user_type;
    const checkValueRol = rol.some((rolSingle) => rolesBy.includes(rolSingle));
    if (!checkValueRol) {
      // res.status(403).send({
      //   success: false,
      //   data: [],
      //   message: 'El usuario no tiene permisos suficientes',
      // });

      throw boom.unauthorized('El usuario no tiene permisos suficientes');
    }
    next();
  } catch (error) {
    res.status(403).send({
      success: false,
      data: [],
      stack: error,
      message: 'Error en la consulta de permisos',
    });
  }
};

module.exports = checkRolHandler;
