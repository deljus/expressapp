'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Pages', [
      {
        title: "jkbdjkfbkdfj zdbhzkdfjbhzdf dbjhzkdfbh",
        text: "xfgnxbjkbnxn xkfjbn xfkj nxfgn xfkgn xfkbn ",
        MenuId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "22222222jkbdjkfbkdfj zdbhzkdfjbhzdf dbjhzkdfbh",
        text: "2222222222xfgnxbjkbnxn xkfjbn xfkj nxfgn xfkgn xfkbn ",
        MenuId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "3333 zdbhzkdfjbhzdf dbjhzkdfbh",
        text: "3333333 xkfjbn xfkj nxfgn xfkgn xfkbn ",
        MenuId: 3,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "3333ddv zdbhzkdfjbhzdf dbjhzkdfbh",
        text: "3333333xdvxdvdv xkfjbn xfkj nxfgn xfkgn xfkbn ",
        MenuId: 4,
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pages', null, {});
  }
};
