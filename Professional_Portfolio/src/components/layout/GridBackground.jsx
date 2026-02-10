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
        // Added dark:bg-black for pitch black theme
        <div className="relative min-h-screen w-full bg-slate-50 dark:bg-black transition-colors duration-500 flex justify-center">

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

            {/* 2. Vertical Grid Lines - Removed as per user request to clean background */}

            {/* 3. Horizontal Grid Lines - Removed as per user request to clean background */}

            {/* 4. Decorative Hatched Side Columns - Removed as per user request */}

            {/* Content Wrapper - Centered via flexbox */}
            <div className="relative z-10 w-full max-w-full transition-colors">
                {children}
            </div>
        </div>
    )
}

export default GridBackground
