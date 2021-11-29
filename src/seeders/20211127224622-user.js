'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async(queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      email: 'otnielperez2013@gmail.com',
      password: bcrypt.hashSync('12345678', 10),
      status: true,
      role: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'otnielperez2015@gmail.com',
      password: bcrypt.hashSync('12345678', 10),
      status: true,
      role: 'User',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'otnielperez2018@gmail.com',
      password: bcrypt.hashSync('12345678', 10),
      status: true,
      role: 'User',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  },
};
