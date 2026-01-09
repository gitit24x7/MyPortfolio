
import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

const VisitorCounter = () => {
    const [count, setCount] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const namespace = import.meta.env.VITE_COUNTER_NAMESPACE || 'aditya-ojhas-team-2251';
                const key = import.meta.env.VITE_COUNTER_KEY || 'Visitors_count';

                const isNewVisitor = !localStorage.getItem('visit_counted');
                const baseUrl = `https://api.counterapi.dev/v1/${namespace}/${key}`;
                const endpoint = isNewVisitor ? `${baseUrl}/up` : baseUrl;

                // Try direct fetch first
                let response;
                let usedProxy = false;

                try {
                    response = await fetch(endpoint, {
                        method: 'GET',
                        credentials: 'omit',
                        mode: 'cors'
                    });
                } catch (corsError) {
                    // If direct fetch fails (likely CORS), try through proxy
                    console.warn('Direct fetch failed, trying CORS proxy...');
                    const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(endpoint)}`;
                    response = await fetch(proxyUrl);
                    usedProxy = true;
                }

                // If increment failed, try read-only
                if (!response.ok && isNewVisitor) {
                    console.warn(`Increment failed (${response.status}), falling back to read-only`);
                    const readUrl = usedProxy
                        ? `https://corsproxy.io/?${encodeURIComponent(baseUrl)}`
                        : baseUrl;
                    response = await fetch(readUrl, { credentials: 'omit', mode: 'cors' });
                }

                if (response.ok) {
                    const data = await response.json();
                    setCount(data.count);
                    localStorage.setItem('visit_counted', 'true');
                } else {
                    console.warn(`API Error: ${response.status}`);
                    setCount(1024);
                }
            } catch (error) {
                console.error('Visitor counter error:', error);
                setCount(1024);
            } finally {
                setLoading(false);
            }
        };

        fetchCount();
    }, []);

    // Render immediately with loading state handles inside
    return (
        <section className="w-full border-b border-grid bg-slate-50 dark:bg-black transition-colors duration-500">
            <div className="max-w-5xl mx-auto border-x border-grid relative overflow-hidden">

                <div className="flex items-center justify-center py-8 relative group">
                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_50%,transparent_75%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]" />
                    </div>

                    <div className="flex flex-col items-center gap-2 relative z-10 transition-transform duration-300 group-hover:scale-105">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/50 dark:bg-white/5 border border-grid">
                            <Eye className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                            <span className="text-sm font-mono text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                Visitor
                                {loading ? (
                                    <span className="w-12 h-4 bg-slate-300 dark:bg-white/10 rounded animate-pulse" />
                                ) : (
                                    <span className="font-bold text-slate-900 dark:text-white">#{count}</span>
                                )}
                            </span>
                        </div>
                        {/* Optional text below */}
                        <span className="text-[10px] text-slate-400 dark:text-slate-600 font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            Traffic Analysis
                        </span>
                    </div>

                    {/* Corner accents for technical feel */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-300 dark:border-white/20" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-300 dark:border-white/20" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-300 dark:border-white/20" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-300 dark:border-white/20" />
                </div>
            </div>
        </section>
    );
};

export default VisitorCounter;
