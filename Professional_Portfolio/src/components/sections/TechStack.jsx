/**
 * TechStack Component
 * Displays technologies in a strict, high-contrast grid layout.
 * Mimics the 'bento' or 'technical grid' aesthetic.
 */

import React from 'react';

const technologies = [
    { icon: "/tech/react.svg", name: "React", description: "UI Architecture" },
    { icon: "/tech/nextjs.svg", name: "Next.js", description: "Full Stack Framework", className: "dark:invert" },
    { icon: "/tech/typescript.svg", name: "TypeScript", description: "Type Safety" },
    { icon: "/tech/tailwindcss.svg", name: "Tailwind", description: "Design System" },

    { icon: "/tech/nodejs.svg", name: "Node.js", description: "Runtime" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "SQL", description: "Database Logic" },
    { icon: "/tech/supabase.svg", name: "Supabase", description: "Backend & Auth" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", name: "Redux", description: "State Management" },

    { icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg", name: "Motion", description: "Complex Animations" },
    { icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4", name: "Shadcn UI", description: "Component Library" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "Figma", description: "Interface Design" },
    { icon: "/tech/docker.svg", name: "Docker", description: "Containerization" },

    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg", name: "Playwright", description: "E2E Testing" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git / GitHub", description: "Version Control" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB", description: "NoSQL Database" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", name: "C++", description: "System Logic" }
]

const TechStack = () => {
    return (
        <section id="stack" className="relative z-10 transition-colors duration-500">

            {/* Row 1: Header */}
            <div className="w-full border-b border-grid relative overflow-hidden">
                <div className="max-w-5xl mx-auto border-x border-grid relative z-10 h-12 flex items-center justify-center">
                    <div className="flex items-center gap-6 overflow-x-auto no-scrollbar px-6">
                        <div className="px-6 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                            Stack: Modern
                        </div>
                        <div className="hidden md:block px-6 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                            Performance: Optimized
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2: Title */}
            <div className="w-full border-b border-grid">
                <div className="max-w-5xl mx-auto border-x border-grid">
                    <div className="px-6 py-6 border-b-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight transition-colors">
                            Technical Arsenal.
                        </h2>
                    </div>
                </div>
            </div>

            {/* Row 3: Compact Grid - 4 icons per group in 2x2 layout */}
            <div className="w-full border-b border-grid">
                <div className="max-w-5xl mx-auto border-x border-grid">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {/* Each cell contains 4 tech icons in a 2x2 grid */}
                        {[0, 4, 8, 12].map((startIndex) => (
                            <div
                                key={startIndex}
                                className="bg-slate-50/50 dark:bg-black/50 p-4 group hover:bg-white dark:hover:bg-black transition-colors relative border-r border-b border-grid last:border-r-0 md:last:border-r-0 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r [&:nth-child(4n)]:border-r-0"
                            >
                                {/* Hover Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_50%,transparent_75%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]" />
                                </div>

                                {/* 2x2 Grid of Icons */}
                                <div className="grid grid-cols-2 gap-3 relative z-10">
                                    {technologies.slice(startIndex, startIndex + 4).map((tech, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-center p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-default"
                                            title={`${tech.name} - ${tech.description}`}
                                        >
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                className={`w-8 h-8 object-contain transition-transform hover:scale-110 duration-300 ${tech.className || ''}`}
                                            />
                                        </div>
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

export default TechStack
