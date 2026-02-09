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

    // State for managing posts
    const [posts, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);


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

    // NEW: Handle Edit Click
    const handleEdit = (post) => {
        setEditingPost(post);
        setFormData({
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            content: post.content,
            tags: post.tags.join(', ')
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('TRANSMITTING');

        try {
            const token = localStorage.getItem('token');
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

            // 1. Determine URL and Method (Create vs Update)
            const url = editingPost
                ? `${API_URL}/api/posts/${editingPost._id}`
                : `${API_URL}/api/posts`;

            const method = editingPost ? 'PUT' : 'POST';

            // 2. Send the Request
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    ...formData,
                    tags: formData.tags.split(',').map(tag => tag.trim())
                })
            });

            if (response.ok) {
                setStatus('SUCCESS');

                // 3. Clear "Editing" mode after success
                if (editingPost) {
                    setEditingPost(null);
                    // Update the local list immediately
                    if (method === 'PUT') {
                        window.location.reload();
                        return;
                    }
                }

                setTimeout(() => {
                    navigate('/blog');
                }, 4000);
            } else {
                setStatus('READY');
                const data = await response.json();
                alert(`Sequence Aborted: ${data.message || 'Server Rejection'}`);
            }
        } catch (error) {
            setStatus('READY');
            alert('Link Failure: Target not reachable.');
        }
    };

    const handleDelete = async (postId) => {
        if (!confirm('Are you sure you want to delete this log? NO UNDO.')) return;

        const token = localStorage.getItem('token');
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

        try {
            const response = await fetch(`${API_URL}/api/posts/${postId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                setPosts(posts.filter(post => post._id !== postId));
                alert('Log deleted successfully.');
            } else {
                alert('Delete failed.');
            }
        } catch (error) {
            console.error('Delete error:', error);
            alert('Delete failed.');
        }
    };

    return (
        <GridBackground>
            {/* SUCCESS OVERLAY */}
            {status === 'SUCCESS' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-500">
                    <div className="text-center font-mono">
                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/50 animate-pulse">
                            <span className="text-emerald-500 text-2xl">✓</span>
                        </div>
                        <h2 className="text-white text-xl font-bold tracking-[0.3em] uppercase mb-2">Transmission Successful</h2>
                        <p className="text-emerald-500/60 text-xs tracking-tighter">Committing resource to public log...</p>
                    </div>
                </div>
            )}

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

                                {status === 'PUBLISHING' ? 'TRANSMITTING...' : (editingPost ? 'UPDATE LOG' : 'DEPLOY LOG')}
                            </button>
                        </div>
                    </form>

                    {/* NEW: Logs Management Section */}
                    <div className="mt-16 border-t border-white/10 pt-12">
                        <h2 className="text-white font-mono text-lg mb-6 tracking-widest">EXISTING LOGS</h2>

                        <div className="space-y-4">
                            {posts.map(post => (
                                <div key={post._id} className="flex items-center justify-between bg-white/5 border border-white/10 p-4 rounded-xl hover:border-emerald-500/30 transition-colors">
                                    <div>
                                        <h3 className="text-white font-medium font-mono">{post.title}</h3>
                                        <p className="text-slate-500 text-xs font-mono mt-1">
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => handleEdit(post)}
                                            className="text-emerald-500 hover:text-emerald-400 text-xs font-mono uppercase tracking-wider px-3 py-1 border border-emerald-500/20 rounded hover:bg-emerald-500/10 transition-colors"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(post._id)}
                                            className="text-red-500 hover:text-red-400 text-xs font-mono uppercase tracking-wider px-3 py-1 border border-red-500/20 rounded hover:bg-red-500/10 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {posts.length === 0 && (
                                <div className="text-slate-500 text-center py-8 font-mono text-sm">
                                    NO LOGS DETECTED. INITIALIZE NEW TRANSMISSION.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </GridBackground>
    );
};

export default AdminDashboard;
