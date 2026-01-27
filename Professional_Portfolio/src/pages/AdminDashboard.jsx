import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GridBackground from '../components/layout/GridBackground';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState('READY'); // READY, PUBLISHING, SUCCESS
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        tags: ''
    });

    // 1. Security Check: If no token, kick back to login
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('PUBLISHING');

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:3001/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // THE KEY: Sending your ID card
                },
                body: JSON.stringify({
                    ...formData,
                    tags: formData.tags.split(',').map(tag => tag.trim()) // Cleanup tags
                })
            });

            if (response.ok) {
                setStatus('SUCCESS');
                setTimeout(() => {
                    navigate('/blog');
                }, 1500);
            } else {
                setStatus('ERROR');
                alert('Deployment failed. Check server logs.');
            }
        } catch (error) {
            setStatus('ERROR');
            console.error('Submission error:', error);
        }
    };

    return (
        <GridBackground>
            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">

                    {/* DASHBOARD HEADER */}
                    <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-white tracking-widest font-mono italic">
                                COMMAND <span className="text-emerald-500 font-normal">CENTER</span>
                            </h1>
                            <p className="text-slate-500 text-xs font-mono mt-1 uppercase tracking-tighter">
                                status: <span className={status === 'SUCCESS' ? 'text-emerald-500' : 'text-amber-500'}>{status}</span>
                            </p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-500 border border-white/10 px-4 py-2 rounded-lg text-xs font-mono transition-all"
                        >
                            TERMINATE SESSION
                        </button>
                    </div>

                    {/* COMPOSER FORM */}
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Title */}
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-slate-500 uppercase ml-1">Log Title</label>
                                <input
                                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500/50 transition-all font-mono"
                                    placeholder="The future of WebAssembly..."
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>

                            {/* Slug */}
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-slate-500 uppercase ml-1">Resource Slug</label>
                                <input
                                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500/50 transition-all font-mono"
                                    placeholder="future-of-wasm"
                                    value={formData.slug}
                                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        {/* Excerpt */}
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-slate-500 uppercase ml-1">Teaser / Excerpt</label>
                            <input
                                className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500/50 transition-all font-mono"
                                placeholder="A brief overview for the reader..."
                                value={formData.excerpt}
                                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                required
                            />
                        </div>

                        {/* Tags */}
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-slate-500 uppercase ml-1">Tags (Comma Separated)</label>
                            <input
                                className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500/50 transition-all font-mono"
                                placeholder="React, Performance, DevTools"
                                value={formData.tags}
                                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-slate-500 uppercase ml-1">Terminal Content (HTML/Markdown support)</label>
                            <textarea
                                className="w-full h-80 bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all font-mono resize-none"
                                placeholder="Start documenting..."
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                required
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-6 border-t border-white/10 flex justify-end">
                            <button
                                type="submit"
                                disabled={status === 'PUBLISHING'}
                                className={`px-10 py-4 rounded-full font-mono font-bold transition-all shadow-xl ${status === 'PUBLISHING'
                                        ? 'bg-emerald-500/20 text-emerald-500'
                                        : 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-emerald-500/20'
                                    }`}
                            >
                                {status === 'PUBLISHING' ? 'TRANSMITTING...' : 'DEPLOY LOG'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </GridBackground>
    );
};

export default AdminDashboard;
