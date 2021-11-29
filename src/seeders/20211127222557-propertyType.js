'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PropertyTypes', [{
      name: 'Casa',
      description: 'Propiedad de tipo Casa',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apartamento',
      description: 'Propiedad de tipo Apartamento',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Local comercial',
      description: 'Propiedad de tipo Local comercial',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mansión',
      description: 'Propiedad de tipo Mansión',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Galpón',
      description: 'Propiedad de tipo Galpón',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
