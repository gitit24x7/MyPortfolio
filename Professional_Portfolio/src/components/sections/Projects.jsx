/**
 * Projects Component (Bento Grid Layout)
 * A visually rich, grid-based layout for showcasing work.
 * Uses spanning columns and rows to create an interesting "masonry" feel.
 */

import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'

const projects = [
    {
        title: "React Mastery",
        description: "A quick practice platform for react to build muscle memory, with little to less knowledge of ReactJS",
        tech: ["ReactJS", "Tailwind CSS", "Supabase", "Framer Motion", "PostgreSQL"],
        size: "large",
        color: "bg-amber-500/30",
        liveUrl: "https://reactmastery.xyz",
        githubUrl: "https://github.com/gitit24x7/React-Mastery"
    },
    {
        title: "SprintMagic",
        description: "Project planning & Tracking Platform for developers as a lite alternative for JIRA",
        tech: ["TypeScript", "TailwindCSS", "Lenis", "Framer Motion"],
        size: "small",
        color: "bg-amber-500/30",
        liveUrl: "https://sprintmagic.vercel.app",
        githubUrl: "https://github.com/gitit24x7/sprintmagic"
    },
    {
        title: "System Design Simulator",
        description: "Create premium looking system designs and then chaos test them with amazing feedbacks for learning as well",
        tech: ["NextJS, Tailwindcss", "Lenis", "React-Flow"],
        size: "small",
        color: "bg-amber-500/30",
        liveUrl: "https://sdsim.vercel.app",
        githubUrl: "https://github.com/gitit24x7/system-design-simulator"
    },
    {
        title: "Psachno",
        description: "Beginner friendly Open source issues finder. It surfaces all the new beginner friendly issues being tagged and created on github. Users can also filter as per their interest and fields",
        tech: ["React", "Reactbits", "TailwindCSS", "ExpressJS", "Render.com"],
        size: "large",
        liveUrl: "https://psachno.vercel.app",
        githubUrl: "https://github.com/gitit24x7/Psankho",
        color: "bg-amber-500/30"
    }
]

const Projects = () => {
    return (
        <section id="work" className="relative z-10 transition-colors duration-500">

            {/* Row 1: Header - Availability */}
            <div className="w-full border-b border-grid relative overflow-hidden">
                <div className="max-w-5xl mx-auto border-x border-grid relative z-10 h-12 flex items-center justify-center">
                    {/* Center Labels */}
                    <div className="flex items-center gap-6 overflow-x-auto no-scrollbar px-6">
                        <div className="px-6 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                            Status: Open for Work
                        </div>
                        <div className="hidden md:block px-6 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                            Freelance: Available
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
                                PROJECTS.
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
                                    hover:border-amber-500/50 dark:hover:border-amber-400/50 transition-all duration-500
                                    shadow-none hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]
                                    ${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}
                                `}
                            >
                                {/* Background Splash */}
                                <div className={`absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 ${project.color}`} />

                                <div className="relative z-10 h-full flex flex-col justify-between gap-8">
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-400">{project.title}</h3>
                                            <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0 text-amber-600 dark:text-amber-400">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 transition-colors">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full border border-slate-200 dark:border-white/5 transition-colors group-hover:border-amber-500/20 dark:group-hover:border-amber-500/20">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-white/5">
                                            {project.liveUrl && (
                                                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                                                    <ExternalLink className="w-4 h-4" />
                                                    <span>Live Demo</span>
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                                                    <Github className="w-4 h-4" />
                                                    <span>Code</span>
                                                </a>
                                            )}
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
