import models from '../models/index';
import { getNestedChildren } from './core';

export const addMenu = async(req, res, next) => {
  try {
    const menu = await models.Menus.findAll();
    const menuTree = getNestedChildren(menu, 'submenu');
    req.menuTree = menuTree;
    next()
  } catch(e){
    res.send(500)
  }
};