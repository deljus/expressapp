import { Router } from 'express';
import controller from '../controllers';

const router = Router();
const pages = controller.pages;

router.get('/', pages.getPages);

export default router;