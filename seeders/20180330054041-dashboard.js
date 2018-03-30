'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      return queryInterface.bulkInsert('Dashboards', [
        {
          path: "/",
          sidebarName: "Главная",
          navbarName: "Главная",
          icon: "LibraryBooks",
          component: "Index",
          table: "",
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          path: "/users",
          sidebarName: "Пользователи",
          navbarName: "Пользователи",
          icon: "LibraryBooks",
          component: "CRUDTable",
          table: "Users",
          createdAt: new Date,
          updatedAt: new Date
        }
        ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Dashboards', null, {});

  }
};
