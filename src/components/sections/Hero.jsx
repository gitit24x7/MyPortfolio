/**
 * Hero Section
 * Large, impactful typography introducing the portfolio
 */

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center relative z-10 transition-colors duration-500">
            <div className="max-w-[80rem] mx-auto px-6 w-full flex flex-col items-center text-center border-b border-slate-200/50 dark:border-white/10">
                <div className="max-w-4xl pt-20 pb-20"> {/* Added pb-20 to provide spacing inside the border */}
                    {/* Main Headline */}
                    <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 leading-none mb-6 transition-colors duration-500">
                        Building beautiful,
                        <br />
                        performant web
                        <br />
                        experiences.
                    </h1>

                    {/* Subtext */}
                    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12 transition-colors duration-500">
                        Full-stack engineer specializing in React, TypeScript, and modern web architecture.
                    </p>

                    {/* CTAs with Grid Styling */}
                    <div className="flex gap-8 mt-12 justify-center">
                        {/* Primary Button */}
                        <div className="relative group">
                            {/* Crosshairs */}
                            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-slate-900/20 dark:border-white/20 transition-colors" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-slate-900/20 dark:border-white/20 transition-colors" />
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-slate-900/20 dark:border-white/20 transition-colors" />
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-slate-900/20 dark:border-white/20 transition-colors" />

                            <a
                                href="#work"
                                className="block px-8 py-4 bg-slate-900 dark:bg-slate-50 text-slate-50 dark:text-slate-950 font-medium hover:bg-slate-800 dark:hover:bg-white transition-colors"
                            >
                                View Work
                            </a>
                        </div>

                        {/* Secondary Button */}
                        <div className="relative group">
                            {/* Crosshairs */}
                            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-slate-900/20 dark:border-white/20 transition-colors" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-slate-900/20 dark:border-white/20 transition-colors" />
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-slate-900/20 dark:border-white/20 transition-colors" />
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-slate-900/20 dark:border-white/20 transition-colors" />

                            <a
                                href="#contact"
                                className="block px-8 py-4 border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-50 hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
