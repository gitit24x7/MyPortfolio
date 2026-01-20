// ============================================================================
// Post.js - Blog Post Schema/Model
// ============================================================================
// This file defines the structure (schema) of a Blog Post document in MongoDB.
// Think of it like defining a "class" or "type" for blog posts.
// ============================================================================

import mongoose from 'mongoose';

// What is mongoose.Schema?
// PLAIN ENGLISH: It's a tool that lets us define the structure of our data.
//                Like creating a form with specific fields and rules.
// TECHNICAL: A Schema maps to a MongoDB collection and defines the shape of
//            documents within that collection, including field types, validation,
//            defaults, and more.

const postSchema = new mongoose.Schema(
    {
        // --------------------------------------------------------------------------
        // Field: title
        // --------------------------------------------------------------------------
        title: {
            type: String,
            // What is `type: String`?
            // PLAIN ENGLISH: This field must be text (not a number, not a date).
            // TECHNICAL: Mongoose will validate that the value is a JavaScript String.
            //            If you try to save a number, it will convert or throw an error.

            required: [true, 'Title is required'],
            // What is `required`?
            // PLAIN ENGLISH: You MUST provide a title. Can't create a post without it.
            // TECHNICAL: Mongoose validation. If missing, it throws a ValidationError
            //            with the message "Title is required".

            trim: true,
            // What is `trim`?
            // PLAIN ENGLISH: Remove extra spaces from the beginning and end.
            // TECHNICAL: "  My Title  " becomes "My Title". Prevents messy data.

            maxlength: [200, 'Title cannot exceed 200 characters'],
            // What is `maxlength`?
            // PLAIN ENGLISH: Title can't be longer than 200 characters.
            // TECHNICAL: Validation rule. Rejects titles longer than 200 chars.
        },

        // --------------------------------------------------------------------------
        // Field: slug
        // --------------------------------------------------------------------------
        slug: {
            type: String,
            required: true,
            unique: true,
            // What is `unique`?
            // PLAIN ENGLISH: No two posts can have the same slug. Like a username.
            // TECHNICAL: MongoDB creates an index on this field to enforce uniqueness.
            //            Attempting to save a duplicate slug will throw a duplicate key error.

            lowercase: true,
            // What is `lowercase`?
            // PLAIN ENGLISH: Convert to lowercase automatically.
            // TECHNICAL: "My-First-Post" becomes "my-first-post". Good for URLs.

            trim: true,
        },

        // WHY do we need both title and slug?
        // - Title: "My First React Post!" (human-readable, can have spaces/capitals)
        // - Slug: "my-first-react-post" (URL-friendly, no spaces, all lowercase)
        // URL would be: yoursite.com/blog/my-first-react-post

        // --------------------------------------------------------------------------
        // Field: content
        // --------------------------------------------------------------------------
        content: {
            type: String,
            required: [true, 'Content is required'],
            // No maxlength - blog posts can be long!
        },

        // --------------------------------------------------------------------------
        // Field: excerpt
        // --------------------------------------------------------------------------
        excerpt: {
            type: String,
            required: false,
            // What does `required: false` mean?
            // PLAIN ENGLISH: This field is optional. Post can exist without it.
            // TECHNICAL: Mongoose won't validate if this field is missing.

            maxlength: [300, 'Excerpt cannot exceed 300 characters'],
            trim: true,
        },
        // What is an excerpt used for?
        // PLAIN ENGLISH: A short summary shown on the blog listing page.
        // TECHNICAL: Preview text. If not provided, we can auto-generate it from
        //            the first 150 characters of content.

        // --------------------------------------------------------------------------
        // Field: tags
        // --------------------------------------------------------------------------
        tags: {
            type: [String],
            // What is `[String]`?
            // PLAIN ENGLISH: An array (list) of text items.
            // TECHNICAL: This field stores an array of strings.
            //            Example: ["javascript", "react", "tutorial"]

            default: [],
            // What is `default`?
            // PLAIN ENGLISH: If you don't provide tags, it starts as an empty list.
            // TECHNICAL: Default value when the field is not specified during creation.
        },

        // --------------------------------------------------------------------------
        // Field: published
        // --------------------------------------------------------------------------
        published: {
            type: Boolean,
            // What is `Boolean`?
            // PLAIN ENGLISH: True or False. Yes or No. Published or Draft.
            // TECHNICAL: JavaScript boolean value. Used for conditional logic.

            default: false,
            // Why default to false?
            // PLAIN ENGLISH: New posts start as drafts. You have to explicitly publish them.
            // TECHNICAL: Safe default. Prevents accidental public posts.
        },

        // --------------------------------------------------------------------------
        // Field: viewCount
        // --------------------------------------------------------------------------
        viewCount: {
            type: Number,
            default: 0,
            // What is this used for?
            // PLAIN ENGLISH: How many people have viewed this post?
            // TECHNICAL: Integer counter. Incremented with each view.
        },
    },
    {
        // --------------------------------------------------------------------------
        // Schema Options (timestamps)
        // --------------------------------------------------------------------------
        timestamps: true,
        // What does `timestamps: true` do?
        // PLAIN ENGLISH: Automatically add createdAt and updatedAt fields.
        // TECHNICAL: Mongoose automatically manages these Date fields:
        //            - createdAt: Set when document is created
        //            - updatedAt: Updated every time document is modified
        //            You don't have to manually set these!
    }
);

