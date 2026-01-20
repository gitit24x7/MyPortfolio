# 🚀 Blog Application - Learning Roadmap

> **Goal:** Build a production-quality blog with CRUD, tags, search, comments, and likes.
> **Stack:** React (Vite-SSG) + Express.js + MongoDB
> **Approach:** First principles, recursive explanations, production-level engineering

---

## 📐 Architecture Overview

```
blog/
├── client/                 # React Frontend (Vite + SSG)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route-based pages
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API communication layer
│   │   ├── context/        # Global state (Auth, Theme)
│   │   └── utils/          # Helper functions
│   └── package.json
│
├── server/                 # Express Backend
│   ├── src/
│   │   ├── controllers/    # Request handlers (business logic)
│   │   ├── models/         # MongoDB schemas (data structure)
│   │   ├── routes/         # API endpoint definitions
│   │   ├── middleware/     # Auth, validation, error handling
│   │   ├── services/       # Business logic (reusable)
│   │   ├── utils/          # Helper functions
│   │   └── config/         # Environment, database config
│   ├── server.js           # Entry point
│   └── package.json
│
└── shared/                 # Shared types/constants (optional)
```

---

## 🎯 Learning Phases

### **PHASE 0: Foundations (Pre-requisite Understanding)**
Before writing any code, we'll understand:
- [ ] What is a REST API? (The contract between frontend and backend)
- [ ] What is MongoDB? (Document-based NoSQL database)
- [ ] What is Express? (Minimal Node.js web framework)
- [ ] MVC Architecture (Model-View-Controller pattern)
- [ ] Why separate client/server? (Separation of Concerns)

**Engineering Principles:**
- Separation of Concerns
- Single Responsibility Principle
- API-First Design

---

### **PHASE 1: Backend Foundation**
Build the Express server from scratch.

#### 1.1 Project Setup
- [ ] Initialize Node.js project
- [ ] Understanding `package.json` (dependencies, scripts, metadata)
- [ ] Install Express (what is a framework vs library?)
- [ ] Create entry point (`server.js`)
- [ ] Understanding the Node.js event loop (why Node for servers?)

#### 1.2 First API Endpoint
- [ ] Create a "Hello World" route
- [ ] Understanding HTTP methods (GET, POST, PUT, DELETE)
- [ ] Understanding request/response cycle
- [ ] What is middleware? (the Express pipeline)

#### 1.3 Project Structure
- [ ] Why organize code into folders?
- [ ] Routes vs Controllers vs Services (layered architecture)
- [ ] Environment variables (`.env` files, why secrets matter)

**Engineering Principles:**
- Don't Repeat Yourself (DRY)
- Single Responsibility Principle (SRP)
- Configuration as Code

---

### **PHASE 2: Database Integration**
Connect Express to MongoDB.

#### 2.1 MongoDB Setup
- [ ] What is MongoDB? (Document vs Relational databases)
- [ ] MongoDB Atlas setup (cloud database)
- [ ] Connection strings (URI structure explained)
- [ ] Mongoose ODM (why use an ODM?)

#### 2.2 Data Modeling
- [ ] What is a Schema? (Data contracts)
- [ ] Blog Post schema design
- [ ] Relationships in MongoDB (embedding vs referencing)
- [ ] Indexing (why and when)

#### 2.3 CRUD Operations
- [ ] Create: `Model.create()` 
- [ ] Read: `Model.find()`, `Model.findById()`
- [ ] Update: `Model.findByIdAndUpdate()`
- [ ] Delete: `Model.findByIdAndDelete()`

**Engineering Principles:**
- Data Integrity
- Schema Design Patterns
- N+1 Query Problem Awareness

---

### **PHASE 3: Complete Blog API**
Build all API endpoints.

#### 3.1 Blog Posts API
- [ ] `GET /api/posts` - List all posts (with pagination)
- [ ] `GET /api/posts/:id` - Get single post
- [ ] `POST /api/posts` - Create post (admin only)
- [ ] `PUT /api/posts/:id` - Update post (admin only)
- [ ] `DELETE /api/posts/:id` - Delete post (admin only)

#### 3.2 Tags API
- [ ] `GET /api/tags` - List all tags
- [ ] `GET /api/posts?tag=javascript` - Filter by tag

