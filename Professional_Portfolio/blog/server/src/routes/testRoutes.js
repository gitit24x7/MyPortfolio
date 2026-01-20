// ============================================================================
// testRoutes.js - Routes for Testing Database Operations
// ============================================================================
// These routes are TEMPORARY - just for learning how the database works.
// We'll delete them later and replace with proper API routes.
// ============================================================================

import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

// ----------------------------------------------------------------------------
// TEST ROUTE: Create a sample blog post
// ----------------------------------------------------------------------------
router.post('/test/create-post', async (req, res) => {
    try {
        // Create a new post using our Post model
        const post = await Post.create({
            title: 'My First Blog Post!',
            slug: 'my-first-blog-post',
            content: 'This is my very first blog post. I am learning Express and MongoDB!',
            excerpt: 'Learning Express and MongoDB',
            tags: ['javascript', 'nodejs', 'mongodb'],
            published: true,
        });

        // Send success response
        res.status(201).json({
            success: true,
            message: 'Post created successfully!',
            data: post,
        });
    } catch (error) {
        // Handle errors (e.g., validation errors, duplicate slug)
        res.status(400).json({
            success: false,
            message: 'Error creating post',
            error: error.message,
        });
    }
});

// ----------------------------------------------------------------------------
// TEST ROUTE: Seed multiple posts (for testing search/pagination)
// ----------------------------------------------------------------------------
router.post('/test/seed', async (req, res) => {
    try {
        // First, clear existing posts
        await Post.deleteMany({});

        // Create sample posts
        const samplePosts = [
            {
                title: 'Getting Started with React',
                slug: 'getting-started-with-react',
                content: 'React is a JavaScript library for building user interfaces. In this post, we will explore the fundamentals of React including components, props, and state.',
                excerpt: 'Learn the fundamentals of React',
                tags: ['react', 'javascript', 'tutorial'],
                published: true,
                viewCount: 150
            },
            {
                title: 'Node.js Best Practices',
                slug: 'nodejs-best-practices',
                content: 'Node.js is perfect for building scalable server-side applications. Here are some best practices for writing production-ready Node.js code.',
                excerpt: 'Production-ready Node.js tips',
                tags: ['nodejs', 'backend', 'best-practices'],
                published: true,
                viewCount: 89
            },
            {
                title: 'MongoDB Schema Design',
                slug: 'mongodb-schema-design',
                content: 'Learn how to design efficient MongoDB schemas. We will cover embedding vs referencing, indexing strategies, and common patterns.',
                excerpt: 'Master MongoDB schema design',
                tags: ['mongodb', 'database', 'tutorial'],
                published: true,
                viewCount: 203
            },
            {
                title: 'Express.js Middleware Explained',
                slug: 'express-middleware-explained',
                content: 'Middleware is the heart of Express.js. This post explains how middleware works and how to create custom middleware.',
                excerpt: 'Understanding Express middleware',
                tags: ['express', 'nodejs', 'backend'],
                published: true,
                viewCount: 67
            },
            {
                title: 'Building REST APIs',
                slug: 'building-rest-apis',
                content: 'REST APIs are the backbone of modern web applications. Learn how to design and implement RESTful APIs with Express.js and MongoDB.',
                excerpt: 'Create professional REST APIs',
                tags: ['api', 'rest', 'backend', 'nodejs'],
                published: true,
                viewCount: 312
            },
            {
                title: 'Draft: Upcoming React 19 Features',
                slug: 'draft-react-19-features',
                content: 'This is a draft post about upcoming React 19 features. Not yet published.',
                excerpt: 'Sneak peek at React 19',
                tags: ['react', 'javascript'],
                published: false,  // This one is a draft
                viewCount: 5
            }
        ];

        const posts = await Post.insertMany(samplePosts);

        res.status(201).json({
            success: true,
            message: `${posts.length} posts created successfully!`,
            data: posts
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// ----------------------------------------------------------------------------
// TEST ROUTE: Get all posts
// ----------------------------------------------------------------------------
router.get('/test/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json({
            success: true,
            count: posts.length,
            data: posts,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

// ----------------------------------------------------------------------------
// TEST ROUTE: Get a single post by slug
// ----------------------------------------------------------------------------
router.get('/test/posts/:slug', async (req, res) => {
    try {
        const post = await Post.findOne({ slug: req.params.slug });

        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        res.json({
            success: true,
            data: post,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

// ----------------------------------------------------------------------------
// TEST ROUTE: Update a post
// ----------------------------------------------------------------------------
router.put('/test/posts/:slug', async (req, res) => {
    try {
        const updatedPost = await Post.findOneAndUpdate(
            { slug: req.params.slug },
            {
                title: 'My UPDATED Blog Post!',
                content: 'This content has been updated!',
                tags: ['javascript', 'nodejs', 'updated']
            },
            { new: true, runValidators: true }
        );

        if (!updatedPost) {
            return res.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        res.json({
            success: true,
            message: 'Post updated successfully!',
            data: updatedPost,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// ----------------------------------------------------------------------------
// TEST ROUTE: Increment view count
// ----------------------------------------------------------------------------
router.patch('/test/posts/:slug/view', async (req, res) => {
    try {
        const post = await Post.findOneAndUpdate(
            { slug: req.params.slug },
            { $inc: { viewCount: 1 } },
            { new: true }
        );

        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        res.json({
            success: true,
            message: `View count incremented to ${post.viewCount}`,
            data: post,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

// ----------------------------------------------------------------------------
// TEST ROUTE: Delete a post
// ----------------------------------------------------------------------------
router.delete('/test/posts/:slug', async (req, res) => {
    try {
        const deletedPost = await Post.findOneAndDelete({ slug: req.params.slug });

        if (!deletedPost) {
            return res.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        res.json({
            success: true,
            message: 'Post deleted successfully!',
            data: deletedPost,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

export default router;
