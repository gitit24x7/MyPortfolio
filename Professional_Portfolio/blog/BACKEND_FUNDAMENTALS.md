# Backend Fundamentals — First Principles Guide

> **Goal:** Understand backend engineering from the ground up, breaking every concept down recursively until we hit bedrock.
> **Approach:** Question-driven learning with tree-like explanations.

---

## Table of Contents

1. [What is a Server?](#1-what-is-a-server)
2. [Express Routing Syntax](#2-express-routing-syntax)
3. [Promises and Async/Await](#3-promises-and-asyncawait)
4. [Request and Response Objects](#4-request-and-response-objects)
5. [Middleware Chain](#5-middleware-chain)
6. [Verification Questions](#6-verification-questions)

---

## 1. What is a Server?

### The Recursive Breakdown

```
What is a "Backend Server"?
└── A program that LISTENS for requests and RESPONDS
    └── What is "listening"?
        └── The program opens a PORT (like a door number)
        └── It says: "I'm waiting at door 3001. Knock and I'll answer."
            └── What is a PORT?
                └── A number (0-65535) that identifies a specific program
                └── Like apartment numbers in a building
                    └── The building = your computer (IP address)
                    └── The apartment = the specific program (PORT)
```

### Why Can't Two Servers Use the Same Port?

If you run `node src/server.js` twice, the second one CRASHES with:

```
Error: EADDRINUSE: address already in use :::3001
```

**Why?**

```
Why can't two programs use the same port?
└── A port is like a PHONE NUMBER for programs
    └── When you call 3001, who picks up?
        └── Only ONE program can "own" a phone number at a time
        └── If two programs tried to own it, incoming calls wouldn't know who to go to
            └── So the OS (Windows/Mac/Linux) REFUSES to let the second program claim it
            └── It throws an error instead
```

**Real-world analogy:**
- Your computer is an apartment building
- Port 3001 is apartment #3001
- Express "moves into" that apartment when you start the server
- A second Express server tries to move in → Landlord (OS) says "Someone already lives there!"

### How to Use a Different Port

```javascript
// Option 1: Change in code
app.listen(3002, () => console.log('Running on 3002'));

// Option 2: Use environment variable
const PORT = process.env.PORT || 3001;
app.listen(PORT);

// Then run with:
// PORT=3002 node src/server.js
```

---

## 2. Express Routing Syntax

### Breaking Down `app.get('/api/posts', getAllPosts)`

Let's dissect this piece by piece:

---

### 2.1 What is `app`?

```
app
└── It's an OBJECT created by Express
    └── const app = express();
        └── What does express() return?
            └── An object with METHODS like .get(), .post(), .use(), .listen()
            └── This object IS your server
            └── It holds all your routes, middleware, and configuration
```

**Analogy:** Think of `app` as a **waiter's notebook**. You write down:
- "When someone asks for GET /api/posts, do THIS"
- "When someone asks for POST /api/posts, do THAT"

The notebook remembers all instructions. When a customer (request) comes in, the waiter looks up what to do.

---

### 2.2 HTTP Methods: `.get()` vs `.post()` vs others

```
HTTP Methods (Verbs)
└── GET = "Give me data" (READ)
│   └── Browser's default when you type a URL
│   └── Should NOT change anything on server
│   └── Example: Viewing a blog post
│
└── POST = "Here's new data, save it" (CREATE)
│   └── Sends data in the request BODY
│   └── Changes something on server
│   └── Example: Creating a new blog post
│
└── PUT = "Replace this entire thing" (UPDATE - full replacement)
│   └── Example: Updating all fields of a post
│
└── PATCH = "Update just these fields" (UPDATE - partial)
│   └── Example: Updating only the title
│
└── DELETE = "Remove this" (DELETE)
    └── Example: Deleting a post
```

**The code mapping:**

```javascript
app.get(...)    // Responds to GET requests
app.post(...)   // Responds to POST requests
app.put(...)    // Responds to PUT requests
app.patch(...)  // Responds to PATCH requests
app.delete(...) // Responds to DELETE requests
```

**Key insight:** When a user types a URL directly in the browser address bar, it's ALWAYS a GET request.

---

### 2.3 What is `'/api/posts'`?

```
'/api/posts'
└── This is the ROUTE PATH (the URL pattern to match)
    └── When a request comes to your server, Express asks:
        └── "Does the URL match any of my registered paths?"
            └── Request to /api/posts → YES, matches this route
            └── Request to /api/users → NO, doesn't match (404)
            └── Request to /api/posts/my-first-blog → NO, different route
                └── You'd need: app.get('/api/posts/:slug', ...)
```

**The `/api` prefix is a CONVENTION:**

```
/api/posts      ← For machines (returns JSON)
/posts          ← For humans (returns HTML page)
```

This separation lets you have:
- `GET /blog` → Returns a pretty webpage
- `GET /api/posts` → Returns raw JSON data for React to consume

---

### 2.4 Why No Parentheses on `getAllPosts`?

This is **critical JavaScript knowledge**:

```javascript
// WITH parentheses - CALLS the function immediately
getAllPosts()   // Execute RIGHT NOW, return the result

// WITHOUT parentheses - PASSES the function as a reference
getAllPosts     // "Here's the function itself. YOU call it later."
```

**Analogy:**

```
With parentheses: getAllPosts()
└── "Hey chef, make me a sandwich RIGHT NOW"
└── You get the sandwich immediately

Without parentheses: getAllPosts
└── "Hey, here's the chef's phone number. Call him when a customer orders."
└── You get a REFERENCE to the chef, not the sandwich
```

**In Express:**

```javascript
app.get('/api/posts', getAllPosts);
//                    ^^^^^^^^^^^
// "Express, when someone requests this route,
//  HERE is the function to call. Don't call it now.
//  Call it WHEN the request arrives."
```

**If you wrote this (WRONG):**

```javascript
app.get('/api/posts', getAllPosts());
//                               ^^
// This would EXECUTE getAllPosts immediately when the server starts,
// NOT when a request comes in. This is a bug.
```

**The difference visualized:**

```javascript
const a = myFunction;    // a = the function itself (a reference)
const b = myFunction();  // b = the RESULT of calling myFunction
```

---

## 3. Promises and Async/Await

This is where most beginners get confused. Let's go deep.

---

### 3.1 What is a Promise?

```
Promise
└── An OBJECT that represents "work in progress"
    └── It's like an ORDER RECEIPT at a restaurant
        └── You order food → You get a receipt (Promise)
        └── Receipt says: "Your order is being prepared"
        └── Later: Receipt updates to "Ready!" or "Sorry, we're out"
            └── Three states:
                ├── PENDING   = "Still cooking..."
                ├── FULFILLED = "Here's your food!" (success)
                └── REJECTED  = "Sorry, kitchen caught fire" (error)
```

**In code:**

```javascript
const orderReceipt = fetch('http://localhost:3001/api/posts');
console.log(orderReceipt);
// Output: Promise { <pending> }
// NOT the actual data! Just a receipt saying "working on it"
```

---

### 3.2 Why Does `fetch()` Return a Promise Instead of Actual Data?

```
Why not return data directly?
└── Because the internet is SLOW
    └── Your code runs in microseconds
    └── Network requests take 50-500 milliseconds
        └── That's 1000x slower!
            └── If JavaScript WAITED, your entire app would FREEZE
                └── No scrolling, no clicking, nothing
                └── The browser would show "Not Responding"
```

**JavaScript's solution: Don't wait. Keep moving.**

```javascript
console.log("1. Starting fetch...");
const promise = fetch('/api/posts');  // Starts request, returns immediately
console.log("2. Got promise:", promise);  // Runs INSTANTLY, doesn't wait
console.log("3. Continuing with other code...");

// Output:
// 1. Starting fetch...
// 2. Got promise: Promise { <pending> }
// 3. Continuing with other code...
// ... 200ms later, the data actually arrives (but we already moved on)
```

---

### 3.3 What Does `await` Actually DO?

```
await
└── PAUSES this function until the Promise resolves
    └── But ONLY this function, not the whole browser
        └── Other code can still run (that's why it's called "async")
```

**Without await:**

```javascript
async function getData() {
    const response = fetch('/api/posts');
    console.log(response);  // Promise { <pending> } ← USELESS!
}
```

**With await:**

```javascript
async function getData() {
    const response = await fetch('/api/posts');
    //               ^^^^^
    // "STOP HERE. Wait for the Promise to resolve.
    //  When it does, unwrap the result and give it to me."
    console.log(response);  // Response { status: 200, ... } ← ACTUAL DATA!
}
```

**The UNWRAPPING is key:**

```
Promise { <pending> }     ← A wrapped box
         ↓ await
Response { status: 200 }  ← The actual content inside the box
```

---

### 3.4 Why TWO Awaits for Fetch?

```javascript
const response = await fetch('/api/posts');  // Wait for server to respond
const data = await response.json();          // Wait for body to be parsed
```

```
Why two steps?
└── Step 1: fetch() completes when HEADERS arrive
│   └── The server said "200 OK, here comes data..."
│   └── But the BODY (actual JSON) is still streaming in
│
└── Step 2: .json() completes when BODY is fully received and parsed
    └── Now you have the actual JavaScript object
```

**Analogy:**

1. `await fetch()` = The delivery truck arrived at your door (you know it's coming)
2. `await response.json()` = You opened the package and took out the contents

---

### 3.5 The `async` Keyword Requirement

```javascript
// This works:
async function getData() {
    const data = await fetch('/api/posts');
}

// This CRASHES:
function getData() {
    const data = await fetch('/api/posts');
    // SyntaxError: await is only valid in async function
}
```

```
Why this rule?
└── JavaScript needs to know "this function might pause"
    └── The async keyword marks it as "pausable"
    └── Without it, JS doesn't know how to handle the pause
```

---

## 4. Request and Response Objects

### Where Do `req` and `res` Come From?

```javascript
export const getAllPosts = async (req, res) => {
    // Who gave us req and res?
};
```

**Answer: Express Creates and Injects Them**

```
When a request hits your server:
└── Express receives raw HTTP data from the network
    └── Express CREATES two objects:
        │
        ├── req (Request) = Everything about the INCOMING request
        │   ├── req.params   ← URL parameters (/posts/:id → req.params.id)
        │   ├── req.query    ← Query strings (?search=hello → req.query.search)
        │   ├── req.body     ← POST/PUT data (the JSON you sent)
        │   ├── req.headers  ← HTTP headers (Authorization, Content-Type)
        │   └── req.method   ← GET, POST, PUT, DELETE
        │
        └── res (Response) = Tools to SEND data back
            ├── res.json()     ← Send JSON response
            ├── res.send()     ← Send text/HTML response
            ├── res.status()   ← Set HTTP status code (200, 404, 500)
            └── res.redirect() ← Send user to different URL
```

**Express does this automatically:**

```javascript
// When request arrives at GET /api/posts:
const req = { /* ...Express fills this with request data... */ };
const res = { /* ...Express fills this with response methods... */ };

getAllPosts(req, res);  // Express CALLS your function with these objects
```

You never call `getAllPosts(req, res)` yourself. Express does it for you when a matching request arrives.

---

### 4.1 The `req` Object in Detail

```javascript
// Given this route:
app.get('/api/posts/:slug', getPostBySlug);

// And this request:
// GET /api/posts/my-first-blog?format=json
// Headers: { Authorization: "Bearer abc123" }

// Inside getPostBySlug, req contains:
req.params  = { slug: "my-first-blog" }   // From the URL path
req.query   = { format: "json" }          // From the ?query=string
req.headers = { authorization: "Bearer abc123" }
req.method  = "GET"
req.path    = "/api/posts/my-first-blog"
```

---

### 4.2 The `res` Object in Detail

```javascript
// Sending JSON (most common for APIs)
res.json({ success: true, data: posts });

// Setting status code + JSON
res.status(404).json({ success: false, message: "Not found" });

// Sending plain text
res.send("Hello World");

// Redirecting
res.redirect("/login");

// Chaining is possible because methods return res
res.status(201).json({ created: true });
```

---

### 4.3 What If You Forget to Send a Response?

```javascript
export const getAllPosts = async (req, res) => {
    const posts = await Post.find();
    // Oops, forgot to call res.json() or res.send()!
};
```

**What happens:**

1. Request comes in
2. Your function runs, gets data from database
3. Function ends... but you never sent anything back
4. The browser waits... and waits... and waits...
5. Eventually: **TIMEOUT ERROR** on the frontend

**The HTTP request-response cycle REQUIRES a response.** No response = browser hangs forever.

---

## 5. Middleware Chain

### What is Middleware?

```
Middleware
└── A function that runs BETWEEN the request arriving and your controller executing
    └── It can:
        ├── Modify the request (add data to req)
        ├── Modify the response (add headers)
        ├── End the request early (authentication failed)
        └── Pass control to the next function (call next())
```

---

### 5.1 The `next` Function

```javascript
export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: "No token" });
        // Notice: we DON'T call next() here
        // The request STOPS here
    }

    // Token is valid, continue to the next function
    next();
};
```

```
What is next()?
└── A function that says "I'm done, pass control to the next handler"
    └── If you DON'T call next():
        └── The request STOPS at your middleware
        └── The controller never runs
        └── (Unless you send a response, the request hangs)
```

---

### 5.2 Middleware Execution Order

```javascript
app.post('/api/posts', authMiddleware, validatePost, createPost);
//                     1st            2nd           3rd (controller)
```

**Execution flow:**

```
Request arrives
    ↓
authMiddleware runs
    ↓ (calls next())
validatePost runs
    ↓ (calls next())
createPost runs
    ↓ (calls res.json())
Response sent to client
```

**If authMiddleware doesn't call next():**

```
Request arrives
    ↓
authMiddleware runs
    ↓ (returns 401 error, no next())
    ✖ validatePost NEVER runs
    ✖ createPost NEVER runs
Response sent (401 Unauthorized)
```

---

### 5.3 Multiple Middleware Example

```javascript
// Logging middleware
const logRequest = (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();  // Always continue
};

// Auth middleware
const requireAuth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    next();
};

// Validation middleware
const validateBody = (req, res, next) => {
    if (!req.body.title) {
        return res.status(400).json({ error: "Title required" });
    }
    next();
};

// Route with all middleware
app.post('/api/posts', logRequest, requireAuth, validateBody, createPost);
```

---

### 5.4 Global vs Route-Specific Middleware

```javascript
// GLOBAL: Runs on EVERY request
app.use(express.json());       // Parse JSON bodies
app.use(cors());               // Enable CORS
app.use(logRequest);           // Log all requests

// ROUTE-SPECIFIC: Runs only on this route
app.post('/api/posts', requireAuth, createPost);
app.get('/api/posts', getAllPosts);  // No auth needed here
```

---

## 6. Verification Questions

Test your understanding:

### Level 1: Server Basics

1. If port 3001 is busy, how do you run on a different port?
2. What error do you get if you try to start two servers on the same port?

### Level 2: Routing

3. What's the difference between `GET` and `POST`?
4. Which HTTP method does the browser use when you type a URL in the address bar?
5. What's the difference between `myFunction` and `myFunction()`?

### Level 3: Async

6. Why does `fetch()` return a Promise instead of the actual data?
7. Why do you need TWO `await`s when using fetch?
8. What happens if you use `await` outside an `async` function?

### Level 4: Request/Response

9. Where do `req` and `res` come from?
10. What happens if your controller never calls `res.json()`?
11. How do you access URL parameters like `/posts/:id`?

### Level 5: Middleware

12. What does `next()` do?
13. What happens if you forget to call `next()` in middleware?
14. In `app.post('/api/posts', auth, validate, create)`, what order do they execute?

---

## The Complete Mental Model

```
1. Server starts → Express claims port 3001
2. Server waits for requests (listening)
3. Request arrives: GET /api/posts
4. Express matches route → app.get('/api/posts', getAllPosts)
5. Express creates req and res objects
6. Express calls: getAllPosts(req, res)
7. Your function queries database (await)
8. Your function sends response: res.json(posts)
9. Express sends HTTP response to browser
10. Browser receives JSON, React renders it
```

---

## Quick Reference Cheatsheet

### HTTP Methods

| Method | Purpose | Has Body? | Example |
|--------|---------|-----------|---------|
| GET | Read data | No | View blog posts |
| POST | Create data | Yes | Create new post |
| PUT | Replace data | Yes | Update entire post |
| PATCH | Partial update | Yes | Update just title |
| DELETE | Remove data | No | Delete a post |

### Common Status Codes

| Code | Meaning | When to Use |
|------|---------|-------------|
| 200 | OK | Successful GET/PUT/PATCH |
| 201 | Created | Successful POST |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Invalid input from client |
| 401 | Unauthorized | Missing/invalid token |
| 403 | Forbidden | Valid token but no permission |
| 404 | Not Found | Resource doesn't exist |
| 500 | Server Error | Something crashed |

### Response Format Convention

```javascript
// Success
res.status(200).json({
    success: true,
    data: posts
});

// Error
res.status(400).json({
    success: false,
    message: "Title is required"
});
```

---

*Document Created: 2026-02-08*

---