// ============================================================================
// Indexes
// ============================================================================
// What are indexes?
// PLAIN ENGLISH: Like the index in a book. Helps find things quickly.
// TECHNICAL: Database structures that improve query performance.
//            Trade-off: Faster reads, slower writes, more storage.

postSchema.index({ slug: 1 });
// Already indexed via `unique: true`, but being explicit

postSchema.index({ tags: 1 });
// Why index tags?
// PLAIN ENGLISH: Makes searching by tag very fast.
// TECHNICAL: Allows efficient queries like: "find all posts with tag 'react'"

postSchema.index({ createdAt: -1 });
// Why index createdAt with -1?
// PLAIN ENGLISH: Makes it fast to sort posts by newest first.
// TECHNICAL: -1 means descending order (newest to oldest).
//            Speeds up queries like: "get latest 10 posts"

// ============================================================================
// Create and Export the Model
// ============================================================================
const Post = mongoose.model('Post', postSchema);
// What does `mongoose.model()` do?
// PLAIN ENGLISH: Creates a "factory" for creating and querying blog posts.
// TECHNICAL: Compiles the schema into a Model. The Model is a class with
//            methods for CRUD operations (create, read, update, delete).
//
// Arguments:
//   - 'Post': Model name (Mongoose will create a 'posts' collection in MongoDB)
//   - postSchema: The schema we defined above
//
// MongoDB Collection Naming:
//   - Model name: 'Post' (singular, capitalized)
//   - Collection name: 'posts' (plural, lowercase) ← MongoDB convention

export default Post;
// What does `export default` do?
// PLAIN ENGLISH: Makes this model available to other files.
// TECHNICAL: ES6 module export. Other files can `import Post from './Post.js'`

// ============================================================================
// USAGE EXAMPLE (not executed, just for understanding):
// ============================================================================
// import Post from './models/Post.js';
//
// // Create a new post
// const newPost = await Post.create({
//   title: 'My First Post',
//   slug: 'my-first-post',
//   content: 'This is the content...',
//   tags: ['javascript', 'nodejs'],
//   published: true
// });
//
// // Find all posts
// const allPosts = await Post.find();
//
// // Find posts by tag
// const reactPosts = await Post.find({ tags: 'react' });
//
// // Find one post by slug
// const post = await Post.findOne({ slug: 'my-first-post' });
// ============================================================================
