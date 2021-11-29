'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {

    // Helper method for defining associations.
    // This method is not a part of Sequelize lifecycle.
    // The `models/index` file will call this method automatically.

    static associate(models) {
      // define association here
      Property.belongsTo(models.Portfolio, { foreignKey: 'portfolioId' });
      Property.belongsTo(models.PropertyType, { foreignKey: 'propertyTypeId' });
      Property.hasMany(models.Contract, { foreignKey: 'propertyId' });
    }
  };
  Property.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'No puede tener el nombre vacío.',
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
    cost: {
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
    income: {
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
    portfolioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'No puede tener id cartera vacío.',
        },
      },
    },
    propertyTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'No puede tener id tipo de propiedad vacío.',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};
