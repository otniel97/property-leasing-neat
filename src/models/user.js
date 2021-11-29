'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    // Helper method for defining associations.
    // This method is not a part of Sequelize lifecycle.
    // The `models/index` file will call this method automatically.

    static associate(models) {
      // define association here
      User.hasMany(models.Contract, { foreignKey: 'userId' });
    }
  };
  User.prototype.toJSON = function() {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'El correo no puede estar vacío.',
        },
        isEmail: {
          msg: 'El correo debe ser un email valido',
        },
      },
      unique: {
        msg: 'Ya existe un usuario con el mismo email.',
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'La contraseña no puede estar vacía.',
        },
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      validate: {
        notNull: {
          msg: 'No puede tener el estatus vacío.',
        },
      },
    },
    role: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['Admin', 'User'],
      validate: {
        notNull: {
          msg: 'El rol no puede estar vacío.',
        },
        isIn: {
          args: [['Admin', 'User']],
          msg: 'Roles disponibles Admin, User',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
