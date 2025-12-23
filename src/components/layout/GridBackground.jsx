/**
 * GridBackground Component (Final Polish)
 * 
 * Features:
 * 1. Global Noise Texture (SVG Filter)
 * 2. Hatched Side Columns (Diagonal Lines)
 * 3. Standard Grid Lines
 * 4. Dark Mode Support
 */

const GridBackground = ({ children }) => {
    return (
        // Added dark:bg-slate-950 transition-colors for smooth theme switch
        <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">

            {/* 1. Global Noise Texture (Visible in both modes) */}
            {/* Increased opacity for better visibility as requested */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.08] z-[1]">
                <svg width="100%" height="100%">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>

            {/* 2. Vertical Grid Lines */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Main container boundaries */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 transition-colors"
                    style={{ left: 'max(1rem, calc((100vw - 80rem) / 2))' }} />
                <div className="absolute right-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 transition-colors"
                    style={{ right: 'max(1rem, calc((100vw - 80rem) / 2))' }} />

                {/* Inner vertical guides */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={`v-${i}`}
                        className="absolute top-0 bottom-0 w-px bg-slate-200/50 dark:bg-slate-900/50 transition-colors"
                        style={{
                            left: `calc(${(i + 1) * 11.11}% + max(1rem, calc((100vw - 80rem) / 2)))`
                        }}
                    />
                ))}
            </div>

            {/* 3. Horizontal Grid Lines - Reduced opacity for cleaner look */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="absolute left-0 right-0 h-px bg-slate-200/50 dark:bg-slate-900/20 transition-colors"
                        style={{ top: `${i * 5}vh` }}
                    />
                ))}
            </div>

            {/* 4. Decorative Hatched Side Columns */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Left Hatch - Symmetric Diagonal */}
                <div className="absolute top-0 bottom-0 w-16 lg:w-32 left-0 hidden md:block text-slate-900 dark:text-slate-100"
                    style={{
                        backgroundImage: `linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 50%, currentColor 50%, currentColor 75%, transparent 75%, transparent)`,
                        backgroundSize: '8px 8px',
                        opacity: 0.1
                    }}
                />
                {/* Right Hatch - Symmetric Diagonal */}
                <div className="absolute top-0 bottom-0 w-16 lg:w-32 right-0 hidden md:block text-slate-900 dark:text-slate-100"
                    style={{
                        backgroundImage: `linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 50%, currentColor 50%, currentColor 75%, transparent 75%, transparent)`,
                        backgroundSize: '8px 8px',
                        opacity: 0.1
                    }}
                />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 transition-colors">
                {children}
            </div>
        </div>
    )
}

export default GridBackground
