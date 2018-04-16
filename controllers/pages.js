import models from '../models';
import { getNestedChildren } from '../assets/core';

const Op = models.sequelize.Op;

export const getPages = async(req, res) => {
  const { url } = req.params;
  try {
    const menu = await models.Menus.findAll();
    const page = await models.Menus.findOne({
      where: {
        url: `/${url || ""}`
      },
      include: [{
        model: models.Pages,
        required: true
      }]
    });

    const menuTree = getNestedChildren(menu, 'submenu');



    res.render('pages', { menuTree, page });
  } catch(e){
    console.log(e)
  }
};