module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [
      {
        name: 'Начальная страница',
        submenu: 0,
        access: 3,
        url: '/',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Еще страница',
        submenu: 0,
        access: 3,
        url: '/errr',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Подменю',
        submenu: 2,
        access: 3,
        url: '/errr2',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Подменю 1111',
        submenu: 2,
        access: 3,
        url: '/errr2',
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
