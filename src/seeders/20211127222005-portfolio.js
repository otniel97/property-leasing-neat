'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Portfolios', [{
      name: 'Propiedades Lujosas',
      description: 'Portfolio de tipo: Propiedades Lujosas',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Propiedades Standar',
      description: 'Portfolio de tipo: Propiedades Standar',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Propiedades de Alquiler',
      description: 'Portfolio de tipo: Propiedades de Alquiler',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Propiedades Otras',
      description: 'Portfolio de tipo: Propiedades Otras',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Propiedades comerciales',
      description: 'Portfolio de tipo: Propiedades comerciales',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
