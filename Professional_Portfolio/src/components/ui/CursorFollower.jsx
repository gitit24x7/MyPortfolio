/**
 * CursorFollower Component (Refactored)
 * Uses Framer Motion for smooth spring physics interactions.
 */

import { useState, useEffect } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CursorFollower = () => {
    // 1. Motion Values: Track raw mouse position
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    // 2. Spring Physics: Create the "lag" effect
    // stiffness: lower = more drag/lag
    // damping: higher = less bounce, smoother stop
    const springConfig = { stiffness: 150, damping: 15, mass: 0.5 }
    const x = useSpring(cursorX, springConfig)
    const y = useSpring(cursorY, springConfig)

    // 3. State for directional facing and movement
    const [isMoving, setIsMoving] = useState(false)
    const [facingRight, setFacingRight] = useState(true)

    useEffect(() => {
        let timeout
        let lastX = 0

        const moveHandler = (e) => {
            // Update raw motion values
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)

            // Determine direction
            if (e.clientX > lastX) setFacingRight(true)
            if (e.clientX < lastX) setFacingRight(false)
            lastX = e.clientX

            // Handle moving state
            setIsMoving(true)
            clearTimeout(timeout)
            timeout = setTimeout(() => setIsMoving(false), 200)
        }

        window.addEventListener('mousemove', moveHandler)
        return () => {
            window.removeEventListener('mousemove', moveHandler)
            clearTimeout(timeout)
        }
    }, [])

    return (
        <motion.div
            className="fixed pointer-events-none z-50 will-change-transform"
            style={{
                x,
                y,
                translateX: '-50%',
                translateY: '-50%'
            }}
        >
            {/* Dog Sprite Container */}
            <motion.div
                animate={{
                    scaleX: facingRight ? 1 : -1, // Flip based on direction
                    rotate: isMoving ? (facingRight ? 5 : -5) : 0 // Slight tilt when running
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-8 h-8"
            >
                {isMoving ? (
                    // Running Dog Sprite (Pixel Art)
                    <svg width="32" height="32" viewBox="0 0 32 32" className="drop-shadow-lg">
                        <path
                            fill="#8B4513" // Body color
                            d="M8 12 h16 v8 h-16 z"
                        />
                        <path
                            fill="#A0522D" // Head
                            d="M20 8 h8 v8 h-8 z"
                        />
                        <path
                            fill="#5D2906" // Ear
                            d="M24 4 h4 v4 h-4 z"
                        />
                        {/* Animated Legs */}
                        <motion.rect
                            x="10" y="20" width="4" height="8" fill="#5D2906"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ repeat: Infinity, duration: 0.15 }}
                        />
                        <motion.rect
                            x="18" y="20" width="4" height="8" fill="#5D2906"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ repeat: Infinity, duration: 0.15, delay: 0.07 }}
                        />
                        {/* Wagging Tail */}
                        <motion.rect
                            x="4" y="10" width="4" height="6" fill="#8B4513"
                            animate={{ rotate: [-20, 20, -20] }}
                            transition={{ repeat: Infinity, duration: 0.2 }}
                        />
                    </svg>
                ) : (
                    // Sitting Dog Sprite
                    <svg width="32" height="32" viewBox="0 0 32 32" className="drop-shadow-lg">
                        <path fill="#8B4513" d="M8 16 h16 v12 h-16 z" />
                        <path fill="#A0522D" d="M16 8 h8 v8 h-8 z" />
                        <path fill="#5D2906" d="M20 4 h4 v4 h-4 z" />
                        <rect x="10" y="24" width="4" height="4" fill="#5D2906" />
                        <rect x="18" y="24" width="4" height="4" fill="#5D2906" />
                        <rect x="4" y="20" width="4" height="8" fill="#8B4513" />
                    </svg>
                )}
            </motion.div>
        </motion.div>
    )
}

export default CursorFollower
