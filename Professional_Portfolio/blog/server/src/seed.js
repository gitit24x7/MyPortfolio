// ============================================================================
// seed.js - Database Seeder
// ============================================================================
//
// 🧠 WHAT IS THIS?
// "Seeding" means populating a database with initial data.
// It's like planting seeds in a garden so it's not empty when you start.
//
// ❓ WHEN DO WE USE IT?
// 1. Development: To quickly fill the database with dummy data for testing.
// 2. New Setup: When a new developer joins, they run this to get a working app.
// 3. Reset: To wipe the database and start fresh (clean slate).
//
// ⚠️ PRODUCTION WARNING:
// - NEVER run `deleteMany()` in production unless you are absolutely sure.
// - In production, you might use a seed script ONLY for initial setup (e.g., creating the first Admin user).
// - Usually, you check `if (process.env.NODE_ENV !== 'production')` before deleting.
//
// ============================================================================

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Post from './models/Post.js';

// Load environment variables (so we can connect to DB)
dotenv.config();

// ----------------------------------------------------------------------------
// THE DATA (Our "Seeds")
// ----------------------------------------------------------------------------
const samplePosts = [
    {
        title: 'Getting Started with React',
        slug: 'getting-started-with-react',
        content: 'React is a JavaScript library for building user interfaces...',
        excerpt: 'Learn the fundamentals of React including components, props, and state',
        tags: ['react', 'javascript', 'tutorial', 'frontend'],
        published: true,
        viewCount: 150
    },
    {
        title: 'Node.js Beyond Express',
        slug: 'nodejs-beyond-express',
        content: 'Node.js powers far more than just web servers...',
        excerpt: 'Node.js powers infrastructure, build tools, desktop apps, and more',
        tags: ['nodejs', 'backend', 'infrastructure'],
        published: true,
        viewCount: 89
    },
    {
        title: 'Draft: Upcoming React 19 Features',
        slug: 'draft-react-19-features',
        content: 'Draft post about upcoming features...',
        excerpt: 'Sneak peek at React 19',
        tags: ['react', 'news'],
        published: false,  // This one is a draft!
        viewCount: 5
    }
];

// ----------------------------------------------------------------------------
// THE SCRIPT
// ----------------------------------------------------------------------------
const seedDatabase = async () => {
    try {
        console.log('🌱 Starting Database Seed...');

        // 1. CONNECT to Database
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('✅ Connected to MongoDB');

        // 2. CLEAR existing data (OPTIONAL but good for dev)
        // ⚠️ DANGER: This deletes EVERYTHING in the 'posts' collection
        console.log('🧹 Clearing existing posts...');
        await Post.deleteMany({});
        console.log('✅ Database cleared');

        // 3. INSERT new data
        console.log('🚀 Inserting sample posts...');
        const posts = await Post.insertMany(samplePosts);
        console.log(`✅ ${posts.length} posts inserted successfully!`);

        // 4. DISCONNECT
        // Scripts should always exit when they are done.
        console.log('👋 Seeding complete. Exiting...');
        process.exit(0); // 0 = Success

    } catch (error) {
        console.error('❌ Error seeding database:', error.message);
        process.exit(1); // 1 = Failure
    }
};

// Execute the function
seedDatabase();
