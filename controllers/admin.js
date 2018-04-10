const models  = require('../models');


exports.getAccosiation = async(req, res) => {
  res.json( await models.Dashboards.findAll());
};

exports.getTableData = async(req, res) => {
  const { name, id } = req.params;
  const data = id ? await models[name].findById(id) : await models[name].findAll();
  res.json(data);
};

exports.deleteTableItem = async(req, res) => {
  const { name, id } = req.body;
  const rowCount = await models[name].destroy({ where: { id } });
  res.json(rowCount);
};

exports.

exports.getColumns = async(req, res) => {
  const name = req.params.name;
  const columnsName = await Object.keys(models[name].tableAttributes);
  const columnsType = await columnsName.map(columnName => models[name].tableAttributes[columnName].type.key);
  const columnsRequired = await columnsName.map(columnName => models[name].tableAttributes[columnName].allowNull);
  const data = columnsName.map((name, index) => ({
    name,
    type: columnsType[index],
    allowNull: columnsRequired[index]
  }));
  res.json(data);
};

