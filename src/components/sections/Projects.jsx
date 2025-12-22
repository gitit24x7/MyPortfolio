/**
 * Projects Component (Bento Grid Layout)
 * A visually rich, grid-based layout for showcasing work.
 * Uses spanning columns and rows to create an interesting "masonry" feel.
 */

import { ArrowUpRight, Github } from 'lucide-react'

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A high-performance analytics dashboard for online retailers. Features real-time data visualization, inventory management, and profit tracking.",
        tech: ["Next.js", "TypeScript", "Tremor", "Supabase"],
        size: "large", // spans 2 cols
        color: "bg-blue-500/10"
    },
    {
        title: "AI Chat Interface",
        description: "Minimalist LLM chat interface with streaming responses and markdown support.",
        tech: ["React", "OpenAI API", "Tailwind"],
        size: "small",
        color: "bg-purple-500/10"
    },
    {
        title: "DevTools CLI",
        description: "Command line tool for scaffolding React projects with best practices built-in.",
        tech: ["Node.js", "Ink", "Chalk"],
        size: "small",
        color: "bg-emerald-500/10"
    },
    {
        title: "SaaS Landing Page",
        description: "High-conversion landing page with scroll animations and 3D elements.",
        tech: ["React", "Three.js", "Framer Motion"],
        size: "large",
        color: "bg-orange-500/10"
    }
]

const Projects = () => {
    return (
        <section id="work" className="py-24 relative z-10 transition-colors duration-500">
            <div className="max-w-[80rem] mx-auto px-6 border-b border-slate-200/50 dark:border-white/10 pb-24">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6 tracking-tight transition-colors">
                        Selected Work
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                        A showcase of technical complexity and design precision.
                        Building software that feels as good as it looks.
                    </p>
                </div>
                <a href="https://github.com" className="text-slate-900 dark:text-slate-50 flex items-center gap-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors pb-2 border-b border-transparent hover:border-slate-300">
                    View GitHub <ArrowUpRight className="w-4 h-4" />
                </a>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`
                                group relative p-6 rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden
                                bg-slate-50 dark:bg-white/5 backdrop-blur-sm
                                hover:bg-white dark:hover:bg-white/10 transition-all duration-300
                                hover:border-slate-300 dark:hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10
                                ${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}
                            `}
                        >
                            {/* Background Splash - Increased strength for Glow effect */}
                            <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${project.color}`} />

                            <div className="relative z-10 h-full flex flex-col justify-between gap-8">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 transition-colors">{project.title}</h3>
                                        <div className="p-2 bg-slate-100 dark:bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0">
                                            <ArrowUpRight className="w-5 h-5 text-slate-900 dark:text-slate-50" />
                                        </div>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 transition-colors">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-mono text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-950 px-3 py-1 rounded-full border border-slate-200 dark:border-white/5 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