#### 3.3 Search API
- [ ] `GET /api/posts?search=react` - Search posts
- [ ] MongoDB text search vs regex
- [ ] Indexing for performance

#### 3.4 Comments API
- [ ] `GET /api/posts/:id/comments` - Get comments
- [ ] `POST /api/posts/:id/comments` - Add comment
- [ ] `DELETE /api/comments/:id` - Delete comment

#### 3.5 Likes API
- [ ] `POST /api/posts/:id/like` - Like a post
- [ ] `DELETE /api/posts/:id/like` - Unlike a post
- [ ] Preventing duplicate likes (by IP or user)

**Engineering Principles:**
- RESTful API Design
- Idempotency
- Pagination Patterns
- Input Validation

---

### **PHASE 4: Authentication & Security**
Protect your API.

#### 4.1 Admin Authentication
- [ ] JWT (JSON Web Tokens) explained
- [ ] Login endpoint
- [ ] Protecting routes (middleware)
- [ ] Password hashing (bcrypt)

#### 4.2 Security Best Practices
- [ ] Input sanitization (prevent NoSQL injection)
- [ ] Rate limiting (prevent abuse)
- [ ] CORS (Cross-Origin Resource Sharing)
- [ ] Helmet.js (security headers)

**Engineering Principles:**
- Defense in Depth
- Principle of Least Privilege
- Never Trust User Input

---

### **PHASE 5: Frontend Foundation**
Build the React client.

#### 5.1 Project Setup
- [ ] Vite project initialization
- [ ] Project structure (components, pages, services)
- [ ] React Router setup

#### 5.2 API Integration
- [ ] Axios/Fetch for API calls
- [ ] Service layer pattern
- [ ] Error handling in frontend
- [ ] Loading states

#### 5.3 Core Pages
- [ ] Home (blog listing)
- [ ] Single Post page
- [ ] Admin: Create/Edit post
- [ ] Search results page
- [ ] Tag filter page

**Engineering Principles:**
- Component Composition
- Presentational vs Container Components
- Optimistic Updates

---

### **PHASE 6: SEO with Vite-SSG**
Make it search engine friendly.

#### 6.1 Understanding SSG
- [ ] What is SSG vs SSR vs CSR?
- [ ] Why blogs need SSG
- [ ] How Vite-SSG works

#### 6.2 Implementation
- [ ] Install and configure vite-ssg
- [ ] Generate static pages at build time
- [ ] Dynamic routes for blog posts

#### 6.3 SEO Essentials
- [ ] Meta tags (title, description)
- [ ] Open Graph tags
- [ ] Sitemap generation
- [ ] robots.txt

**Engineering Principles:**
- Progressive Enhancement
- Performance Budgets
- Core Web Vitals

---

### **PHASE 7: Polish & Production**
Make it production-ready.

#### 7.1 Error Handling
- [ ] Global error handler (backend)
- [ ] Error boundaries (frontend)
- [ ] User-friendly error messages

#### 7.2 Performance
- [ ] Database query optimization
- [ ] Image optimization
- [ ] Caching strategies

#### 7.3 Deployment
- [ ] Backend: Railway/Render/Fly.io
- [ ] Frontend: Vercel/Netlify
- [ ] MongoDB Atlas production setup
- [ ] Environment variables in production

---

## 📋 Feature Checklist

| Feature | Backend API | Frontend UI | Status |
|---------|-------------|-------------|--------|
| List posts | `GET /api/posts` | Home page | ⬜ |
| View post | `GET /api/posts/:id` | Post page | ⬜ |
| Create post | `POST /api/posts` | Admin form | ⬜ |
| Edit post | `PUT /api/posts/:id` | Admin form | ⬜ |
| Delete post | `DELETE /api/posts/:id` | Admin action | ⬜ |
| Tags | Query param | Tag filter UI | ⬜ |
| Search | Query param | Search bar | ⬜ |
| Comments | `/api/posts/:id/comments` | Comment section | ⬜ |
| Likes | `/api/posts/:id/like` | Like button | ⬜ |
| Admin auth | `/api/auth/login` | Login page | ⬜ |

---

## 🏁 Ready to Begin?

We'll start with **Phase 0: Foundations** — understanding the concepts before writing any code.

Then move to **Phase 1.1: Backend Project Setup** — creating your first Express server.

---

## 🐛 Troubleshooting Log

### MongoDB Atlas Connection Issues (Solved ✅)

