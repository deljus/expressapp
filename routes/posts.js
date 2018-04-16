import { Router } from 'express';
import controller from '../controllers';
import { addMenu } from "../assets/middlewares"

const router = Router();
const posts = controller.posts;

router.get('/all/:page/:count',addMenu ,posts.getPosts);
router.get('/:id',addMenu ,posts.getPost);

export default router;