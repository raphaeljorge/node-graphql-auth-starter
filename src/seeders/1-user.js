'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'User',
        email: 'user@example.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}
