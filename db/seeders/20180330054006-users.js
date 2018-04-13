'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        firstName: 'Иванов',
        lastName: 'Иван',
        email: 'trbsrb@gfxbgbf.com',
        login: 'superHero',
        password: '112233',
        createdAt: new Date,
        updatedAt: new Date
      },
        {
          firstName: 'Петров',
          lastName: 'Вася',
          email: 'trbsrb11@gfxbgbf.com',
          login: 'superHero2',
          password: '112233',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          firstName: 'Иванова',
          lastName: 'Мария',
          email: '234@gfxbgbf.com',
          login: 'womanHero',
          password: '112233',
          createdAt: new Date,
          updatedAt: new Date
        }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
