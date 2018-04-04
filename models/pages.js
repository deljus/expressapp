'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pages = sequelize.define('Pages', {
    title: DataTypes.STRING,
    text: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // models.Pages.hasMany(models.Menus);
      }
    }
  });
  return Pages;
};