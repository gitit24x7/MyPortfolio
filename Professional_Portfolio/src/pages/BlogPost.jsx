import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import GridBackground from '../components/layout/GridBackground';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import NotFound from './NotFound';
import SEO from '../components/common/SEO';

const BlogPost = () => {
    //we can use slug to fetch a blog a post since slugs are unique like id too
    const { slug } = useParams();

    // State variables (the three memory boxes)
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);  // ← lowercase "loading"
    const [error, setError] = useState(null);

    // Data fetching (runs after component mounts)
    useEffect(() => {
        const fetchPost = async () => {
            try {
                // Build the URL using the slug from useParams
                const url = `http://localhost:3001/api/posts/${slug}`;

                const response = await fetch(url);

                // Check if response is OK
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }

                // Convert response to JSON
                const data = await response.json();

                // Save the post data
                if (data.success) {
                    setPost(data.data);
                } else {
                    setError('Post not found');
                }

            } catch (err) {
                console.error('Error:', err);
                setError(err.message);
            } finally {
                // Always stop loading, whether success or fail
                setLoading(false);
            }
        };

        fetchPost();  // ← Call the function!
    }, [slug]);  // ← Re-run if slug changes

    //conditionally rendering and showing the UI if we loading or error or post is not found, this is the UI part that we are covering
    // If error (like 404 or failed fetch), show the NotFound page with the cool illustration
    if (error) {
        return <NotFound />;
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <p className="text-slate-500 font-mono">LOADING POST...</p>
            </div>
        )
    }

    // If we got here, we have the post! Show it.
    return (
        <GridBackground>
            <SEO
                title={post.title}
                description={post.excerpt}
                type="article"
            />
            <Nav />

            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
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

                    {/* Post Content */}
                    <div className="prose prose-invert prose-emerald max-w-none">
                        <div className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                            {post.content}
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </GridBackground>
    );
};

export default BlogPost;