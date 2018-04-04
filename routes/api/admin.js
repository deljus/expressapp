let models  = require('../../models'),
              express = require('express'),
              router  = express.Router();

router.get('/association', async (req, res) => {
  res.json( await models.Dashboards.findAll());
});

router.get('/table/data/:name', async (req, res) => {
  const tableName = req.params.name;
  const data = await models[tableName].findAll();
  res.json(data);
});

router.get('/table/columns/:name', async (req, res) => {
  const tableName = req.params.name;
  const columnsName = await Object.keys(models[tableName].tableAttributes);
  const columnsType = await columnsName.map(columnName => models[tableName].tableAttributes[columnName].type.key);
  const data = columnsName.map((name, index) => ({ name, type: columnsType[index]}));
  res.json(data);
});

module.exports = router;
