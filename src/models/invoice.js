'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {

    // Helper method for defining associations.
    // This method is not a part of Sequelize lifecycle.
    // The `models/index` file will call this method automatically.

    static associate(models) {
      // define association here
      Invoice.belongsTo(models.Contract, { foreignKey: 'contractId' });
    }
  };
  Invoice.init({
    isPaid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        notNull: {
          msg: 'No puede tener verificación de pago vacío.',
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
    invoiceDate: {
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
    invoiceCost: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        isFloat: {
          args: true,
          msg: 'Debe introducir valores numéricos',
        },
        min: {
          args: -0.00000000000000001,
          msg: 'El valor mínimo para monto a debitar es 0',
        },
      },
    },
    invoiceIncome: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        isFloat: {
          args: true,
          msg: 'Debe introducir valores numéricos',
        },
        min: {
          args: -0.00000000000000001,
          msg: 'El valor mínimo para monto a debitar es 0',
        },
      },
    },
    contractId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'No puede tener id de contrato vacío.',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};
