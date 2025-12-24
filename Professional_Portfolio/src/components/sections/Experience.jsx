import React from 'react';
import { Code2, Calendar } from 'lucide-react';

const experience = [
    {
        company: "Tech Corp Inc.",
        role: "Senior Frontend Engineer",
        period: "2023 - Present",
        description: [
            "Leading the design system migration and improving core web vitals by 40%.",
            "Architected a micro-frontend solution for the main dashboard.",
            "Mentored 3 junior developers."
        ],
        technologies: ["React", "Next.js", "GraphQL"]
    },
    {
        company: "StartupXYZ",
        role: "Full Stack Developer",
        period: "2021 - 2023",
        description: [
            "Built the MVP from scratch and scaled to 10k users.",
            "Handled auth, payments (Stripe), and realtime features (Socket.io).",
            "Optimized database queries decreasing load times by 200ms."
        ],
        technologies: ["Node.js", "Postgres", "Redis"]
    },
    {
        company: "Digital Agency",
        role: "Frontend Developer",
        period: "2019 - 2021",
        description: [
            "Developed award-winning marketing sites for Fortune 500 clients.",
            "Implemented complex WebGL animations using Three.js.",
            "Collaborated closely with designers to ensure pixel-perfect implementation."
        ],
        technologies: ["Vue.js", "GSAP", "WebGL"]
    }
]

const Experience = () => {
    return (
        <section className="relative z-10 transition-colors duration-500">

            {/* Row 1: Header */}
            <div className="w-full border-b border-slate-300 dark:border-white/10 relative overflow-hidden bg-slate-50 dark:bg-black">
                <div className="max-w-5xl mx-auto border-x border-slate-300 dark:border-white/10 relative z-10 h-12 flex items-center justify-center">
                    <div className="flex items-center gap-6 overflow-x-auto no-scrollbar px-6">
                        <div className="px-6 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                            History: Verified
                        </div>
                        <div className="hidden md:block px-6 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                            Trajectory: Upward
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2: Title */}
            <div className="w-full border-b border-slate-300 dark:border-white/10">
                <div className="max-w-5xl mx-auto border-x border-slate-300 dark:border-white/10">
                    <div className="px-6 py-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-0 tracking-tight transition-colors">
                            Experience.
                        </h2>
                    </div>
                </div>
            </div>

            {/* Row 3: Experience Grid */}
            <div className="w-full border-b border-slate-300 dark:border-white/10 bg-slate-50/30 dark:bg-black/20">
                <div className="max-w-5xl mx-auto border-x border-slate-300 dark:border-white/10">
                    <div className="w-full">
                        {experience.map((job, index) => (
                            <div key={index} className="border-b border-slate-300 dark:border-white/10 last:border-b-0">

                                {/* Header: Company */}
                                <div className="px-6 py-6 flex items-center gap-3 bg-white dark:bg-black transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{job.company}</h3>
                                </div>

                                {/* Sub-Header: Role & Date */}
                                <div className="px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-b border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5">
                                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
                                        <div className="p-1.5 rounded-md bg-white dark:bg-black border border-slate-200 dark:border-white/10">
                                            <Code2 className="w-4 h-4" />
                                        </div>
                                        {job.role}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-mono text-slate-500 dark:text-slate-400">
                                        <Calendar className="w-4 h-4" />
                                        {job.period}
                                    </div>
                                </div>

                                {/* Content: Description */}
                                <div className="px-6 py-6 bg-white dark:bg-black">
                                    <ul className="space-y-3">
                                        {Array.isArray(job.description) ? (
                                            job.description.map((item, i) => (
                                                <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))
                                        ) : (
                                            <li className="text-slate-600 dark:text-slate-400 leading-relaxed">{job.description}</li>
                                        )}
                                    </ul>
                                </div>

                                {/* Footer: Tags */}
                                <div className="px-6 py-4 border-t border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-black">
                                    <div className="flex flex-wrap gap-2">
                                        {job.technologies.map((tech, i) => (
                                            <span key={i} className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-white/5 px-2 py-1 rounded border border-slate-200 dark:border-white/10">
                                                {tech}
                                            </span>
                                        ))}
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

export default Experience
