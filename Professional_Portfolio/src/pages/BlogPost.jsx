import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import GridBackground from '../components/layout/GridBackground';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import NotFound from './NotFound';
import SEO from '../components/common/SEO';

const BlogPost = () => {
    const { slug } = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
                const url = `${API_URL}/api/posts/${slug}`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }

                const data = await response.json();

                if (data.success) {
                    setPost(data.data);
                } else {
                    setError('Post not found');
                }
            } catch (err) {
                console.error('Error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (error) {
        return <NotFound />;
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <p className="text-slate-500 font-mono">LOADING POST...</p>
            </div>
        );
    }

    return (
        <GridBackground>
            <SEO
                title={post.title}
                description={post.excerpt}
                type="article"
            />
            <Nav />

            <main className="pt-14 pb-20">
                <div className="max-w-5xl mx-auto border-x border-grid px-6 md:px-12">
                    {/* Back Link */}
                    <Link to="/blog" className="text-emerald-500 hover:text-emerald-400 font-mono text-sm mb-8 inline-block transition-colors">
                        ← BACK_TO_LOG
                    </Link>

                    {/* Article Container */}
                    <article>
                        {/* Post Metadata - Tag */}
                        <p className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4">
                            {post.tags?.[0] || 'ENGINEERING_LOG'}
                        </p>

                        {/* Post Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Post Date */}
                        <p className="text-slate-500 font-mono text-sm mb-12">
                            {new Date(post.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>

                        {/* Post Content — rendered as Markdown */}
                        <div className="markdown-body">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {post.content}
                            </ReactMarkdown>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </GridBackground>
    );
};

export default BlogPost;