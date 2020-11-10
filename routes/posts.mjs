import express from 'express';

import { getPosts, createPost } from '../controllers/posts.mjs';

const router = express.Router();

router.get('/', getPosts);
router.post('/', getPosts);

export default router;