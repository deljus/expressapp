import { Router } from 'express';
import controller from '../controllers';

const router = Router();
const posts = controller.posts;

router.get('/all/:page/:count' ,posts.getPosts);
router.get('/:id' ,posts.getPost);

export default router;