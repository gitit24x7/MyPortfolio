import React from 'react';
import { User, MapPin, Coffee, Code2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="relative z-10 transition-colors duration-500">

            {/* Row 1: Technical Header */}
            <div className="w-full border-b border-slate-300 dark:border-white/10 relative overflow-hidden">
                <div className="max-w-5xl mx-auto border-x border-slate-300 dark:border-white/10 relative z-10 h-16 flex items-center justify-center">
                    <div className="flex items-center gap-6 overflow-x-auto no-scrollbar px-6">
                        <div className="px-6 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                            System Status: Online
                        </div>
                        <div className="hidden md:block px-6 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                            Location: Earth
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2: Main Content */}
            <div className="w-full border-b border-slate-300 dark:border-white/10">
                <div className="max-w-5xl mx-auto border-x border-slate-300 dark:border-white/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-6 py-8">

                        {/* Left Column: Image/Stats Container */}
                        <div className="relative group">
                            <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-slate-900 dark:border-white transition-colors" />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-slate-900 dark:border-white transition-colors" />

                            <div className="aspect-square rounded-sm overflow-hidden bg-slate-100 dark:bg-white/5 relative border border-slate-200 dark:border-white/10">
                                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-10 pointer-events-none">
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
                                <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-700">
                                    <User className="w-24 h-24 opacity-50" />
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Narrative (Margin Grid Style) */}
                        <div className="flex flex-col border-l border-slate-300 dark:border-white/10 -my-8 -mr-6 -mb-8">
                            <div className="border border-slate-300 dark:border-white/10 rounded-xl overflow-hidden bg-slate-50/30 dark:bg-white/5">
                                {/* Row 1: Headline */}
                                <div className="p-6 border-b border-slate-300 dark:border-white/10 bg-white dark:bg-black">
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
                                        More Than Code.
                                    </h2>
                                </div>

                                {/* Row 2: Text 1 */}
                                <div className="p-6 border-b border-slate-300 dark:border-white/10">
                                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                        I'm a developer who obsessively focuses on the intersection of design and engineering.
                                        I believe that the best digital products are born when technical excellence meets
                                        thoughtful aesthetics.
                                    </p>
                                </div>

                                {/* Row 3: Text 2 */}
                                <div className="p-6 border-b border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-white/5">
                                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                        When I'm not debugging, I'm likely exploring new design systems, minimizing latency,
                                        or brewing the perfect cup of coffee.
                                    </p>
                                </div>

                                {/* Row 4: Stats */}
                                <div className="grid grid-cols-2 gap-px bg-slate-200 dark:bg-white/10">
                                    <div className="bg-white dark:bg-black p-6 flex flex-col items-center justify-center gap-2">
                                        <MapPin className="w-5 h-5 text-slate-400" />
                                        <span className="text-sm font-medium text-slate-900 dark:text-slate-50">Bengaluru</span>
                                    </div>
                                    <div className="bg-white dark:bg-black p-6 flex flex-col items-center justify-center gap-2">
                                        <Coffee className="w-5 h-5 text-slate-400" />
                                        <span className="text-sm font-medium text-slate-900 dark:text-slate-50">Fuel Check</span>
                                    </div>
                                    <div className="bg-white dark:bg-black p-6 flex flex-col items-center justify-center gap-2 col-span-2 border-t border-slate-200 dark:border-white/10">
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
