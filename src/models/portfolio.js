'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {

    // Helper method for defining associations.
    // This method is not a part of Sequelize lifecycle.
    // The `models/index` file will call this method automatically.

    static associate(models) {
      // define association here
      Portfolio.hasMany(models.Property, { foreignKey: 'portfolioId' });
    }
  };
  Portfolio.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'No puede tener el nombre vacío.',
        },
      },
      unique: {
        args: true,
        msg: 'Ya existe una cartera con el mismo nombre.',
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
  }, {
    sequelize,
    modelName: 'Portfolio',
  });
  return Portfolio;
};
