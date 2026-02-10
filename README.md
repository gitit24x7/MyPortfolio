<p align="center">
  <img src="https://github.com/gitit24x7/MyPortfolio/blob/main/Professional_Portfolio/public/tech/Profile_pic.png" alt="Portfolio Preview" width="120" style="border-radius: 50%;" />
</p>

<h1 align="center">Aditya Ojha — Developer Portfolio</h1>

<p align="center">
  <strong>A premium, full-stack portfolio with an integrated blog system — built with React 19, Express, and MongoDB</strong>
</p>

<p align="center">
  <a href="https://adityaojha.dev" target="_blank" rel="noopener noreferrer">🌐 Live Site</a> •
  <a href="#features">✨ Features</a> •
  <a href="#tech-stack">🛠 Tech Stack</a> •
  <a href="#architecture">📐 Architecture</a> •
  <a href="#getting-started">🚀 Getting Started</a> •
  <a href="#deployment">☁️ Deployment</a>
</p>

---

## 🎨 Design Philosophy

This portfolio follows a **"Technical Precision"** aesthetic — a grid-based, high-contrast design language inspired by:

- **Bloomberg Terminal** — Information density with clarity
- **Linear** — Clean, systematic design with subtle animations
- **Vercel** — Minimalist elegance with purposeful whitespace

### Theme Concept

| Aspect | Implementation |
|--------|----------------|
| **Layout** | Strict grid system with consistent 5xl max-width container |
| **Typography** | Inter font family with tight tracking for headings |
| **Colors** | Slate-based palette with emerald/amber accents |
| **Borders** | Unified `border-grid` utility with centralized control |
| **Dark Mode** | Full dark mode support with smooth drop transition |
| **Motion** | Subtle, purposeful animations using Framer Motion |

---

## ✨ Features

### 🌓 Liquid Drop Theme Transition
A beautiful, instant theme switch with a liquid drop animation that expands from the toggle button:
- Smooth `clip-path` animation using custom easing
- Spring-based icon rotation with glow effects
- Ripple feedback on the toggle button

### 🎯 Interactive Elements
- **Custom Cursor Follower** — A playful, context-aware cursor that responds to hoverable elements
- **Smooth Scroll** — Lenis-powered butter-smooth scrolling experience
- **Command Palette** — Spotlight-style search with `Cmd+K` / `Ctrl+K`
- **Gradient Switcher** — Switchable hero gradients (Deep Space, Obsidian Luster, Aurora Borealis)

### 📊 Portfolio Sections

| Section | Description |
|---------|-------------|
| **Hero** | Split-row layout with profile image, status indicators, and social links |
| **Selected Work** | Bento grid showcasing projects with live/code links |
| **Experience** | Timeline-style professional experience display |
| **Technical Arsenal** | 4×4 grid of technologies with shimmer hover effects |
| **Figma Designs** | Gallery of design work with "pop" hover animations |
| **About** | Personal introduction with CTA button |
| **Visitor Counter** | Real-time visitor tracking with animated display |

### 📝 Blog System (Full Stack)
- **Blog Feed** (`/blog`) — Grid of posts fetched from the API
- **Single Post** (`/blog/:slug`) — Dynamic post pages with full content
- **Admin Login** (`/admin`) — Secured admin authentication with JWT
- **Admin Dashboard** (`/admin/dashboard`) — Create, Edit, and Delete posts
- **404 Page** — Custom animated "Signal Lost" page for missing routes

### 🔍 SEO & Optimization
- **React Helmet** — Dynamic `<title>` and `<meta>` tags per page
- **Open Graph / Twitter Cards** — Rich social sharing previews
- **Sitemap & Robots.txt** — Search engine indexing support
- **Vercel Analytics** — Built-in traffic tracking

---

## 🛠 Tech Stack

### Frontend
```
React 19.2.0            — UI Library
React Router DOM 7.x    — Client-side routing
Vite 6.0.0              — Build tool
Tailwind CSS 4.0.0      — Utility-first styling (v4 with @theme)
Framer Motion 12.x      — Animation library
Lenis 1.3.17            — Smooth scroll engine
react-helmet-async      — Dynamic SEO meta tags
Lucide React            — Icon library
clsx + tailwind-merge   — Conditional class utilities
@vercel/analytics       — Traffic analytics
```

### Backend
```
Express 5.x             — Node.js web framework
Mongoose 9.x            — MongoDB ODM
bcryptjs                — Password hashing
jsonwebtoken (JWT)      — Authentication tokens
cors                    — Cross-origin resource sharing
dotenv                  — Environment variable management
```

### Database
```
MongoDB Atlas            — Cloud-hosted NoSQL database
```

---

## 📐 Architecture

