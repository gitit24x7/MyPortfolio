// ============================================================================
// server.js - The Entry Point of Our Express Application
// ============================================================================
// This file is the "main" of our backend. When you run `npm start`, Node.js
// executes this file first. Think of it as the "App.jsx" of your backend.
// ============================================================================

// ----------------------------------------------------------------------------
// STEP 1: Import Dependencies
// ----------------------------------------------------------------------------
// We use ES Module syntax (import/export) instead of CommonJS (require).
// This was enabled by "type": "module" in package.json.

// IMPORTANT: dotenv must be imported FIRST, before any other imports.
// This loads environment variables from .env file into process.env.
import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js';
import authRoutes from './routes/authRoutes.js';
// What is `express`?
// - It's a function that, when called, creates an Express application.
// - This application is an object with methods to:
//   - Define routes (app.get, app.post, etc.)
//   - Configure middleware (app.use)
//   - Start a server (app.listen)

// ----------------------------------------------------------------------------
// STEP 2: Create the Express Application
// ----------------------------------------------------------------------------

const app = express();

// `app` is now an Express application instance.
// Think of it as creating an empty restaurant — no menu, no kitchen, no staff yet.
// We'll add all of that in the following steps.

// ----------------------------------------------------------------------------
// STEP 3: Define the Port
// ----------------------------------------------------------------------------

const PORT = process.env.PORT || 3001;

// What is `process.env`?
// - `process` is a global Node.js object with info about the current process.
// - `process.env` contains environment variables (key-value pairs).
// - Environment variables are used to configure apps without changing code.
//
// Why `process.env.PORT || 5000`?
// - In production (Heroku, Railway, etc.), the hosting platform sets PORT.
// - In development, PORT is undefined, so we fall back to 5000.
// - This is called "defensive programming" — handle both cases gracefully.

// ============================================================================
// STEP 4: MIDDLEWARE - The Express Pipeline
// ============================================================================
// Middleware functions are executed IN ORDER for every request.
// Think of it as an assembly line — each station does something to the product.
//
// Order matters! Middleware defined first runs first.
// ============================================================================

// ----------------------------------------------------------------------------
// 4.1: Built-in Middleware - JSON Body Parser
// ----------------------------------------------------------------------------

// CORS Configuration - explicitly allow your frontend domain(s)
const allowedOrigins = [
    'https://www.adityaojha.dev',
    'https://adityaojha.dev',
    'http://localhost:5173',  // Vite dev server
    'http://localhost:3000',
    'https://adityaojha.vercel.app'
];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (e.g. curl, Postman, server-to-server)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error(`CORS policy: Origin ${origin} not allowed`));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Handle preflight OPTIONS requests for all routes
app.options('*', cors());

app.use(express.json());

// What does `express.json()` do?
// 
// When a client sends a POST/PUT request with JSON data, it arrives as a
// raw string in the request body. This middleware:
//   1. Checks if Content-Type is 'application/json'
//   2. Reads the raw body stream
//   3. Parses the JSON string into a JavaScript object
//   4. Attaches it to `req.body`
//
// WITHOUT this middleware, req.body would be undefined.
//
// Example:
//   Client sends: POST /api/posts with body '{"title": "Hello"}'
//   After this middleware: req.body = { title: "Hello" }
//
// This is REQUIRED for any API that accepts JSON input.

// ----------------------------------------------------------------------------
// 4.2: Built-in Middleware - URL-Encoded Body Parser
// ----------------------------------------------------------------------------

app.use(express.urlencoded({ extended: true }));

// What does `express.urlencoded()` do?
//
// Parses URL-encoded form data (like from HTML forms).
// Example: name=John&age=25 → { name: "John", age: "25" }
//
// The `extended: true` option allows parsing of nested objects.
// Example: user[name]=John → { user: { name: "John" } }
//
// Even if you're building an API, include this for flexibility.

// ----------------------------------------------------------------------------
// 4.3: Custom Middleware - Request Logger
// ----------------------------------------------------------------------------
// This is a CUSTOM middleware we're creating. It logs every request.
// This is how you learn what's happening in your server.

const requestLogger = (req, res, next) => {
    // Get the current timestamp
    const timestamp = new Date().toISOString();

    // Log the request method, URL, and timestamp
    console.log(`[${timestamp}] ${req.method} ${req.url}`);

    // CRITICAL: Call next() to pass control to the next middleware
    // If you forget this, the request will hang forever!
    next();
};

// Register the logger middleware
app.use(requestLogger);

// What does `app.use()` do?
//
// `app.use(middleware)` — Apply middleware to ALL routes
// `app.use('/api', middleware)` — Apply only to routes starting with /api
// `app.get('/posts', middleware, handler)` — Apply only to this specific route
//
// We used `app.use(requestLogger)` so it runs for EVERY request.

// ----------------------------------------------------------------------------
// 4.4: Understanding the Middleware Flow
// ----------------------------------------------------------------------------
//
// When a request comes in for GET /, here's what happens:
//
// 1. express.json() runs → checks for JSON body → calls next()
// 2. express.urlencoded() runs → checks for form data → calls next()
// 3. requestLogger runs → logs the request → calls next()
// 4. app.get('/') handler runs → sends response
//
// If any middleware sends a response (like an auth check failing),
// the chain stops there — subsequent middleware won't run.
//
// This is the "Chain of Responsibility" design pattern in action.

