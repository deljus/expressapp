'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [
      {
        name: 'bdfjbjkdbfh',
        submenu: 0,
        access: 3,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: '1111111111bdfjbjkdbfh',
        submenu: 0,
        access: 3,
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
