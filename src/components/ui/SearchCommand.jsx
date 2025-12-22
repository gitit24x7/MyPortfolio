/**
 * SearchCommand Component
 * A Command-K style search palette.
 */
import { useEffect, useState } from 'react'
import { Search, X, Monitor, Folder, FileText, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
    { id: 'projects', label: 'Projects', icon: Folder, href: '#work' },
    { id: 'about', label: 'About Me', icon: FileText, href: '#about' },
    { id: 'stack', label: 'Tech Stack', icon: Monitor, href: '#stack' },
    { id: 'blog', label: 'Blog', icon: FileText, href: '#blog' },
]

const SearchCommand = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('')

    // Filter items
    const filtered = items.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
    )

    // Handle "Escape" key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="fixed left-1/2 top-[20%] -translate-x-1/2 w-full max-w-lg bg-slate-900 border border-white/10 rounded-2xl shadow-2xl z-[101] overflow-hidden"
                    >
                        {/* Search Input */}
                        <div className="flex items-center px-4 py-4 border-b border-white/10">
                            <Search className="w-5 h-5 text-slate-400 mr-3" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="bg-transparent w-full text-slate-50 placeholder:text-slate-500 focus:outline-none text-lg"
                            />
                            <button onClick={onClose} className="p-1 hover:bg-white/10 rounded">
                                <X className="w-5 h-5 text-slate-400" />
                            </button>
                        </div>

                        {/* Exact Layout for Results */}
                        <div className="p-2">
                            {filtered.length === 0 ? (
                                <div className="p-8 text-center text-slate-500">
                                    No results found for "{query}"
                                </div>
                            ) : (
                                <div className="flex flex-col gap-1">
                                    {filtered.map((item) => (
                                        <a
                                            key={item.id}
                                            href={item.href}
                                            onClick={onClose}
                                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 group transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-white/5 rounded-lg text-slate-400 group-hover:text-slate-50 group-hover:bg-white/10 transition-colors">
                                                    <item.icon className="w-4 h-4" />
                                                </div>
                                                <span className="text-slate-300 group-hover:text-amber-50">{item.label}</span>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="px-4 py-2 border-t border-white/10 bg-white/5 text-xs text-slate-500 flex justify-between">
                            <span>Navigation</span>
                            <div className="flex gap-2">
                                <span className="px-1.5 py-0.5 rounded bg-white/10">↑</span>
                                <span className="px-1.5 py-0.5 rounded bg-white/10">↓</span>
                                <span className="px-1.5 py-0.5 rounded bg-white/10">↵</span>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default SearchCommand
