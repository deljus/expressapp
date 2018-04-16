import { Router } from 'express';
import { addMenu } from "../assets/middlewares"
import controller from '../controllers';

const router = Router();
const pages = controller.pages;

router.get('/',addMenu ,pages.getPages);
router.get('/:url',addMenu ,pages.getPages);

export default router;