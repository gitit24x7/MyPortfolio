/**
 * Projects Component (Bento Grid Layout)
 * A visually rich, grid-based layout for showcasing work.
 * Uses spanning columns and rows to create an interesting "masonry" feel.
 */

import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'

const projects = [
    {
        title: "React Mastery",
        description: "A quick practice platforom for react to build muscle memory, with little to less knowledge of ReactJS",
        tech: ["ReactJS", "Tailwind CSS", "Supabase", "Framer Motion", "PostgreSQL"],
        size: "large",
        color: "bg-blue-500/10",
        liveUrl: "https://reactmastery.xyz",
        githubUrl: "https://github.com/"
    },
    {
        title: "Headerly",
        description: "Create Professional high conversion linkedin banners within 60s for free",
        tech: ["React", "TypeScript", "TailwindCSS", "Lenis", "Framer Motion"],
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
        title: "Psachno",
        description: "Beginner friendly Open source issues finder",
        tech: ["React", "Reactbits", "TailwindCSS", "ExpressJS", "Render.com"],
        size: "large",
        liveUrl: "https://psachno.vercel.app",
        githubUrl: "https://github.com/gitit24x7/Psankho",
        color: "bg-orange-500/10"
    }
]

const Projects = () => {
    return (
        <section id="work" className="relative z-10 transition-colors duration-500">

            {/* Row 1: Header */}
            <div className="w-full border-b border-grid relative overflow-hidden">
                <div className="max-w-5xl mx-auto border-x border-grid relative z-10 h-12 flex items-center justify-center">
                    {/* Center Labels */}
                    <div className="flex items-center gap-6 overflow-x-auto no-scrollbar px-6">
                        <div className="px-6 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                            Status: Shipped
                        </div>
                        <div className="hidden md:block px-6 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                            Quality: Production
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2: Title & Intro */}
            <div className="w-full border-b border-grid">
                <div className="max-w-5xl mx-auto border-x border-grid">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end px-6 md:px-12 py-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-0 tracking-tight transition-colors">
                                Selected Work.
                            </h2>
                        </div>
                        <div>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                                A showcase of technical complexity and design precision.
                                Building software that feels as good as it looks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* Row 4: Bento Grid */}
            <div className="w-full border-b border-grid bg-slate-50/30 dark:bg-white/5">
                <div className="max-w-5xl mx-auto border-x border-grid">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-12">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`
                                    group relative p-6 rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden
                                    bg-white dark:bg-black
                                    hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300
                                    shadow-none hover:shadow-[0_0_1px_0px_rgba(255,165,0,1),0_0_3px_-1px_rgba(255,215,0,0.9)]
                                    ${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}
                                `}
                            >
                                {/* Background Splash */}
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

                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="text-xs font-mono text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-950 px-3 py-1 rounded-full border border-slate-200 dark:border-white/5 transition-colors">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-white/5">
                                            <a href={project.liveUrl || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                <ExternalLink className="w-4 h-4" />
                                                <span>Live Demo</span>
                                            </a>
                                            <a href={project.codeUrl || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                                <Github className="w-4 h-4" />
                                                <span>Code</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
