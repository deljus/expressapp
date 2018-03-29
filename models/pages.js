'use strict';
module.exports = (sequelize, DataTypes) =>
  sequelize.define('Pages', {
    title: DataTypes.STRING,
    text: DataTypes.STRING
  });