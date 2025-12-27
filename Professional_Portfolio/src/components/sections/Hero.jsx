/**
 * Hero Section
 * Large, impactful typography introducing the portfolio
 */

import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Hero = () => {
    // Local Profile Image
    const PROFILE_IMG_URL = "/tech/Profile_pic.png";

    return (
        <section className="min-h-screen flex flex-col justify-center relative z-10 transition-colors duration-500">

            <div className="mt-10 sm:mt-20">
                {/* Row 1: Name & System Metadata (Full Width) */}
                {/* Row 1: Name & System Metadata (Full Width) */}
                <div className="w-full border-y border-grid bg-slate-50 dark:bg-black relative group/row overflow-hidden transition-colors duration-500">
                    <div className="max-w-5xl mx-auto border-x border-grid relative z-10 transition-colors duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-100 mix-blend-overlay pointer-events-none"></div>
                        <div className="grid grid-cols-4 relative z-10">
                            {/* Left Content */}
                            <div className="col-span-3 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-between relative">
                                <div className="absolute inset-0 bg-white/0 group-hover/row:bg-white/[0.02] transition-colors duration-500" />
                                <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight relative z-10">
                                    Aditya Ojha
                                </h1>
                                <div className="text-[10px] sm:text-xs text-slate-500 font-mono mt-1 sm:mt-0 relative z-10 flex items-center gap-2 sm:gap-3">
                                    <span>SYS: v3.0.0</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 animate-pulse" />
                                    <span className="opacity-80">ONLINE</span>
                                </div>
                            </div>
                            {/* Right Profile Slice (Top) */}
                            <div
                                className="col-span-1 border-l border-grid relative overflow-hidden transition-all duration-700 filter grayscale hover:grayscale-0"
                                style={{
                                    backgroundImage: `url(${PROFILE_IMG_URL})`,
                                    backgroundSize: '110% 320%',
                                    backgroundPosition: 'center 0%'
                                }}
                            >
                                <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply transition-opacity duration-500 group-hover/row:opacity-0" />
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Tagline & Contact (Full Width) */}
                <div className="w-full border-b border-grid bg-slate-50 dark:bg-black relative group/row overflow-hidden transition-colors duration-500">
                    <div className="max-w-5xl mx-auto border-x border-grid relative z-10 transition-colors duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-100 mix-blend-overlay pointer-events-none"></div>
                        <div className="grid grid-cols-4 relative z-10">
                            {/* Left Content */}
                            <div className="col-span-3 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between relative">
                                <div className="absolute inset-0 bg-white/0 group-hover/row:bg-white/[0.02] transition-colors duration-500" />
                                <p className="text-xs sm:text-base text-slate-300 font-light tracking-wide text-left relative z-10 w-full">
                                    Full Stack Developer crafting systems with <span className="text-white font-medium">design intuition</span>.
                                </p>
                                <a href="mailto:thisisadityaojha@gmail.com" className="text-[10px] sm:text-sm text-slate-400 hover:text-white transition-colors mt-1 sm:mt-2 relative z-10 flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                                    thisisadityaojha@gmail.com
                                </a>
                            </div>
                            {/* Right Profile Slice (Middle) */}
                            <div
                                className="col-span-1 border-l border-grid relative overflow-hidden transition-all duration-700 filter grayscale hover:grayscale-0"
                                style={{
                                    backgroundImage: `url(${PROFILE_IMG_URL})`,
                                    backgroundSize: '110% 320%',
                                    backgroundPosition: 'center 46%'
                                }}
                            >
                                <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply transition-opacity duration-500 group-hover/row:opacity-0" />
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 3: Status & Socials (Full Width) */}
                <div className="w-full border-b border-grid bg-slate-50 dark:bg-black relative group/row overflow-hidden transition-colors duration-500">
                    <div className="max-w-5xl mx-auto border-x border-grid relative z-10 transition-colors duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-100 mix-blend-overlay pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
                        <div className="grid grid-cols-4 relative z-10">
                            {/* Left Content */}
                            <div className="col-span-3 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between relative">
                                <div className="absolute inset-0 bg-white/0 group-hover/row:bg-white/[0.02] transition-colors duration-500" />

                                {/* Status */}
                                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 relative z-10">
                                    <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-[10px] sm:text-xs text-emerald-300/80 font-medium tracking-wide">Available for opportunities</span>
                                </div>

                                {/* Location Info */}
                                <div className="flex items-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-mono text-slate-500 relative z-10 mt-2 sm:mt-0">
                                    <div className="flex items-center gap-1.5 group cursor-default">
                                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                                        <span className="hidden sm:inline text-slate-600 dark:text-slate-600">Currently:</span>
                                        <span className="group-hover:text-slate-300 transition-colors text-slate-400">Bengaluru</span>
                                    </div>
                                    <div className="w-px h-3 bg-slate-800" />
                                    <div className="flex items-center gap-1.5 group cursor-default">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 group-hover:text-amber-400 transition-colors">
                                            <path d="M4 21h16" />
                                            <path d="M7 21V7" />
                                            <path d="M17 21V7" />
                                            <path d="M7 7a5 5 0 0 1 10 0" />
                                            <path d="M8 7h8" />
                                            <path d="M6 4h2v3H6z" />
                                            <path d="M16 4h2v3h-2z" />
                                        </svg>
                                        <span className="hidden sm:inline text-slate-600 dark:text-slate-600">From:</span>
                                        <span className="group-hover:text-slate-300 transition-colors text-slate-400">Hyderabad</span>
                                    </div>
                                </div>

                                {/* Socials */}
                                <div className="flex items-center gap-4 sm:gap-6 mt-2 sm:mt-0 relative z-10">
                                    <a href="https://github.com/gitit24x7" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110 duration-200">
                                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </a>
                                    <div className="h-3 sm:h-4 w-px bg-slate-800" />
                                    <a href="https://linkedin.com/in/ojhaadityaa" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110 duration-200">
                                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </a>
                                    <div className="h-3 sm:h-4 w-px bg-slate-800" />
                                    <a href="https://x.com/buggy247_?s=21" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110 duration-200">
                                        <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </a>
                                </div>
                            </div>
                            {/* Right Profile Slice (Bottom) */}
                            <div
                                className="col-span-1 border-l border-grid relative overflow-hidden transition-all duration-700 filter grayscale hover:grayscale-0"
                                style={{
                                    backgroundImage: `url(${PROFILE_IMG_URL})`,
                                    backgroundSize: '110% 320%',
                                    backgroundPosition: 'center 100%'
                                }}
                            >
                                <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply transition-opacity duration-500 group-hover/row:opacity-0" />
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Headline Content */}
            <div className="w-full border-b border-grid bg-slate-50 dark:bg-black transition-colors duration-500">
                <div className="max-w-5xl mx-auto border-x border-grid py-10 sm:py-20 px-4 sm:px-6 text-center relative">
                    <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 leading-none transition-colors duration-500">
                        Building beautiful,
                        <br />
                        performant web
                        <br />
                        experiences.
                    </h1>
                </div>
            </div>

            {/* Row 2: Subtext */}
            <div className="w-full border-b border-grid bg-slate-50/30 dark:bg-black/20 transition-colors duration-500">
                <div className="max-w-5xl mx-auto border-x border-grid py-6 sm:py-12 px-4 sm:px-6 flex justify-center">
                    <p className="text-sm sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl text-center font-light leading-relaxed transition-colors duration-500">
                        Architecting digital ecosystems with precision and passion.
                        Turning complex problems into elegant interfaces.
                    </p>
                </div>
            </div>

            {/* Row 3: Actions */}
            <div className="w-full border-b border-grid bg-slate-100/50 dark:bg-black/40 transition-colors duration-500">
                <div className="max-w-5xl mx-auto border-x border-grid py-6 sm:py-12 px-4 sm:px-6 flex justify-center">
                    <div className="flex gap-8">
                        <div className="relative group">
                            {/* Crosshairs */}
                            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-slate-900/20 dark:border-white/20 transition-colors" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-slate-900/20 dark:border-white/20 transition-colors" />
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-slate-900/20 dark:border-white/20 transition-colors" />
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-slate-900/20 dark:border-white/20 transition-colors" />

                            <a
                                href="#contact"
                                className="block px-6 py-2 sm:px-8 sm:py-4 border border-slate-300 dark:border-slate-800 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-50 hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
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
