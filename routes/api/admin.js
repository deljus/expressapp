import { Router } from 'express';
import controller from '../../controllers';

const router = Router();
const admin = controller.admin;

router.get('/association', admin.getAccosiation);
router.get('/table/data/:name', admin.getTableData);
router.get('/table/data/:name/:id', admin.getTableData);
router.get('/table/columns/:name', admin.getTableColumns);

router.delete('/table/data/delete', admin.deleteTableItem);

export default router;
