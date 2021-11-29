'use strict';
const User = require('../models').User;
const Property = require('../models').Property;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll();
    const properties = await Property.findAll();

    return queryInterface.bulkInsert('Contracts', [{
      date: '2021-01-06',
      description: 'Arriendo de propiedad',
      status: true,
      userId: users[1].id,
      propertyId: properties[2].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      date: '2021-01-06',
      description: 'Arriendo de propiedad',
      status: true,
      userId: users[2].id,
      propertyId: properties[3].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      date: '2021-01-06',
      description: 'Arriendo de propiedad',
      status: true,
      userId: users[1].id,
      propertyId: properties[36].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
