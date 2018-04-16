module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        title: 'Пост1',
        text: 'bdfkdjfndzfjkbnkzjdfbnzdbn',
        keywords: 'erberberberberberb',
        UserId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: 'Пост2',
        text: 'erberberberber  er er ergerg',
        keywords: 'erahaerhaerhaerherh',
        UserId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};