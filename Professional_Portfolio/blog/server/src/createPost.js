// ============================================================================
// createPost.js - HTTP Client Example
// ============================================================================
// This shows how to call your API programmatically using fetch.
// This is how your frontend will interact with the backend!
// ============================================================================

// Sample post data
const newPost = {
    title: 'Understanding JavaScript Closures',
    slug: 'understanding-javascript-closures',
    content: 'Closures are one of the most powerful features in JavaScript. A closure is a function that has access to variables in its outer scope, even after the outer function has returned. This guide explains closures with practical examples.',
    excerpt: 'Master JavaScript closures with practical examples',
    tags: ['javascript', 'tutorial', 'fundamentals'],
    published: true
};

// Function to create a post
async function createPost() {
    try {
        const response = await fetch('http://localhost:3001/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });

        const data = await response.json();

        if (data.success) {
            console.log('✅ Post created successfully!');
            console.log('Title:', data.data.title);
            console.log('Slug:', data.data.slug);
            console.log('Created at:', data.data.createdAt);
        } else {
            console.log('❌ Error:', data.message);
        }
    } catch (error) {
        console.error('❌ Request failed:', error.message);
    }
}

// Run it
createPost();

// ============================================================================
// HOW TO RUN THIS:
// ============================================================================
// 1. Make sure your server is RUNNING (node src/server.js)
// 2. In a NEW terminal, run: node src/createPost.js
// 3. The post will be created via HTTP request!
// ============================================================================
