'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      return queryInterface.bulkInsert('Dashboards', [
        {
          path: "/in",
          sidebarName: "Главная",
          navbarName: "Главная",
          icon: "LibraryBooks",
          component: "TableList",
          table: "",
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          path: "/users",
          sidebarName: "Пользователи",
          navbarName: "Пользователи",
          icon: "LibraryBooks",
          component: "TableList",
          table: "Users",
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          path: "/dashboard",
          sidebarName: "Настройка",
          navbarName: "Настройка",
          icon: "LibraryBooks",
          component: "TableList",
          table: "Dashboards",
          createdAt: new Date,
          updatedAt: new Date
        }
        ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Dashboards', null, {});

  }
};