// ============================================================================
// STEP 5: Define Routes
// ============================================================================

// ----------------------------------------------------------------------------
// 5.1: Root Endpoint - API Documentation
// ----------------------------------------------------------------------------

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Blog API!',
        version: '1.0.0',
        endpoints: {
            posts: '/api/posts',
            tags: '/api/tags'
        }
    });
});

// Let's break down `app.get('/', (req, res) => { ... })`:
//
// `app.get`
//   - This registers a route handler for HTTP GET requests.
//   - Other methods: app.post(), app.put(), app.delete(), app.patch()
//
// `'/'`
//   - This is the path/endpoint. '/' means the root of your API.
//   - If your server is at localhost:5000, this handles localhost:5000/
//
// `(req, res) => { ... }`
//   - This is the callback function (route handler).
//   - It's called whenever someone makes a GET request to '/'.
//   - Parameters:
//     - `req` (request): Contains info about the incoming request
//       - req.params (URL parameters like /posts/:id)
//       - req.query (query strings like ?search=react)
//       - req.body (POST/PUT request body)
//       - req.headers (HTTP headers)
//     - `res` (response): Methods to send a response back
//       - res.json() — Send JSON (most common for APIs)
//       - res.send() — Send text/HTML
//       - res.status() — Set HTTP status code
//       - res.redirect() — Redirect to another URL
//
// `res.json({ ... })`
//   - Sends a JSON response.
//   - Automatically sets Content-Type: application/json header.
//   - Converts JavaScript object to JSON string.

// ----------------------------------------------------------------------------
// STEP 5: Health Check Endpoint (Production Best Practice)
// ----------------------------------------------------------------------------

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString()
    });
});

// Why a health check endpoint?
// - Load balancers and monitoring tools ping this to check if your server is alive.
// - If it returns 200, the server is considered healthy.
// - If it fails, the system can restart your server or route traffic elsewhere.
// - This is STANDARD PRACTICE at every tech company.

// ============================================================================
// STEP 6: Connect to Database (MongoDB)
// ============================================================================

const connectDB = async () => {
    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    if (mongoose.connection.readyState === 1) {
        return; // Already connected
    }
    
    if (mongoose.connection.readyState === 2) {
        return; // Already attempting to connect
    }

    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL environment variable is not set. Add it in Vercel → Settings → Environment Variables.');
    }

    console.log('Attempting to connect to MongoDB...');
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('❌ Failed to connect to MongoDB.');
        if (error.name === 'MongooseServerSelectionError') {
            console.error('-> Reason: Connection timeout. This is usually caused by:');
            console.error('   1. MongoDB Atlas Network Access is not set to 0.0.0.0/0');
            console.error('   2. The connection limit was reached (too many serverless functions).');
        } else {
            console.error(`-> Reason: ${error.message}`);
        }
        throw error; // Re-throw so the middleware catches it and returns 503
    }
};

// Middleware: Ensure DB is connected before API routes run
// In serverless environments, we must evaluate the connection state on EVERY request
app.use('/api', async (req, res, next) => {
    try {
        await connectDB();
        
        // Check if we actually connected or are currently connecting
        if (mongoose.connection.readyState !== 1 && mongoose.connection.readyState !== 2) {
            console.error('⚠️ Database state is disconnected after attempted connection.');
            return res.status(503).json({ error: 'Database unavailable. Connection failed or was dropped.' });
        }
        next();
    } catch (err) {
        console.error(`🚨 Critical DB Error on request to ${req.originalUrl}:`, err.message);
        res.status(503).json({ 
            error: 'Database unavailable.',
            details: 'Please check your DB connection limits or Atlas IP access.' 
        });
    }
});

// ----------------------------------------------------------------------------
// API ROUTES
// ----------------------------------------------------------------------------
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// ----------------------------------------------------------------------------
// STEP 7: Start the Server (Modified for Vercel)
// ----------------------------------------------------------------------------

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// For Vercel: Export the app
export default app;

// What does `app.listen(PORT, callback)` do?
//
// 1. Creates an HTTP server (using Node's built-in `http` module internally)
// 2. Binds the server to the specified PORT
// 3. Starts listening for incoming connections
// 4. Calls the callback function once the server is ready
//
// The callback is optional, but useful for logging that the server started.
//
// IMPORTANT: This is a BLOCKING operation in the sense that your program
// keeps running (the event loop stays open) waiting for requests.
// If you see the console output, the server is running and waiting.

// ============================================================================
// SUMMARY: What We Built
// ============================================================================
//
// 1. Imported Express
// 2. Created an Express app instance
// 3. Defined a PORT with environment variable fallback
// 4. Created two routes:
//    - GET / → Returns API info (documentation/welcome)
//    - GET /health → Health check for monitoring
// 5. Started the server on the specified port
//
// NEXT STEPS:
// - Add more routes (POST /api/posts, GET /api/posts, etc.)
// - Add middleware (CORS, body parsing, error handling)
// - Connect to MongoDB
// ============================================================================
