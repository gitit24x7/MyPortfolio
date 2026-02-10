import { Link } from 'react-router-dom';
import React, { useState, useEffect, useMemo } from 'react';
import GridBackground from '../components/layout/GridBackground';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';
import SideDecorations from '../components/ui/SideDecorations';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTag, setActiveTag] = useState('All');
    const [sortOrder, setSortOrder] = useState('newest');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
                const response = await fetch(`${API_URL}/api/posts`);
                const data = await response.json();
                setPosts(data.data || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Extract unique tags from all posts
    const allTags = useMemo(() => {
        const tags = new Set();
        posts.forEach(post => {
            post.tags?.forEach(tag => tags.add(tag));
        });
        return ['All', ...Array.from(tags)];
    }, [posts]);

    // Filter and sort posts
    const filteredPosts = useMemo(() => {
        let result = [...posts];

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter(post =>
                post.title.toLowerCase().includes(query) ||
                post.excerpt?.toLowerCase().includes(query) ||
                post.tags?.some(tag => tag.toLowerCase().includes(query))
            );
        }

        if (activeTag !== 'All') {
            result = result.filter(post =>
                post.tags?.some(tag => tag.toLowerCase() === activeTag.toLowerCase())
            );
        }

        result.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
        });

        return result;
    }, [posts, searchQuery, activeTag, sortOrder]);

    return (
        <GridBackground>
            <SEO
                title="Engineering Logs | Aditya Ojha"
                description="Technical journal, architectural decisions, and performance experiments."
            />
            <SideDecorations />
            <Nav />

            <section className="relative z-10 pt-6 transition-colors duration-500">

                {/* Row 1: Header Badges */}
                <div className="w-full border-b border-grid relative overflow-hidden">
                    <div className="max-w-5xl mx-auto border-x border-grid relative z-10 h-12 flex items-center justify-center">
                        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar px-6">
                            <div className="px-6 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                                Mode: Technical Journal
                            </div>
                            <div className="hidden md:block px-6 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                                Logs: {posts.length} Entries
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Title & Description */}
                <div className="w-full border-b border-grid">
                    <div className="max-w-5xl mx-auto border-x border-grid">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end px-6 md:px-12 py-8">
                            <div>
                                <p className="text-emerald-500 dark:text-emerald-400 font-mono text-sm tracking-[0.2em] mb-3 uppercase">Technical Journal</p>
                                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 tracking-tight transition-colors">
                                    Engineering <span className="font-serif italic text-emerald-600 dark:text-emerald-400 font-medium">logs</span> & systems.
                                </h1>
                            </div>
                            <div>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                                    A detailed record of architectural decisions, performance experiments,
                                    and building scalable software from first principles.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 3: Search & Filters */}
                <div className="w-full border-b border-grid bg-slate-50 dark:bg-black">
                    <div className="max-w-5xl mx-auto border-x border-grid">
                        <div className="px-6 md:px-12 py-6">
                            {/* Search Bar */}
                            <div className="relative group max-w-xl">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
                                <div className="relative flex items-center">
                                    <svg className="absolute left-4 w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-emerald-500 dark:group-focus-within:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Search logs by title, topic, or tag..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-10 py-3 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-mono text-sm"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery('')}
                                            className="absolute right-4 text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-white transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Tag Chips + Sort */}
                            {!loading && !error && posts.length > 0 && (
                                <div className="mt-4 flex flex-wrap items-center gap-2">
                                    {allTags.map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => setActiveTag(tag)}
                                            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${activeTag === tag
                                                ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/50'
                                                : 'bg-white dark:bg-white/[0.03] text-slate-500 dark:text-slate-500 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-700 dark:hover:text-slate-300'
                                                }`}
                                        >
                                            {tag}
                                        </button>
                                    ))}

                                    <div className="hidden md:block w-px h-6 bg-slate-200 dark:bg-white/10 mx-2"></div>

                                    <button
                                        onClick={() => setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest')}
                                        className="flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-full text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-white/20 transition-all font-mono text-xs uppercase tracking-wider"
                                    >
                                        <svg className={`w-3.5 h-3.5 transition-transform ${sortOrder === 'oldest' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        {sortOrder === 'newest' ? 'Latest First' : 'Oldest First'}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Row 4: Results Count */}
                <div className="w-full border-b border-grid">
                    <div className="max-w-5xl mx-auto border-x border-grid">
                        <div className="px-6 md:px-12 py-3 flex items-center justify-between">
                            <p className="text-slate-500 dark:text-slate-400 font-mono text-[10px] uppercase tracking-widest">
                                {searchQuery || activeTag !== 'All'
                                    ? `${filteredPosts.length} result${filteredPosts.length !== 1 ? 's' : ''} found`
                                    : 'Explore by domain'
                                }
                            </p>
                            {(searchQuery || activeTag !== 'All') && (
                                <button
                                    onClick={() => { setSearchQuery(''); setActiveTag('All'); }}
                                    className="text-emerald-500 dark:text-emerald-400 font-mono text-[10px] uppercase tracking-widest hover:underline"
                                >
                                    Clear Filters
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Row 5: Posts Grid */}
                <div className="w-full border-b border-grid bg-slate-50/30 dark:bg-white/[0.02]">
                    <div className="max-w-5xl mx-auto border-x border-grid">
                        <div className="p-6 md:p-12">
                            {loading ? (
                                <div className="text-center text-slate-500 dark:text-slate-400 font-mono py-12">
                                    <div className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></div>
                                    Loading posts...
                                </div>
                            ) : error ? (
                                <div className="text-center text-red-500 font-mono py-12">
                                    Error loading posts. Check if backend is running.
                                </div>
                            ) : filteredPosts.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-slate-500 dark:text-slate-400 font-mono text-sm">
                                        {posts.length === 0
                                            ? 'No posts found. Create your first post!'
                                            : 'No logs match your search. Try a different query.'
                                        }
                                    </p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredPosts.map((post) => (
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            key={post._id}
                                            className="group relative p-6 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-black hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-500 shadow-none hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] block"
                                        >
                                            {/* Background glow */}
                                            <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-emerald-500/20" />

                                            <div className="relative z-10">
                                                <p className="text-emerald-600 dark:text-emerald-500 font-mono text-[10px] mb-4 uppercase tracking-widest">
                                                    {post.tags?.[0] || 'ENGINEERING_LOG'}
                                                </p>
                                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                                    {post.title}
                                                </h3>
                                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                                    {post.excerpt}
                                                </p>

                                                {/* Tags */}
                                                {post.tags && post.tags.length > 1 && (
                                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                                        {post.tags.slice(1, 4).map((tag, i) => (
                                                            <span key={i} className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-white/5 transition-colors group-hover:border-emerald-500/20">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                                                    <span className="text-[10px] text-slate-500 dark:text-slate-500 font-mono uppercase">
                                                        {new Date(post.createdAt).toLocaleDateString()}
                                                    </span>
                                                    <div className="flex items-center gap-2 text-emerald-500 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                                                        <span className="text-xs font-mono">Read</span>
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </GridBackground>
    );
};

export default Blog;
