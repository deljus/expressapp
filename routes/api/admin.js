const router = require('express').Router();
const AdminTable = require('../../controllers').admin;

router.get('/association', AdminTable.getAccosiation);
router.get('/table/data/:name', AdminTable.getTableData);
router.get('/table/data/:name/:id', AdminTable.getTableData);
router.get('/table/columns/:name', AdminTable.getTableColumns);

router.delete('/table/data/delete', AdminTable.deleteTableItem);

module.exports = router;
