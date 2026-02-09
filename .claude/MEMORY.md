# Session Memory — Backend Engineering Teaching

> **Purpose:** Resume teaching sessions from where we left off.
> **Last Updated:** 2026-02-08

---

## Teaching Context

### Role
You are an experienced Google full-stack developer teaching backend engineering and software engineering through this blog project.

### Teaching Approach
1. **Code-first, concept-second** — Walk through ACTUAL code line by line. Only explain a concept when it appears in the code.
2. **Just-in-time learning** — No pre-teaching abstract concepts. Trace back to first principles only when the concept is in use.
3. **Grill with questions** — Ask probing questions about the code being read
4. **Recursive explanations** — When a concept appears, break it down to first principles
5. **Verify understanding** — Student must explain concepts back like teaching someone else

**IMPORTANT:** Don't teach JS basics in isolation. Teach them when they appear in the codebase.

---

## Student's Current Level

### What They Know
- Middleware chaining (`next()` function and its purpose)
- Basic React (useState, useEffect)
- Has built working CRUD API with auth
- Understands JWT at conceptual level (wristband analogy)

### Gaps Identified (from Q&A)
- Couldn't explain what a server/port is fundamentally
- Didn't know Express routing syntax breakdown (`app.get()`, why no parentheses on handler)
- Didn't understand Promises and async/await from first principles
- Didn't know where `req` and `res` come from

### Documents Created for Learning
- `blog/BACKEND_FUNDAMENTALS.md` — First principles guide covering:
  - What is a server (ports, listening)
  - Express routing syntax breakdown
  - Promises and async/await
  - Request/Response objects
  - Middleware chain

---

## Project Status

### Completed Phases
- Phase 0: Foundations
- Phase 1: Backend Foundation
- Phase 2: Database Integration
- Phase 3: Complete Blog API
- Phase 4: Authentication & Security
- Phase 5: Frontend Foundation

### Incomplete Phases
- Phase 6: SEO with Vite-SSG
- Phase 7: Polish & Production

### Features Still Needed
| Feature | Backend | Frontend |
|---------|---------|----------|
| Edit post | Done | Not done |
| Delete post | Done | Not done |
| Tags filtering | Not done | Not done |
| Search | Not done | Not done |
| Comments | Not done | Not done |
| Likes | Not done | Not done |

---

## Pending Questions (Student Must Answer)

Before proceeding, student needs to answer these 5 questions:

1. **If port 3001 is busy, how do you run on a different port?**

2. **`GET` vs `POST` — which one sends data in the body?**

3. **`myFunction` vs `myFunction()` — what's the difference?**

4. **Why does `fetch()` need TWO `await`s?**

5. **What happens if your controller never calls `res.json()`?**

**Rule:** No guessing. Explain like teaching someone else.

---

## Next Topics to Cover (After Verification)

Once student answers correctly, move to:

1. **Error Handling** — Centralized error middleware, custom error classes
2. **Input Validation** — Joi/Zod, sanitization
3. **API Design** — Consistent response format, versioning
4. **Database Optimization** — Indexes, pagination
5. **Testing** — Unit tests for controllers

---

## Key Files in Project

```
Professional_Portfolio/
├── blog/
│   ├── server/
│   │   ├── src/
│   │   │   ├── server.js          # Express entry point
│   │   │   ├── controllers/       # Request handlers
│   │   │   ├── models/            # Mongoose schemas
│   │   │   ├── routes/            # API routes
│   │   │   └── middleware/        # Auth middleware
│   │   └── .env                   # Environment variables
│   ├── LEARNING_ROADMAP.md        # Main learning doc
│   ├── ROUTING_GUIDE.md           # Express routing guide
│   ├── PROBLEMS_FACED.md          # Debugging log
│   └── BACKEND_FUNDAMENTALS.md    # First principles (NEW)
└── src/
    └── pages/
        ├── Blog.jsx               # Blog listing
        ├── BlogPost.jsx           # Single post view
        ├── AdminLogin.jsx         # Auth form
        └── AdminDashboard.jsx     # Post creation
```

---

## How to Resume

When starting a new session, say:

> "Check the .claude folder for teaching context"

Then I will:
1. Read this MEMORY.md file
2. Pick up from pending questions
3. Continue the grill-and-teach approach

---

*Session paused: 2026-02-08*
