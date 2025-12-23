/**
 * Nav Component (Updated)
 * Features:
 * - Theme Toggle (Day/Night) with smooth animation
 * - Search Trigger
 * - Blog Link
 */
import { useState, useEffect } from 'react'
import { Sun, Moon, Search, Command } from 'lucide-react'
import { motion } from 'framer-motion'
import SearchCommand from '../ui/SearchCommand'

const Nav = () => {
    const [isDark, setIsDark] = useState(true)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    // Handle Theme Toggle
    const toggleTheme = () => {
        setIsDark(!isDark)
        if (isDark) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }

    // Initialize Theme
    useEffect(() => {
        document.documentElement.classList.add('dark')
    }, [])

    // Handle Command+K
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                setIsSearchOpen(true)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 dark:border-white/5 backdrop-blur-md bg-white/50 dark:bg-slate-950/50 transition-colors duration-500">
                <div className="max-w-[80rem] mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo/Name */}
                    <div className="text-slate-900 dark:text-slate-50 font-bold tracking-tight text-xl">
                        Aditya Ojha
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Navigation Links */}
                        <div className="hidden md:flex gap-8 text-sm font-medium">
                            <a href="#work" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">Work</a>
                            <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">About</a>
                            <a href="#blog" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">Blog</a>
                            <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">Contact</a>
                        </div>

                        <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-2" />

                        {/* Search Button */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors group"
                        >
                            <Search className="w-4 h-4 group-hover:text-slate-900 dark:group-hover:text-slate-50" />
                            <span className="text-xs font-mono hidden sm:inline">Search...</span>
                            <div className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-[10px] font-mono">
                                <Command className="w-3 h-3" />
                                <span>K</span>
                            </div>
                        </button>

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            className="relative w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center overflow-hidden hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.div
                                initial={false}
                                animate={{
                                    y: isDark ? 20 : 0,
                                    opacity: isDark ? 0 : 1
                                }}
                                className="absolute"
                            >
                                <Sun className="w-5 h-5 text-amber-500" />
                            </motion.div>
                            <motion.div
                                initial={false}
                                animate={{
                                    y: isDark ? 0 : -20,
                                    opacity: isDark ? 1 : 0
                                }}
                                className="absolute"
                            >
                                <Moon className="w-5 h-5 text-purple-400" />
                            </motion.div>
                        </motion.button>
                    </div>
                </div>
            </nav>

            <SearchCommand isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    )
}

export default Nav
