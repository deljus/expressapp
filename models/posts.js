'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pages = sequelize.define('Posts', {
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    keywords: DataTypes.STRING
  });
  return Pages;
};