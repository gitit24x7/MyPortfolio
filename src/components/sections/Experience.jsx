/**
 * Experience Component
 * Displays work history in a clean, timeline-grid hybrid format.
 */

const experience = [
    {
        company: "Tech Corp Inc.",
        role: "Senior Frontend Engineer",
        period: "2023 - Present",
        description: "Leading the design system migration and improving core web vitals by 40%.",
        technologies: ["React", "Next.js", "GraphQL"]
    },
    {
        company: "StartupXYZ",
        role: "Full Stack Developer",
        period: "2021 - 2023",
        description: "Built the MVP from scratch and scaled to 10k users. Handled auth, payments, and realtime features.",
        technologies: ["Node.js", "Postgres", "Redis"]
    },
    {
        company: "Digital Agency",
        role: "Frontend Developer",
        period: "2019 - 2021",
        description: "Developed award-winning marketing sites for Fortune 500 clients.",
        technologies: ["Vue.js", "GSAP", "WebGL"]
    }
]

const Experience = () => {
    return (
        <section className="py-24 relative z-10 transition-colors duration-500">
            <div className="max-w-[80rem] mx-auto px-6 border-b border-slate-200/50 dark:border-white/10 pb-24">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6 transition-colors">
                        Experience
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
                    {/* Timeline Col */}
                    <div className="flex flex-col gap-12">
                        {experience.map((job, index) => (
                            <div key={index} className="group relative pl-8 border-l border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-colors">
                                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-white/20 rounded-full group-hover:border-slate-500 dark:group-hover:border-white/50 group-hover:scale-125 transition-all" />

                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 transition-colors">{job.company}</h3>
                                    <span className="text-sm font-mono text-slate-500 dark:text-slate-500">{job.period}</span>
                                </div>

                                <div className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-2 transition-colors">{job.role}</div>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-2xl transition-colors">
                                    {job.description}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {job.technologies.map((tech, i) => (
                                        <span key={i} className="text-sm text-slate-500 dark:text-slate-500 font-mono">
                                            # {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
