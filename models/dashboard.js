'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dashboard = sequelize.define('Dashboards', {
    path: DataTypes.STRING,
    sidebarName: DataTypes.STRING,
    navbarName: DataTypes.STRING,
    icon: DataTypes.STRING,
    component: DataTypes.STRING,
    table: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Dashboard;
};