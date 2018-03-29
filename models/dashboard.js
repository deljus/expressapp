'use strict';

module.exports = (sequelize, DataTypes) =>
  sequelize.define('Dashboadrd', {
    path: DataTypes.STRING,
    sidebarName: DataTypes.STRING,
    navbarName: DataTypes.STRING,
    icon: DataTypes.STRING,
    component: DataTypes.STRING,
    table: DataTypes.STRING
  });