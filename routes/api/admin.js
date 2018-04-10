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

  res.json(tableData);
};

router.get('/table/data/:name', getDataFromTable);
router.get('/table/data/:name/:id', getDataFromTable);



router.delete('/table/data/delete', async(req, res) => {
  const id = req.body.id;
  const tableName = req.body.tableName;
  console.log(req.body.tableName);
  let row = await models[tableName].destroy({ where: { id }});
  row ? res.send(200): res.send(500)
});



router.get('/table/columns/:name', async (req, res) => {
  const tableName = req.params.name;
  const columnsName = await Object.keys(models[tableName].tableAttributes);
  const columnsType = await columnsName.map(columnName => models[tableName].tableAttributes[columnName].type.key);
  const columnsRequired = await columnsName.map(columnName => models[tableName].tableAttributes[columnName].allowNull);
  const data = columnsName.map((name, index) => ({
    name,
    type: columnsType[index],
    allowNull: columnsRequired[index]
  }));
  res.json(data);
});



module.exports = router;
