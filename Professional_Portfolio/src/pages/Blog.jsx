import React, { useState } from 'react';
import GridBackground from '../components/layout/GridBackground';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

const Blog = () => {
    const [activeTab, setActiveTab] = useState('All');
    const categories = ['All', 'Engineering', 'Architecture', 'System Design', 'Updates'];

    return (
        <GridBackground>
            <Nav />

            <main className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* 1. TOP ILLUSTRATION/ICON - Matching the Resend image */}
                <div className="flex justify-center mb-10 opacity-80">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-black border border-white/10 p-4 rounded-xl">
                            <svg className="w-12 h-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* 2. HERO SECTION - Precision Typography */}
                <div className="max-w-4xl mx-auto text-center mb-16 px-4">
                    <p className="text-emerald-500 font-mono text-sm tracking-[0.2em] mb-4 uppercase">Technical Journal</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
                        Engineering <span className="font-serif italic text-emerald-400 font-medium">logs</span> & systems.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A detailed record of architectural decisions, performance experiments,
                        and building scalable software from first principles.
                    </p>

                    {/* BUTTONS - Matching the Resend style */}
                    <div className="flex flex-wrap justify-center gap-4 mt-10">
                        <button className="px-6 py-2.5 bg-white text-black font-medium rounded-full hover:bg-slate-200 transition-all">
                            Documentation
                        </button>
                        <button className="px-6 py-2.5 bg-white/5 text-white border border-white/10 font-medium rounded-full hover:bg-white/10 transition-all">
                            Search Logs
                        </button>
                    </div>
                </div>

                {/* 3. THE TABS - Matching the doc-language switcher */}
                <section className="max-w-5xl mx-auto mb-12">
                    <div className="flex flex-col items-center">
                        <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-6">Explore by domain</p>

                        <div className="flex flex-wrap items-center justify-center p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={`px-6 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === cat
                                            ? 'bg-white text-black shadow-lg shadow-black/20'
                                            : 'text-slate-400 hover:text-white'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. CONTENT AREA - Placeholder for real posts */}
                <section className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* We will map through real posts here soon! */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="group relative bg-white/[0.02] border border-white/10 p-6 rounded-2xl hover:border-emerald-500/50 transition-all hover:bg-white/[0.04]">
                                <p className="text-emerald-500 font-mono text-[10px] mb-4">SYSTEM_LOG_00{item}</p>
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                    Optimizing Database Queries with Redis
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    An investigation into reducing latency for read-heavy workloads using strategic caching.
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    </div>
                                    <span className="text-xs text-slate-500 font-mono italic">Source Serif 4</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </GridBackground>
    );
};

export default Blog;
