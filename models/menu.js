'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    submenu: DataTypes.INTEGER,
    access: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.Users.hasOne(models.Pages);
      }
    }
  });
  return Menu;
};