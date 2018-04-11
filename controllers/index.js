import fs from 'fs';
import path from 'path';

let controller = {};
const basename = path.basename(__filename);

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
           .catch((e) => { res.sendStatus(e.status || 400) });
  };

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {

    const importFile = require(`./${file}`),
          fileNameWOExten = file.slice(0, -3);

    Object.keys(importFile).forEach(fns => {
      importFile[fns] = asyncMiddleware(importFile[fns]);
    });

    controller[fileNameWOExten] = importFile;

  });

export default controller;