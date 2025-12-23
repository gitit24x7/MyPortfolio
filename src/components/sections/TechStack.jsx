/**
 * TechStack Component
 * Displays technologies in a strict, high-contrast grid layout.
 * Mimics the 'bento' or 'technical grid' aesthetic.
 */

import {
    Code2, Database, Globe, Cpu,
    Layers, Layout, Terminal, Box
} from 'lucide-react'

const technologies = [
    { icon: Code2, name: "React", description: "UI Architecture" },
    { icon: Globe, name: "Next.js", description: "Full Stack Framework" },
    { icon: Layout, name: "Tailwind", description: "Design System" },
    { icon: Database, name: "Supabase", description: "Backend & Auth" },
    { icon: Cpu, name: "Node.js", description: "Runtime" },
    { icon: Layers, name: "Framer", description: "Animation" },
    { icon: Terminal, name: "TypeScript", description: "Type Safety" },
    { icon: Box, name: "Docker", description: "Containerization" }
]

const TechStack = () => {
    return (
        <section id="stack" className="py-24 relative z-10 transition-colors duration-500">
            <div className="max-w-[80rem] mx-auto px-6 border-b border-slate-200/50 dark:border-white/10 pb-24">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 tracking-tight transition-colors">
                        Technical Arsenal
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                        The tools I use to build production-grade applications.
                    </p>
                </div>

                {/* The Grid */}
                {/* Glassmorphism approach for the grid container */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-colors duration-500 max-w-6xl mx-auto">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-slate-50/80 dark:bg-slate-950/80 p-6 flex flex-col items-center justify-center gap-3 group hover:bg-white dark:hover:bg-slate-900/90 transition-colors relative"
                        >
                            {/* Detailed Hover Effect - Diagonal Scanline */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_50%,transparent_75%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]" />
                            </div>

                            <tech.icon className="w-8 h-8 text-slate-400 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-50 transition-colors" />
                            <div className="text-center">
                                <div className="text-slate-900 dark:text-slate-50 font-medium mb-1 transition-colors">{tech.name}</div>
                                <div className="text-xs text-slate-500 dark:text-slate-500 font-mono transition-colors">{tech.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStack
