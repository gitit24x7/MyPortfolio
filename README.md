<p align="center">
  <img src="professional_portfolio/src/public/tech/Profile_pic.png" alt="Portfolio Preview" width="120" style="border-radius: 50%;" />
</p>

<h1 align="center">Aditya Ojha — Developer Portfolio</h1>

<p align="center">
  <strong>A premium, grid-based portfolio built with React 19 and modern web technologies</strong>
</p>

<p align="center">
  <a href="https://adityaojha.vercel.app">🌐 Live Site</a> •
  <a href="#features">✨ Features</a> •
  <a href="#tech-stack">🛠 Tech Stack</a> •
  <a href="#architecture">📐 Architecture</a> •
  <a href="#getting-started">🚀 Getting Started</a>
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

### 📊 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Split-row layout with profile image, status indicators, and social links |
| **Selected Work** | Bento grid showcasing projects with live/code links |
| **Experience** | Timeline-style professional experience display |
| **Technical Arsenal** | 4×4 grid of technologies with shimmer hover effects |
| **Figma Designs** | Gallery of design work with "pop" hover animations |
| **About** | Personal introduction with location and background |
| **Visitor Counter** | Real-time visitor tracking with animated display |

### 🔍 Search & Navigation
- **Command Palette** — Quick navigation to any section
- **Fixed Navigation** — Backdrop-blur navbar with India flag logo
- **Anchor Links** — Smooth scroll to Work, About, Blog, Contact

---

## 🛠 Tech Stack

### Core Framework
```
React 19.2.0          — UI Library with latest features
Vite 7.2.4            — Lightning-fast build tool
Tailwind CSS 4.1.18   — Utility-first styling (v4 with @theme)
```

### Animation & Interaction
```
Framer Motion 12.x    — Production-ready motion library
Lenis 1.3.17          — Smooth scroll engine
```

### UI Components
```
Lucide React          — Beautiful, consistent icons
@tremor/react         — Dashboard components
clsx + tailwind-merge — Conditional class utilities
```

### Development
```
ESLint 9.x            — Code quality enforcement
PostCSS + Autoprefixer — CSS processing
TypeScript Types      — Enhanced IDE support
```

---

## 📐 Architecture

```
src/
├── App.jsx                    # Root component & section composition
├── main.jsx                   # React DOM entry point
├── index.css                  # Global styles, CSS variables, Tailwind config
│
├── components/
│   ├── layout/
│   │   ├── Nav.jsx            # Navigation with theme toggle & search
│   │   ├── GridBackground.jsx # Full-page grid overlay
│   │   └── Footer.jsx         # Site footer with links
│   │
│   ├── sections/
│   │   ├── Hero.jsx           # Hero with gradient switcher
│   │   ├── Projects.jsx       # Bento grid project showcase
│   │   ├── Experience.jsx     # Professional timeline
│   │   ├── TechStack.jsx      # Technology grid
│   │   ├── FigmaDesigns.jsx   # Design portfolio
│   │   ├── About.jsx          # Personal introduction
│   │   └── CodeShowcase.jsx   # Code snippet display
│   │
│   ├── ui/
│   │   ├── CursorFollower.jsx # Custom cursor component
│   │   ├── SearchCommand.jsx  # Command palette modal
│   │   ├── VisitorCounter.jsx # Analytics display
│   │   ├── SectionSeparator.jsx
│   │   └── CodeBlock.jsx
│   │
│   └── utils/
│       └── SmoothScroll.jsx   # Lenis scroll wrapper
│
├── hooks/
│   └── useCalEmbed.js         # Cal.com scheduling integration
│
├── utils/
│   └── cn.js                  # clsx + tailwind-merge utility
│
└── docs/                      # Architecture documentation
    ├── ARCHITECTURAL_GUIDE.md
    ├── CODE_WALKTHROUGH.md
    └── HERO_DEEP_DIVE.md
```

### Key Design Patterns

#### 1. Centralized Grid Border System
All grid borders use a single `border-grid` utility class controlled by CSS variables:
```css
:root {
  --grid-border-light: var(--color-slate-300);
  --grid-border-dark: rgba(255, 255, 255, 0.20);
}
```

#### 2. Section Composition
Each section follows a consistent structure:
```jsx
<section className="relative z-10">
  {/* Row 1: Header badges */}
  <div className="w-full border-b border-grid">
    <div className="max-w-5xl mx-auto border-x border-grid">
      {/* Content */}
    </div>
  </div>
  {/* Row 2: Title */}
  {/* Row 3: Content grid */}
</section>
```

#### 3. Dark Mode Strategy
Uses Tailwind v4's class-based dark mode with manual DOM manipulation:
```jsx
document.documentElement.classList.add('dark')  // Enable
document.documentElement.classList.remove('dark') // Disable
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/gitit24x7/MyPortfolio.git

# Navigate to project
cd Professional_Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

---

## 📁 Project Structure Details

### Public Assets
```
public/
├── tech/             # Technology icons (React, Next.js, etc.)
├── figma/            # Figma design screenshots
└── Profile_pic.png   # Profile image
```

### Environment Variables
```env
# .env (if using visitor counter backend)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

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

### Modifying Grid Borders
Change the opacity/color in `index.css`:
```css
--grid-border-dark: rgba(255, 255, 255, 0.15); /* Adjust opacity */
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
