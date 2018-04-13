'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menus', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    submenu: DataTypes.INTEGER,
    access: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.Menus.hasMany(models.Pages);
      }
    }
  });
  return Menu;
};