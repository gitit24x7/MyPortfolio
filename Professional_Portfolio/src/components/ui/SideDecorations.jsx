/**
 * SideDecorations Component
 * Floating code symbols in the gutters outside the main content area.
 * Uses CSS keyframes for float animation to avoid Framer Motion conflicts.
 * Only visible on desktop (>1024px).
 */

import React, { useEffect, useState, useRef, useCallback } from 'react';

// Runes positioned in left/right gutters only (0-12% and 88-100%)
const runeData = [
    { id: 1, symbol: '{ }', left: '6%', top: '18%', size: 16, delay: 0 },
    { id: 2, symbol: '</>', left: '88%', top: '12%', size: 18, delay: 1.2 },
    { id: 3, symbol: '01', left: '4%', top: '40%', size: 14, delay: 2.5 },
    { id: 4, symbol: 'fn()', left: '90%', top: '35%', size: 16, delay: 0.8 },
    { id: 5, symbol: '[ ]', left: '8%', top: '62%', size: 20, delay: 3.1 },
    { id: 6, symbol: '&&', left: '92%', top: '55%', size: 16, delay: 1.7 },
    { id: 7, symbol: '=>', left: '5%', top: '82%', size: 14, delay: 4.0 },
    { id: 8, symbol: ';;', left: '89%', top: '78%', size: 14, delay: 2.0 },
    { id: 9, symbol: '//', left: '10%', top: '95%', size: 16, delay: 3.5 },
    { id: 10, symbol: '~$', left: '93%', top: '92%', size: 14, delay: 0.5 },
];

const SideDecorations = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const runeRefs = useRef({});

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth > 1024);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const handleMouseMove = useCallback((e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    }, []);

    useEffect(() => {
        if (!isDesktop) return;
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isDesktop, handleMouseMove]);

    if (!isDesktop) return null;

    return (
        <>
            {/* Inject CSS keyframes */}
            <style>{`
                @keyframes runeFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
            `}</style>

            <div
                className="fixed inset-0 pointer-events-none overflow-hidden"
                style={{ zIndex: 5 }}
                aria-hidden="true"
            >
                {runeData.map((rune) => {
                    // Calculate flee offset based on mouse proximity
                    const el = runeRefs.current[rune.id];
                    let fleeX = 0;
                    let fleeY = 0;

                    if (el) {
                        const rect = el.getBoundingClientRect();
                        const cx = rect.left + rect.width / 2;
                        const cy = rect.top + rect.height / 2;
                        const dist = Math.hypot(mousePos.x - cx, mousePos.y - cy);

                        if (dist < 200 && dist > 0) {
                            const strength = (200 - dist) / 200;
                            fleeX = ((cx - mousePos.x) / dist) * strength * 40;
                            fleeY = ((cy - mousePos.y) / dist) * strength * 40;
                        }
                    }

                    return (
                        <div
                            key={rune.id}
                            ref={(el) => { runeRefs.current[rune.id] = el; }}
                            className="absolute font-mono select-none"
                            style={{
                                left: rune.left,
                                top: rune.top,
                                fontSize: rune.size,
                                color: 'rgb(16 185 129 / 0.35)',
                                animation: `runeFloat ${4 + rune.delay}s ease-in-out ${rune.delay}s infinite`,
                                transition: 'margin 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                marginLeft: fleeX,
                                marginTop: fleeY,
                                willChange: 'margin',
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                            }}
                        >
                            {rune.symbol}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SideDecorations;
