let models  = require('../../models'),
              express = require('express'),
              router  = express.Router();

router.get('/association', async (req, res) => {
  res.json( await models.Dashboards.findAll());
});

const getDataFromTable = async (req, res) => {
  const tableName = req.params.name;
  const id = req.params.id;

  if(id) {
    var tableData = [await models[tableName].findById(id)];
  } else{
    var tableData = await models[tableName].findAll();
  }
  const data = tableData.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc
  }, {});
  res.json(data);
}

router.get('/table/data/:name', getDataFromTable);
router.get('/table/data/:name/:id', getDataFromTable);

router.get('/table/columns/:name', async (req, res) => {
  const tableName = req.params.name;
  const columnsName = await Object.keys(models[tableName].tableAttributes);
  const columnsType = await columnsName.map(columnName => models[tableName].tableAttributes[columnName].type.key);
  const data = columnsName.map((name, index) => ({ name, type: columnsType[index]}));
  res.json(data);
});



module.exports = router;
