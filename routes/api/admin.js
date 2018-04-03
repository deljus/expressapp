let models  = require('../../models'),
              express = require('express'),
              router  = express.Router();

router.get('/association', async (req, res) => {
  res.json( await models.Dashboards.findAll());
});

router.get('/table/:name', async (req, res) => {
  const tableName = req.params.name;
  const tableData = await models[tableName].findAll();
  const tableHead = await Object.keys(models[tableName].tableAttributes);
  const columnsType = await tableHead.map(columnName => models[tableName].tableAttributes[columnName].type.key);
  res.json({tableData, tableHead, columnsType });
});

module.exports = router;
