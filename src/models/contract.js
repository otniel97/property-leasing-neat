'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {

    // Helper method for defining associations.
    // This method is not a part of Sequelize lifecycle.
    // The `models/index` file will call this method automatically.

    static associate(models) {
      // define association here
      Contract.belongsTo(models.User, { foreignKey: 'userId' });
      Contract.belongsTo(models.Property, { foreignKey: 'propertyId' });
      Contract.hasMany(models.Invoice, { foreignKey: 'contractId' });
    }
  };
  Contract.prototype.toJSON = function() {
    const values = Object.assign({}, this.get());
    if (values.User) {
      delete values.User.password;
    }
    return values;
  };
  Contract.init({
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: {
          args: true,
          msg: 'Debe introducir una fecha válida',
        },
        notNull: {
          msg: 'Fecha de contrato no puede estar vacío.',
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'No puede tener la descripción vacía.',
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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'No puede tener id tipo de usuario vacío.',
        },
      },
    },
    propertyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'No puede tener id de propiedad vacío.',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};