**Date:** 2026-01-17 to 2026-01-19

#### Problem Summary
MongoDB Atlas connection was hanging indefinitely, preventing the server from starting properly. The connection attempt would not timeout and no error messages were displayed.

#### Issues Encountered & Solutions

##### 1. **Node.js Version Compatibility (BSON Error)**
**Problem:** 
- Node.js v22 and v24 had compatibility issues with the MongoDB BSON library
- Error: `Cannot read property 'BSON.onDemand.NumberUtils.getInt32LE'`

**Attempted Solutions:**
- Tried downgrading to Node v20 using `nvm-windows`
- Reinstalled dependencies multiple times
- Updated mongoose and mongodb packages to latest versions

**Final Solution:**
- Downgraded `mongodb` driver to version `6.3.0` specifically
- Command: `npm install mongodb@6.3.0`
- This version has better compatibility with newer Node versions

##### 2. **Wrong Working Directory**
**Problem:**
- Running `node server.js` from `blog/server/src/` directory
- `.env` file is located in `blog/server/` (one level up)
- `dotenv` couldn't find the environment variables
- Error: `Connection string: Missing!` and `The uri parameter to openUri() must be a string, got undefined`

**Solution:**
- **ALWAYS run the server from `blog/server/` directory** (where `package.json` is)
- Correct command: `node src/server.js` (from the `blog/server` folder)
- OR use: `npm run dev` which runs the correct path automatically

##### 3. **Password Reset Required**
**Problem:**
- Original MongoDB Atlas password may have been incorrect or expired
- Connection would hang without clear error message

**Solution:**
- Reset password in MongoDB Atlas:
  1. Go to atlas.mongodb.com → Database Access
  2. Click "Edit" on the user
  3. Click "Edit Password"
  4. Generate new secure password
  5. Copy the new password immediately
  6. Update `.env` file with new password

##### 4. **Network Access Configuration**
**Problem:**
- IP address not whitelisted in MongoDB Atlas

**Solution:**
- Verified `0.0.0.0/0` (allow from anywhere) is in Network Access
- MongoDB Atlas Dashboard → Network Access → Add IP Address → Allow Access from Anywhere

#### Key Learnings

1. **Always run Node.js from the correct directory**
   - The directory must contain `.env` and `package.json`
   - Use `npm run dev` instead of `node ...` to avoid path issues

2. **MongoDB driver compatibility matters**
   - Stick to stable versions (mongodb@6.3.0 works well with Node 22+)
   - Don't always use `@latest` - sometimes older is more stable

3. **Connection troubleshooting checklist:**
   - ✅ Is `.env` file in the correct location?
   - ✅ Is the password correct? (try resetting it)
   - ✅ Is `0.0.0.0/0` in MongoDB Atlas Network Access?
   - ✅ Are you running from the correct directory?
   - ✅ Is the `mongodb` package version compatible?

4. **How to verify successful connection:**
   - Look for: `✅ MongoDB Connected: [cluster-hostname].mongodb.net`
   - The cluster hostname (e.g., `ac-hcsd-xyz.mongodb.net`) is unique to your database
   - This is normal and means connection succeeded

#### Final Working Configuration

**File Structure:**
```
blog/server/
├── .env                    ← Environment variables (DATABASE_URL)
├── package.json           ← Dependencies
├── node_modules/
└── src/
    └── server.js          ← Server code
```

**Command to run:**
```bash
cd blog/server
node src/server.js
# OR
npm run dev
```

**Dependencies (package.json):**
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.0",
    "mongodb": "6.3.0",     ← IMPORTANT: Version 6.3.0
    "dotenv": "^16.3.1"
  }
}
```

**Expected successful output:**
```
Attempting to connect to MongoDB...
Connection string: Found
✅ MongoDB Connected: ac-xxxxx-xxxxx.mongodb.net

╔════════════════════════════════════════════════════════════╗
║   🚀 Blog API Server is running!                           ║
║   → Local:   http://localhost:3001                         ║
║   → Health:  http://localhost:3001/health                  ║
╚════════════════════════════════════════════════════════════╝
```

#### Status: ✅ RESOLVED
- MongoDB Atlas connection working
- Server running successfully
- API endpoints responding correctly
- Ready to proceed with Schema definition (Phase 2.2)

---

*Last Updated: 2026-01-19*

