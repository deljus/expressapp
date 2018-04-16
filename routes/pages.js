import { Router } from 'express';
import controller from '../controllers';

const router = Router();
const pages = controller.pages;

router.get('/:url', pages.getPages);

export default router;