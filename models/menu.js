'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menus', {
    name: DataTypes.STRING,
    submenu: DataTypes.INTEGER,
    access: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Menu;
};