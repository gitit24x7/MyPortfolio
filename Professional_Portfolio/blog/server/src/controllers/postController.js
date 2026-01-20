// ============================================================================
// postController.js - BUSINESS LOGIC
// ============================================================================
//
// 🧠 UNDERSTANDING THE PATTERN:
// Every controller function follows the same 4-STEP TEMPLATE:
//
// 1. INPUT (Req)   -> Receive data from the user (URL params, body JSON, queries)
// 2. LOGIC         -> Process data, run calculations, build database queries
// 3. DATABASE      -> Ask MongoDB to find, create, update, or delete data
// 4. OUTPUT (Res)  -> Send the result back to the user as JSON
//
// ============================================================================

import Post from '../models/Post.js';

// ============================================================================
// 1. READ ALL Pattern (Get a list of things)
// URL: GET /api/posts
// ============================================================================
export const getAllPosts = async (req, res) => {
    try {
        // --- STEP 1: INPUT (Gathering Requirements) ---
        // The user might want only specific posts. We check the URL "query strings".
        // Example URL: /api/posts?page=2&search=react&tag=javascript
        const {
            search,         // User wants posts matching this text
            tag,            // User wants posts with this tag
            page = 1,       // Which page number? (Default: 1)
            limit = 10      // How many per page? (Default: 10)
        } = req.query;

        // --- STEP 2: LOGIC (Building the Search Plan) ---
        // We start with an empty filter: "Find everything"
        const filter = {};

        // If 'tag' exists, strict the filter: "Find everything AND matching this tag"
        if (tag) {
            filter.tags = tag;
        }

        // If 'search' exists, strict the filter: "Find matching title OR matching content"
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: 'i' } },   // 'i' = case insensitive
                { content: { $regex: search, $options: 'i' } }
            ];
        }

        // Calculate "Skip Logic" for pagination
        // If on page 2, we must skip the first 10 items.
        // Formula: (Page Number - 1) * Items Per Page
        const skip = (page - 1) * limit;

        // --- STEP 3: DATABASE (Asking MongoDB) ---
        // We chain commands together like a sentence:
        // "Find posts matching filter, Sort by newest, Limit to 10, Skip first X"
        const posts = await Post.find(filter)
            .sort({ createdAt: -1 })    // -1 means Newest First (Descending)
            .limit(parseInt(limit))     // Turn string "10" into number 10
            .skip(parseInt(skip))       // Skip the previous pages
            .select('-__v');            // Don't send internal MongoDB version number

        // We also need the TOTAL count to tell the frontend how many pages exist
        const total = await Post.countDocuments(filter);

        // --- STEP 4: OUTPUT (Sending the Package) ---
        res.json({
            success: true,
            pagination: {
                page: parseInt(page),   // Current page
                limit: parseInt(limit), // Items per page
                total: total,           // Total items available
                pages: Math.ceil(total / limit) // Total pages (Round UP)
            },
            data: posts
        });

    } catch (error) {
        // ERROR HANDLING: If anything crashed (DB down, bad code), tell the user.
        res.status(500).json({ success: false, message: error.message });
    }
};

// ============================================================================
// 2. READ ONE Pattern (Get a specific thing)
// URL: GET /api/posts/:slug
// ============================================================================
export const getPostBySlug = async (req, res) => {
    try {
        // --- STEP 1: INPUT ---
        // We need to know WHICH post. We get this from the URL parameter.
        // Example URL: /api/posts/how-to-learn-react
        const slug = req.params.slug;

        // --- STEP 2 & 3: LOGIC & DATABASE ---
        // Ask DB: Find ONE post where 'slug' matches our input.
        const post = await Post.findOne({ slug: slug });

        // CHECK: Did we find it?
        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Post not found'
            });
        }

        // BONUS LOGIC: Increment view count
        // "Since we found it, add +1 to views"
        post.viewCount += 1;
        await post.save(); // Save the change back to DB

        // --- STEP 4: OUTPUT ---
        res.json({
            success: true,
            data: post
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ============================================================================
// 3. CREATE Pattern (Make a new thing)
// URL: POST /api/posts
// ============================================================================
export const createPost = async (req, res) => {
    try {
        // --- STEP 1: INPUT ---
        // Data comes inside the "Body" of the request (the envelope contents).
        // req.body = { title: "Hi", content: "World", ... }
        const data = req.body;

        // --- STEP 2 & 3: DATABASE ---
        // Ask DB: Create a new document with this data.
        // MongoDB will validate it against our Schema (Post.js) automatically.
        const post = await Post.create(data);

        // --- STEP 4: OUTPUT ---
        // Status 201 means "Created Successfully"
        res.status(201).json({
            success: true,
            message: 'Post created successfully',
            data: post
        });

    } catch (error) {
        // ERROR HANDLING SPECIFIC TO CREATION
        // 1. Validation Error (Missing title, too short, etc.)
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: Object.values(error.errors).map(err => err.message)
            });
        }
        // 2. Duplicate Error (Slug already exists)
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'A post with this slug already exists'
            });
        }
        // 3. Server Error
        res.status(500).json({ success: false, message: error.message });
    }
};

// ============================================================================
// 4. UPDATE Pattern (Change an existing thing)
// URL: PUT /api/posts/:slug
// ============================================================================
export const updatePost = async (req, res) => {
    try {
        // --- STEP 1: INPUT ---
        // We need:
        // A. WHICH post to update (from URL params)
        // B. WHAT updates to make (from Request Body)
        const slug = req.params.slug;
        const updates = req.body;

        // --- STEP 2 & 3: DATABASE ---
        // Ask DB: Find by slug, Update with new data.
        // Options: 
        // - new: true (Return the NEW version, not the old one)
        // - runValidators: true (Check rules again, e.g., title length)
        const post = await Post.findOneAndUpdate(
            { slug: slug },
            updates,
            { new: true, runValidators: true }
        );

        // CHECK: Did it exist?
        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Post not found'
            });
        }

        // --- STEP 4: OUTPUT ---
        res.json({
            success: true,
            message: 'Post updated successfully',
            data: post
        });

    } catch (error) {
        // Validation errors happen here too!
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: Object.values(error.errors).map(err => err.message)
            });
        }
        res.status(500).json({ success: false, message: error.message });
    }
};

// ============================================================================
// 5. DELETE Pattern (Remove a thing)
// URL: DELETE /api/posts/:slug
// ============================================================================
export const deletePost = async (req, res) => {
    try {
        // --- STEP 1: INPUT ---
        // We only need to know WHICH post to delete.
        const slug = req.params.slug;

        // --- STEP 2 & 3: DATABASE ---
        // Ask DB: Find it and delete it.
        const post = await Post.findOneAndDelete({ slug: slug });

        // CHECK: was it found?
        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Post not found'
            });
        }

        // --- STEP 4: OUTPUT ---
        res.json({
            success: true,
            message: 'Post deleted successfully',
            data: post // We return what we deleted, just in case
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
