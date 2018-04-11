import models from '../models';


export const getAccosiation = async(req, res) => {
  res.json( await models.Dashboards.findAll());
};

export const getTableData = async(req, res) => {
  const { name, id } = req.params;
  const data = id ? await models[name].findById(id) : await models[name].findAll();
  res.json(data);
};

export const deleteTableItem = async(req, res) => {
  const { name, id } = req.body;
  const rowCount = await models[name].destroy({ where: { id } });
  res.json(rowCount);
};

export const getTableColumns = async(req, res) => {
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

