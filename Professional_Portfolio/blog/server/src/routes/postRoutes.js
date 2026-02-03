import express from 'express';
import { getAllPosts, createPost, deletePost, updatePost, getPostBySlug } from '../controllers/postController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllPosts);
router.post('/', authenticate, createPost);
router.delete('/:id', authenticate, deletePost);
router.put('/:id', authenticate, updatePost);
router.get('/:slug', getPostBySlug);

export default router;

