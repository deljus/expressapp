'use strict';
const models = require("../models"),
      async = require('../assets/async');

module.exports = {
  up: (queryInterface, Sequelize) =>
    async.asyncForEach(Object.keys(models),(key =>
      queryInterface.createTable(models[key].tableName,  models[key].attributes))),
  down: (queryInterface, Sequelize) =>
    async.asyncForEach(Object.keys(models),(key =>
      queryInterface.dropTable(key)))
};