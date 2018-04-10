const router = require('express').Router();
const AdminTables = require('../../controllers').admin;


router.get('/association', AdminTables.getAccosiation);
router.get('/table/data/:name', AdminTables.getTableData);
router.get('/table/data/:name/:id', AdminTables.getTableData);
router.get('/table/columns/:name', AdminTables.getColumns);

router.delete('/table/data/delete', AdminTables.deleteTableItem);

module.exports = router;
