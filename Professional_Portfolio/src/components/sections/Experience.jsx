import React from 'react';
import { Code2, Calendar } from 'lucide-react';

const experience = [
    {
        company: "Societe Generale.",
        role: "Specialist Software Engineer",
        period: "2025 April - Present",
        description: [
            "Handled Production.",
            "Automated tasks with Airflow.",
            "Wrote and optimized SQL Queries.",
            "Wrote Shell scripts to automate daily tasks.",
            "Solved 10-12 user request tickets everyday",
            "Improved the UI of the internal tools developed in ReactJS."
        ],

    },
    {
        company: "Coinbase",
        role: "Cloud Developer Support",
        period: "Apr 2022 - Dec 2024",
        description: [

            "Analyzed 500+ user interface issues to provide actionable feedback to development team, resulting in 30% reduction in UI-related support tickets. ",
            "Specialized in improving form validation, navigation flows, and responsive design implementations.",
            "Collaborated with frontend team to identify, document, and validate bug fixes for critical UI components. ",
            "Implemented minor CSS fixes and HTML updates using Git workflow, contributing to 25% faster issue resolution.",
            "Worked on the customer facing side of a new blockchain L2 project, resolving 30-40 queries everyday.",
            "Interacted on social media platforms to resolve 40-50 user queries everyday."


        ],
    },
    {
        company: "Teleperformance",
        role: "Support Engineer",
        period: "2019-2021",
        description: [
            "Leveraged comprehensive frontend development toolkit including Chrome DevTools for advanced JavaScript debugging and network request analysis, Git for version control and documentation management, JIRA for systematic tracking of UI/UX issues, and Postman for seamless API integration testing. ",
            "This technical proficiency enabled efficient troubleshooting workflows and reduced average bug resolution time from 48 to 24 hours.",
            "Streamlined customer portal layouts by implementing modern flexbox and CSS grid systems, achieving 30% faster navigation."
        ],
        technologies: ["JavaScript", "CSS", "git"]
    }
]

const Experience = () => {
    return (
        <section className="relative z-10 transition-colors duration-500">

            {/* Row 1: Header */}
            <div className="w-full border-b border-grid relative overflow-hidden bg-slate-50 dark:bg-black">
                <div className="max-w-5xl mx-auto border-x border-grid relative z-10 h-12 flex items-center justify-center">
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
            <div className="w-full border-b border-grid">
                <div className="max-w-5xl mx-auto border-x border-grid">
                    <div className="px-6 py-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-0 tracking-tight transition-colors">
                            Experience.
                        </h2>
                    </div>
                </div>
            </div>

            {/* Row 3: Experience Grid */}
            <div className="w-full border-b border-grid bg-slate-50/30 dark:bg-black/20">
                <div className="max-w-5xl mx-auto border-x border-grid">
                    <div className="w-full">
                        {experience.map((job, index) => (
                            <div key={index} className="border-b border-grid last:border-b-0">

                                {/* Header: Company */}
                                <div className="px-6 py-6 flex items-center gap-3 bg-white dark:bg-black transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{job.company}</h3>
                                </div>

                                {/* Sub-Header: Role & Date */}
                                <div className="px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-b border-grid bg-slate-50 dark:bg-white/5">
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



                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