```
Professional_Portfolio/
├── src/                           # Frontend Source
│   ├── App.jsx                    # Root component & routing
│   ├── main.jsx                   # Entry point (HelmetProvider)
│   ├── index.css                  # Global styles & Tailwind config
│   │
│   ├── components/
│   │   ├── common/
│   │   │   └── SEO.jsx            # Reusable SEO meta tag component
│   │   ├── layout/
│   │   │   ├── Nav.jsx            # Navigation with theme toggle & search
│   │   │   ├── GridBackground.jsx # Full-page grid overlay
│   │   │   └── Footer.jsx         # Site footer with links
│   │   ├── sections/
│   │   │   ├── Hero.jsx           # Hero with gradient switcher
│   │   │   ├── Projects.jsx       # Bento grid project showcase
│   │   │   ├── Experience.jsx     # Professional timeline
│   │   │   ├── TechStack.jsx      # Technology grid
│   │   │   ├── FigmaDesigns.jsx   # Design portfolio
│   │   │   ├── About.jsx          # Personal introduction
│   │   │   └── CodeShowcase.jsx   # Code snippet display
│   │   ├── ui/
│   │   │   ├── CursorFollower.jsx # Custom cursor component
│   │   │   ├── SearchCommand.jsx  # Command palette modal
│   │   │   ├── VisitorCounter.jsx # Analytics display
│   │   │   ├── SectionSeparator.jsx
│   │   │   └── CodeBlock.jsx      # Syntax-highlighted code blocks
│   │   └── utils/
│   │       └── SmoothScroll.jsx   # Lenis scroll wrapper
│   │
│   ├── pages/
│   │   ├── Home.jsx               # Main portfolio page
│   │   ├── Blog.jsx               # Blog feed (fetches from API)
│   │   ├── BlogPost.jsx           # Single post page (dynamic)
│   │   ├── AdminLogin.jsx         # Admin authentication
│   │   ├── AdminDashboard.jsx     # Post management (CRUD)
│   │   └── NotFound.jsx           # 404 page with animation
│   │
│   ├── hooks/
│   │   └── useCalEmbed.js         # Cal.com scheduling integration
│   └── utils/
│       └── cn.js                  # clsx + tailwind-merge utility
│
├── blog/server/                   # Backend API
│   ├── src/
│   │   ├── server.js              # Express app entry point
│   │   ├── controllers/           # Route handlers
│   │   ├── models/                # Mongoose schemas (Post, Admin)
│   │   ├── routes/                # API route definitions
│   │   └── middleware/            # Auth middleware (JWT)
│   ├── vercel.json                # Vercel serverless config
│   └── package.json
│
├── public/                        # Static assets
│   ├── tech/                      # Technology icons
│   ├── robots.txt                 # Search engine rules
│   └── sitemap.xml                # SEO sitemap
│
└── vercel.json                    # Frontend SPA routing config
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm
- MongoDB Atlas account (for the blog backend)

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/gitit24x7/MyPortfolio.git

# Navigate to frontend
cd Professional_Portfolio

# Install dependencies
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:3001" > .env

# Start development server
npm run dev
```

### Backend Setup

```bash
# Navigate to backend
cd Professional_Portfolio/blog/server

# Install dependencies
npm install

# Create .env file with your credentials
# DATABASE_URL=mongodb+srv://your-connection-string
# JWT_SECRET=your-secret-key

# Start backend server
npm run dev
```

### Available Scripts

| Command | Location | Description |
|---------|----------|-------------|
| `npm run dev` | Frontend | Start Vite dev server with HMR |
| `npm run build` | Frontend | Production build to `dist/` |
| `npm run preview` | Frontend | Preview production build locally |
| `npm run dev` | Backend | Start Express server with watch mode |
| `npm start` | Backend | Start Express server (production) |

---

## ☁️ Deployment

This project is a **Monorepo** — both Frontend and Backend live in one repository.
Deploy **both** to Vercel for free.

### 1. Deploy Frontend (Vercel)
1.  Push code to GitHub.
2.  Import repository to [Vercel](https://vercel.com).
3.  **Root Directory:** `Professional_Portfolio`
4.  **Build Command:** `npm run build`
5.  **Output Directory:** `dist`
6.  **Environment Variables:**
    *   `VITE_API_URL` → Your Backend URL (from Step 2)

### 2. Deploy Backend (Vercel)
1.  Import the **same** repository to Vercel as a **new project**.
2.  **Project Name:** `my-portfolio-backend`
3.  **Root Directory:** `Professional_Portfolio/blog/server`
4.  **Framework Preset:** `Other`
5.  **Environment Variables:**
    *   `DATABASE_URL` → Your MongoDB Atlas connection string
    *   `JWT_SECRET` → A random secret string
6.  Click **Deploy** and copy the domain.

### 3. Connect Them
1.  Go to your **Frontend** project on Vercel → Settings → Environment Variables.
2.  Set `VITE_API_URL` to your Backend URL (e.g., `https://my-backend.vercel.app`).
3.  **Redeploy** the Frontend.

---

## 🎭 Customization

### Changing Gradients
Edit the `gradients` array in `Hero.jsx`:
```javascript
const gradients = [
    { name: "Deep Space", class: "bg-gradient-to-br from-black via-indigo-950 ..." },
    { name: "Custom", class: "bg-gradient-to-br from-..." }
]
```

### Adding Projects
Update the `projects` array in `Projects.jsx`:
```javascript
{
    title: "New Project",
    description: "...",
    tech: ["React", "Node.js"],
    size: "large", // or "small"
    liveUrl: "https://...",
    githubUrl: "https://github.com/..."
}
```

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Design inspiration: [Linear](https://linear.app), [Vercel](https://vercel.com)
- Icons: [Lucide](https://lucide.dev), [Devicon](https://devicon.dev)
- Smooth scroll: [Lenis](https://lenis.studiofreight.com)

---

<p align="center">
  <strong>Built with ❤️ by <a href="https://twitter.com/buggy247_">Aditya Ojha</a></strong>
</p>
