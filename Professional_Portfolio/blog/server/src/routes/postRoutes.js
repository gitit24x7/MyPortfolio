import express from 'express';
import { getAllPosts, createPost, deletePost, updatePost, getPostBySlug } from '../controllers/postController.js';

const router = express.Router();

router.get('/', getAllPosts);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.put('/:id', updatePost);
router.get('/:slug', getPostBySlug);

export default router;

