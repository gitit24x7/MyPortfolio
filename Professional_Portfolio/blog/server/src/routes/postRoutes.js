// ============================================================================
// postRoutes.js - TRAFFIC CONTROL
// ============================================================================
//
// 🧠 UNDERSTANDING THE PATTERN:
// Routes are the "Receptionist" of your API. They don't do the work;
// they just point visitors to the right person (the Controller).
//
// PATTERN:
// router.METHOD('PATH', HANDLER_FUNCTION)
//
// 1. METHOD   -> GET (Read), POST (Create), PUT (Update), DELETE (Remove)
// 2. PATH     -> The URL ending (e.g., '/' or '/:slug')
// 3. HANDLER  -> The function in the Controller that does the work
//
// ============================================================================

import express from 'express';
import {
    getAllPosts,
    getPostBySlug,
    createPost,
    updatePost,
    deletePost
} from '../controllers/postController.js';

const router = express.Router();

// ============================================================================
// 1. READ Routes (Public - Anyone can see these)
// ============================================================================

// ROUTE: Get All Posts
// URL:   GET /api/posts
// GOAL:  "I'm a visitor, show me the list of posts."
router.get('/', getAllPosts);

// ROUTE: Get Single Post
// URL:   GET /api/posts/:slug
// GOAL:  "I want to read this specific post."
// NOTE:  ':slug' is a variable. It matches "how-to-react", "my-first-post", etc.
router.get('/:slug', getPostBySlug);

// ============================================================================
// 2. WRITE Routes (Protected - Only Admins should do this)
// ============================================================================

// ROUTE: Create Post
// URL:   POST /api/posts
// GOAL:  "I want to publish a new article."
router.post('/', createPost);

// ROUTE: Update Post
// URL:   PUT /api/posts/:slug
// GOAL:  "I made a typo, let me fix this post."
router.put('/:slug', updatePost);

// ROUTE: Delete Post
// URL:   DELETE /api/posts/:slug
// GOAL:  "Remove this post forever."
router.delete('/:slug', deletePost);

// ============================================================================
// SUMMARY OF ROUTES
// ============================================================================
// GET    /           -> getAllPosts     (List)
// GET    /:slug      -> getPostBySlug   (Detail)
// POST   /           -> createPost      (Create)
// PUT    /:slug      -> updatePost      (Update)
// DELETE /:slug      -> deletePost      (Remove)
// ============================================================================

export default router;
