import models from '../models/index';
import { getNestedChildren } from './core';

export const menuMiddleware = async(req, res, next) => {
  try {
    const menu = await models.Menus.findAll();
    res.locals.menuTree = getNestedChildren(menu, 'submenu');
    next()
  } catch(e){
    res.send(500)
  }
};

export const notFoundMiddleware = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

export const serverErrMiddleware = env => (err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (env === 'development') ? err : {}
  });
};

export const authenticationMiddleware = () => (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/')
};

export const mustAuthenticatedMw = (req, res, next) => {
  req.isAuthenticated()
    ? next()
    : res.redirect('/');
};