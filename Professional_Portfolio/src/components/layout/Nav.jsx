/**
 * Nav Component (Updated)
 * Features:
 * - Theme Toggle (Day/Night) with beautiful DROP animation transition
 * - Liquid drop effect that expands from toggle button
 * - Smooth ripple and icon animations
 * - Search Trigger
 * - Blog Link
 */
import { useState, useEffect, useRef } from 'react'
import { Sun, Moon, Search, Command, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import SearchCommand from '../ui/SearchCommand'

const Nav = () => {
    const [isDark, setIsDark] = useState(true)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [dropOrigin, setDropOrigin] = useState({ x: 0, y: 0 })
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const toggleRef = useRef(null)

    // Handle Theme Toggle with drop animation
    const toggleTheme = () => {
        if (isAnimating) return

        // Get toggle button position for drop origin
        if (toggleRef.current) {
            const rect = toggleRef.current.getBoundingClientRect()
            setDropOrigin({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            })
        }

        setIsAnimating(true)

        // INSTANT theme change - no delay!
        setIsDark(!isDark)
        if (isDark) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }

        // Quick animation reset
        setTimeout(() => {
            setIsAnimating(false)
        }, 450)
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

    // Drop animation - scale-based circle expansion
    const dropVariants = {
        initial: {
            scale: 0,
            opacity: 0.3
        },
        animate: {
            scale: 1,
            opacity: 0.15,
            transition: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1]
            }
        },
        exit: {
            scale: 0,
            opacity: 0,
            transition: {
                duration: 0.25,
                ease: [0.55, 0, 1, 0.45]
            }
        }
    }

    // Calculate size needed to cover the screen
    const getDropSize = () => {
        if (typeof window === 'undefined') return 3000
        return Math.max(window.innerWidth, window.innerHeight) * 3
    }

    // Ripple effect variants
    const rippleVariants = {
        initial: { scale: 0, opacity: 0.6 },
        animate: {
            scale: 4,
            opacity: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    }

    // Icon animation variants
    const iconVariants = {
        initial: {
            scale: 0,
            rotate: -180,
            opacity: 0
        },
        animate: {
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 0.1
            }
        },
        exit: {
            scale: 0,
            rotate: 180,
            opacity: 0,
            transition: {
                duration: 0.2
            }
        },
        hover: {
            scale: 1.1,
            rotate: 15,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 10
            }
        }
    }

    return (
        <>
            {/* Drop overlay - scales from toggle button */}
            <AnimatePresence>
                {isAnimating && (
                    <motion.div
                        className="fixed z-[100] pointer-events-none rounded-full"
                        style={{
                            width: getDropSize(),
                            height: getDropSize(),
                            left: dropOrigin.x - getDropSize() / 2,
                            top: dropOrigin.y - getDropSize() / 2,
                            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'
                        }}
                        variants={dropVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    />
                )}
            </AnimatePresence>

            <nav className="sticky top-0 w-full z-50 border-b border-grid backdrop-blur-md bg-white/50 dark:bg-slate-950/50 transition-colors duration-500">
                <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo/Name */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="relative group overflow-hidden rounded shadow-sm hover:shadow-md transition-shadow duration-300">
                            <svg width="45" height="30" viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg" className="block">
                                <rect width="90" height="60" fill="#FFFFFF" />
                                <rect width="90" height="20" fill="#FF9933" />
                                <rect y="40" width="90" height="20" fill="#138808" />
                                <circle cx="45" cy="30" r="9" fill="none" stroke="#000080" strokeWidth="2" />
                                <g stroke="#000080" strokeWidth="0.5" transform="translate(45,30)">
                                    {/* 24 Spokes represented by 12 crossing lines */}
                                    {[...Array(12)].map((_, i) => (
                                        <line key={i} x1="0" y1="-9" x2="0" y2="9" transform={`rotate(${i * 15})`} />
                                    ))}
                                </g>
                            </svg>
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    </Link>

                    <div className="flex items-center gap-6">
                        {/* Navigation Links */}
                        <div className="hidden md:flex gap-8 text-sm font-medium">
                            <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">Home</Link>
                            <a href="/#work" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">Work</a>
                            <a href="/#about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">About</a>
                            <Link to="/blog" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">Blog</Link>
                            <a
                                href="mailto:thisisadityaojha@gmail.com?subject=Let's%20Connect%20-%20From%20Your%20Portfolio&body=Hi%20Aditya,%0A%0AI%20found%20your%20portfolio%20and%20would%20love%20to%20connect!%0A%0A"
                                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                            >
                                Contact
                            </a>
                        </div>

                        <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-2" />

                        {/* Search Button */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors group"
                        >
                            <Search className="w-4 h-4 group-hover:text-slate-900 dark:group-hover:text-slate-50" />
                            <span className="text-xs font-sans hidden sm:inline">Search...</span>
                            <div className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-[10px] font-sans">
                                <Command className="w-3 h-3" />
                                <span>K</span>
                            </div>
                        </button>

                        {/* Enhanced Theme Toggle with Drop Animation */}
                        <motion.button
                            ref={toggleRef}
                            onClick={toggleTheme}
                            disabled={isAnimating}
                            className="relative w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center overflow-hidden hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer disabled:cursor-wait"
                            whileTap={{ scale: 0.85 }}
                            whileHover="hover"
                        >
                            {/* Ripple effect on click */}
                            <AnimatePresence>
                                {isAnimating && (
                                    <>
                                        <motion.span
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                                backgroundColor: isDark ? 'rgba(251, 191, 36, 0.3)' : 'rgba(255, 255, 255, 0.3)'
                                            }}
                                            variants={rippleVariants}
                                            initial="initial"
                                            animate="animate"
                                        />
                                        <motion.span
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                                backgroundColor: isDark ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255, 255, 255, 0.2)'
                                            }}
                                            variants={rippleVariants}
                                            initial="initial"
                                            animate="animate"
                                            transition={{ delay: 0.1 }}
                                        />
                                    </>
                                )}
                            </AnimatePresence>

                            {/* Sun Icon */}
                            <AnimatePresence mode="wait">
                                {!isDark && (
                                    <motion.div
                                        key="sun"
                                        className="absolute"
                                        variants={iconVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        whileHover="hover"
                                    >
                                        <Sun className="w-5 h-5 text-amber-500 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Moon Icon */}
                            <AnimatePresence mode="wait">
                                {isDark && (
                                    <motion.div
                                        key="moon"
                                        className="absolute"
                                        variants={iconVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        whileHover="hover"
                                    >
                                        <Moon className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Glow ring effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2"
                                style={{
                                    borderColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(251, 191, 36, 0.3)'
                                }}
                                animate={{
                                    scale: isAnimating ? [1, 1.5, 1] : 1,
                                    opacity: isAnimating ? [1, 0, 1] : 0.5
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: 'easeOut'
                                }}
                            />
                        </motion.button>

                        {/* Mobile Hamburger Menu Icon */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                            aria-label="Open menu"
                        >
                            <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            className="fixed right-0 top-0 bottom-0 w-[280px] bg-white dark:bg-slate-900 z-[70] shadow-2xl md:hidden overflow-y-auto"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            {/* Menu Header */}
                            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-white/10">
                                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Menu</h2>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                                </button>
                            </div>

                            {/* Menu Items */}
                            <nav className="p-6">
                                <motion.div
                                    className="flex flex-col gap-2"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={{
                                        open: {
                                            transition: {
                                                staggerChildren: 0.07,
                                                delayChildren: 0.1
                                            }
                                        },
                                        closed: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                staggerDirection: -1
                                            }
                                        }
                                    }}
                                >
                                    <motion.div
                                        variants={{
                                            open: { opacity: 1, x: 0 },
                                            closed: { opacity: 0, x: 20 }
                                        }}
                                    >
                                        <Link
                                            to="/"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 font-medium transition-colors"
                                        >
                                            Home
                                        </Link>
                                    </motion.div>

                                    <motion.div
                                        variants={{
                                            open: { opacity: 1, x: 0 },
                                            closed: { opacity: 0, x: 20 }
                                        }}
                                    >
                                        <a
                                            href="/#work"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 font-medium transition-colors"
                                        >
                                            Work
                                        </a>
                                    </motion.div>

                                    <motion.div
                                        variants={{
                                            open: { opacity: 1, x: 0 },
                                            closed: { opacity: 0, x: 20 }
                                        }}
                                    >
                                        <a
                                            href="/#about"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 font-medium transition-colors"
                                        >
                                            About
                                        </a>
                                    </motion.div>

                                    <motion.div
                                        variants={{
                                            open: { opacity: 1, x: 0 },
                                            closed: { opacity: 0, x: 20 }
                                        }}
                                    >
                                        <Link
                                            to="/blog"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 font-medium transition-colors"
                                        >
                                            Blog
                                        </Link>
                                    </motion.div>

                                    <motion.div
                                        variants={{
                                            open: { opacity: 1, x: 0 },
                                            closed: { opacity: 0, x: 20 }
                                        }}
                                    >
                                        <a
                                            href="mailto:thisisadityaojha@gmail.com?subject=Let's%20Connect%20-%20From%20Your%20Portfolio&body=Hi%20Aditya,%0A%0AI%20found%20your%20portfolio%20and%20would%20love%20to%20connect!%0A%0A"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 font-medium transition-colors"
                                        >
                                            Contact
                                        </a>
                                    </motion.div>
                                </motion.div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <SearchCommand isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    )
}

export default Nav
