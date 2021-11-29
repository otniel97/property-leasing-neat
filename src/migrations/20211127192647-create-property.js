'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      cost: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      income: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      portfolioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Portfolios',
          key: 'id',
        },
      },
      propertyTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'PropertyTypes',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Properties');
  },
};
