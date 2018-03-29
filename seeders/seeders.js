'use strict'
const data = require('../data.json'),
      async = require('../assets/async');

module.exports = {
  up: (queryInterface, Sequelize) =>
    async.asyncForEach(Object.keys(data), (key) =>
      queryInterface.bulkInsert(key,  data[key], {})),

  down: (queryInterface, Sequelize) =>
    async.asyncForEach(Object.keys(data), (key) =>
      queryInterface.bulkDelete(key,  data[key], {}))
};