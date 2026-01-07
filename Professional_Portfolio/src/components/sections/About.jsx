import React from 'react';
import { User, MapPin, Coffee, Code2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="relative z-10 transition-colors duration-500">

            {/* Row 1: Technical Header */}
            <div className="w-full border-b border-grid relative overflow-hidden">
                <div className="max-w-5xl mx-auto border-x border-grid relative z-10 h-16 flex items-center justify-center">
                    <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar px-3 sm:px-6">
                        <div className="px-3 py-1 sm:px-6 sm:py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                            System Status: Online
                        </div>
                        <div className="hidden md:block px-3 py-1 sm:px-6 sm:py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                            Location: Earth
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2: Main Content */}
            <div className="w-full border-b border-grid">
                <div className="max-w-5xl mx-auto border-x border-grid">
                    <div className="grid grid-cols-2 gap-4 sm:gap-8 items-start px-3 sm:px-6 py-4 sm:py-8">

                        {/* Left Column: Image/Stats Container */}
                        <div className="relative group">
                            <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-slate-900 dark:border-white transition-colors" />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-slate-900 dark:border-white transition-colors" />

                            <div className="aspect-square rounded-sm overflow-hidden bg-slate-100 dark:bg-white/5 relative border border-slate-200 dark:border-white/10">
                                {/* Grid overlay */}
                                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-10 pointer-events-none z-10">
                                    <div className="border-r border-b border-current" />
                                    <div className="border-r border-b border-current" />
                                    <div className="border-b border-current" />
                                    <div className="border-r border-b border-current" />
                                    <div className="border-r border-b border-current" />
                                    <div className="border-b border-current" />
                                    <div className="border-r border-current" />
                                    <div className="border-r border-current" />
                                    <div />
                                </div>
                                {/* About Me Image */}
                                <img
                                    src="/About me.png"
                                    alt="About Me"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* Right Column: Narrative (Margin Grid Style) */}
                        <div className="flex flex-col border-l border-grid -my-4 -mr-3 -mb-4 sm:-my-8 sm:-mr-6 sm:-mb-8">
                            <div className="border border-grid rounded-xl overflow-hidden bg-slate-50/30 dark:bg-white/5">
                                {/* Row 1: Headline */}
                                <div className="p-3 sm:p-6 border-b border-grid bg-white dark:bg-black">
                                    <h2 className="text-lg sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
                                        More Than Code.
                                    </h2>
                                </div>

                                {/* Row 2: Text 1 */}
                                <div className="p-3 sm:p-6 border-b border-grid">
                                    <p className="text-xs sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                        I'm a developer who obsessively focuses on the intersection of design and engineering.
                                        I believe that the best digital products are born when technical excellence meets
                                        thoughtful aesthetics.
                                    </p>
                                </div>

                                {/* Row 3: Text 2 */}
                                <div className="p-3 sm:p-6 border-b border-grid bg-slate-50/50 dark:bg-white/5">
                                    <p className="text-xs sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                        When I'm not debugging, I'm likely exploring new design systems, minimizing latency,
                                        or brewing the perfect cup of coffee.
                                    </p>
                                </div>

                                {/* Row 4: Stats */}
                                <div className="grid grid-cols-2 gap-px bg-slate-200 dark:bg-white/10">
                                    <div className="bg-white dark:bg-black p-3 sm:p-6 flex flex-col items-center justify-center gap-1 sm:gap-2">
                                        <MapPin className="w-3 h-3 sm:w-5 sm:h-5 text-slate-400" />
                                        <span className="text-[10px] sm:text-sm font-medium text-slate-900 dark:text-slate-50">Bengaluru</span>
                                    </div>
                                    <div className="bg-white dark:bg-black p-3 sm:p-6 flex flex-col items-center justify-center gap-1 sm:gap-2">
                                        <Coffee className="w-3 h-3 sm:w-5 sm:h-5 text-slate-400" />
                                        <span className="text-[10px] sm:text-sm font-medium text-slate-900 dark:text-slate-50">Fuel Check</span>
                                    </div>
                                    <div className="bg-white dark:bg-black p-6 flex flex-col items-center justify-center gap-2 col-span-2 border-t border-grid">
                                        <Code2 className="w-5 h-5 text-slate-400" />
                                        <span className="text-sm font-medium text-slate-900 dark:text-slate-50">Full Stack</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
