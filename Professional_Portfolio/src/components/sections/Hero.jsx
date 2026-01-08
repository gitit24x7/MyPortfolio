/**
 * Hero Section
 * Large, impactful typography introducing the portfolio
 */

import { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

import { useCalEmbed } from '../../hooks/useCalEmbed';

const gradients = [
    {
        name: "Stellar Horizon",
        type: "stellar"
    },
    {
        name: "Purple Arc",
        type: "arc"
    },
    {
        name: "Noir",
        type: "noir"
    }
];

// Background Component - constrained to left 75% (col-span-3)
const NeonGrid = ({ gradient }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center">
            <div className="w-full max-w-5xl relative">
                {/* Container for left 75% only */}
                <div className="absolute inset-y-0 left-0 w-3/4 overflow-hidden">

                    {/* ============================================
                        STELLAR HORIZON - Premium Cinematic Background
                        Matches reference: space horizon / planet edge / atmospheric glow
                        6 carefully layered elements for a cinematic look
                        ============================================ */}
                    {gradient.type === "stellar" && (
                        <>
                            {/* LAYER 1: Deep Black Space Base
                                Almost pure black with very subtle purple undertone
                                Creates the void of deep space */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(180deg, #030305 0%, #050508 30%, #08070c 60%, #0a0912 80%, #0c0b14 100%)'
                                }}
                            />

                            {/* LAYER 2: Center Radial Glow
                                Subtle purple/indigo emanating from center-bottom
                                Creates depth and atmospheric feel */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'radial-gradient(ellipse 100% 80% at 50% 100%, rgba(88, 28, 135, 0.15) 0%, rgba(67, 20, 100, 0.08) 30%, rgba(30, 10, 60, 0.04) 50%, transparent 70%)'
                                }}
                            />

                            {/* LAYER 3: Secondary Ambient Glow
                                Very soft purple/blue for atmosphere
                                Adds subtle color without being obvious */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'radial-gradient(ellipse 120% 60% at 50% 80%, rgba(76, 29, 149, 0.1) 0%, transparent 50%), radial-gradient(ellipse 80% 40% at 50% 50%, rgba(49, 46, 129, 0.05) 0%, transparent 40%)'
                                }}
                            />

                            {/* LAYER 4: Star Field - Static Background Stars
                                Tiny white dots with varying opacity
                                Low opacity, random distribution, not noise */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `
                                        radial-gradient(1px 1px at 15% 8%, rgba(255,255,255,0.7) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 32% 18%, rgba(255,255,255,0.5) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 48% 6%, rgba(255,255,255,0.6) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 67% 22%, rgba(255,255,255,0.4) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 82% 12%, rgba(255,255,255,0.6) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 8% 28%, rgba(255,255,255,0.35) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 25% 35%, rgba(255,255,255,0.5) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 55% 30%, rgba(255,255,255,0.45) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 72% 38%, rgba(255,255,255,0.4) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 88% 25%, rgba(255,255,255,0.55) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 18% 45%, rgba(255,255,255,0.3) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 42% 42%, rgba(255,255,255,0.45) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 62% 48%, rgba(255,255,255,0.35) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 78% 52%, rgba(255,255,255,0.4) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 95% 40%, rgba(255,255,255,0.5) 0%, transparent 100%)
                                    `
                                }}
                            />

                            {/* LAYER 5: Planet Horizon Curve
                                Large curved dark mass at bottom
                                Creates the iconic planet edge silhouette */}
                            <div
                                className="absolute -bottom-[280px] left-1/2 -translate-x-1/2 w-[900px] h-[280px]"
                                style={{
                                    borderRadius: '50%',
                                    background: 'linear-gradient(to bottom, #0f0e18 0%, #0a0912 40%, #050508 100%)'
                                }}
                            />

                            {/* LAYER 6: Atmospheric Rim Shine
                                The KEY element - bright glowing edge on the planet horizon
                                Soft white/blue edge that defines the atmosphere */}
                            <div
                                className="absolute -bottom-[280px] left-1/2 -translate-x-1/2 w-[900px] h-[280px]"
                                style={{
                                    borderRadius: '50%',
                                    background: 'transparent',
                                    boxShadow: `
                                        inset 0 1px 0 rgba(255, 255, 255, 0.25),
                                        inset 0 2px 1px rgba(200, 180, 255, 0.15),
                                        inset 0 4px 3px rgba(147, 112, 219, 0.1),
                                        inset 0 8px 8px rgba(88, 28, 135, 0.08)
                                    `
                                }}
                            />

                            {/* LAYER 7: Horizon Glow Arc
                                Concentrated atmospheric glow right at the edge
                                White → soft purple → transparent */}
                            <div
                                className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-[500px] h-[6px]"
                                style={{
                                    background: 'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(255, 255, 255, 0.35) 0%, rgba(200, 180, 255, 0.2) 40%, transparent 80%)',
                                    filter: 'blur(3px)'
                                }}
                            />

                            {/* LAYER 8: Atmospheric Gradient
                                From bottom: white → soft purple → deep indigo → transparent
                                Radial + linear blend for smooth transitions */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-36"
                                style={{
                                    background: 'linear-gradient(to top, rgba(147, 112, 219, 0.12) 0%, rgba(88, 28, 135, 0.06) 40%, rgba(49, 46, 129, 0.03) 70%, transparent 100%)'
                                }}
                            />

                            {/* LAYER 9: Vignette - Darkened Corners
                                Focuses attention on center
                                Subtle darkening at edges */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'radial-gradient(ellipse 70% 60% at 50% 60%, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.3) 100%)'
                                }}
                            />
                        </>
                    )}

                    {/* Purple Arc Background */}
                    {gradient.type === "arc" && (
                        <>
                            {/* Base dark background */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(to bottom, #05050a 0%, #08080f 50%, #0a0a12 100%)'
                                }}
                            />
                            {/* Stars layer - static */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `
                                        radial-gradient(1px 1px at 15% 10%, rgba(255,255,255,0.7) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 35% 20%, rgba(255,255,255,0.5) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 55% 8%, rgba(255,255,255,0.6) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 75% 25%, rgba(255,255,255,0.4) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 10% 35%, rgba(255,255,255,0.5) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 45% 30%, rgba(255,255,255,0.6) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.4) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 85% 15%, rgba(255,255,255,0.7) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 25% 45%, rgba(255,255,255,0.3) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 60% 50%, rgba(255,255,255,0.5) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 90% 35%, rgba(255,255,255,0.4) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 5% 20%, rgba(255,255,255,0.6) 0%, transparent 100%)
                                    `
                                }}
                            />
                            {/* Twinkling stars - group 1 (slow blink) */}
                            <div
                                className="absolute inset-0 animate-pulse"
                                style={{
                                    animationDuration: '3s',
                                    backgroundImage: `
                                        radial-gradient(1.5px 1.5px at 20% 15%, rgba(255,255,255,0.9) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 50% 12%, rgba(200,180,255,0.8) 0%, transparent 100%),
                                        radial-gradient(1.5px 1.5px at 80% 22%, rgba(255,255,255,0.9) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 30% 38%, rgba(200,200,255,0.7) 0%, transparent 100%)
                                    `
                                }}
                            />
                            {/* Twinkling stars - group 2 (medium blink) */}
                            <div
                                className="absolute inset-0 animate-pulse"
                                style={{
                                    animationDuration: '2s',
                                    animationDelay: '0.5s',
                                    backgroundImage: `
                                        radial-gradient(1px 1px at 40% 8%, rgba(255,255,255,0.8) 0%, transparent 100%),
                                        radial-gradient(1.5px 1.5px at 65% 18%, rgba(180,160,255,0.9) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 12% 28%, rgba(255,255,255,0.7) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 88% 42%, rgba(220,200,255,0.8) 0%, transparent 100%)
                                    `
                                }}
                            />
                            {/* Twinkling stars - group 3 (fast blink) */}
                            <div
                                className="absolute inset-0 animate-pulse"
                                style={{
                                    animationDuration: '1.5s',
                                    animationDelay: '1s',
                                    backgroundImage: `
                                        radial-gradient(1px 1px at 8% 5%, rgba(255,255,255,0.8) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 72% 32%, rgba(200,180,255,0.7) 0%, transparent 100%),
                                        radial-gradient(1.5px 1.5px at 95% 10%, rgba(255,255,255,0.9) 0%, transparent 100%),
                                        radial-gradient(1px 1px at 55% 45%, rgba(180,170,255,0.6) 0%, transparent 100%)
                                    `
                                }}
                            />
                            {/* Glowing purple arc at bottom */}
                            <div
                                className="absolute -bottom-[300px] left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
                                style={{
                                    borderRadius: '50%',
                                    background: 'linear-gradient(to top, #4c1d95 0%, #6d28d9 30%, #7c3aed 50%, #8b5cf6 70%, transparent 100%)',
                                    filter: 'blur(20px)',
                                    opacity: 0.8
                                }}
                            />
                            {/* Inner glow */}
                            <div
                                className="absolute -bottom-[280px] left-1/2 -translate-x-1/2 w-[500px] h-[380px]"
                                style={{
                                    borderRadius: '50%',
                                    background: 'linear-gradient(to top, #5b21b6 0%, #7c3aed 40%, transparent 100%)',
                                    filter: 'blur(30px)',
                                    opacity: 0.6
                                }}
                            />
                            {/* Additional glow spread */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-40"
                                style={{
                                    background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(139, 92, 246, 0.3) 0%, rgba(124, 58, 237, 0.1) 40%, transparent 70%)'
                                }}
                            />
                        </>
                    )}

                    {/* Noir Background - Clean Dark Grey */}
                    {gradient.type === "noir" && (
                        <>
                            {/* Base dark gradient - pure charcoal */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 30%, #141414 60%, #181818 80%, #1a1a1a 100%)'
                                }}
                            />
                            {/* Subtle center vignette - slightly lighter in center */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(30, 30, 30, 0.4) 0%, transparent 60%)'
                                }}
                            />
                            {/* Bottom edge subtle highlight */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-32"
                                style={{
                                    background: 'linear-gradient(to top, rgba(40, 40, 40, 0.3) 0%, transparent 100%)'
                                }}
                            />
                            {/* Edge darkening for depth */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'radial-gradient(ellipse 70% 50% at 50% 50%, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.4) 100%)'
                                }}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

const Hero = () => {
    // Initialize Cal.com embed
    useCalEmbed();

    // State for Gradient Switcher (Default: Sunset Blur)
    const [activeGradient, setActiveGradient] = useState(gradients[0]);


    // Local Profile Image
    const PROFILE_IMG_URL = "/tech/Profile_pic.png";

    return (
        <section className="min-h-screen flex flex-col justify-center relative z-10 transition-colors duration-500">

            <div className="mt-10 sm:mt-20">
                {/* Unified background for profile rows */}
                <div className="relative" role="region" aria-label="Profile Section">
                    {/* NeonGrid constrained to left 75% of content area */}
                    <NeonGrid gradient={activeGradient} />

                    {/* Mobile Only: Profile Image Hero */}
                    <div className="md:hidden w-full border-y border-grid relative">
                        <div className="max-w-5xl mx-auto border-x border-grid box-border">
                            <div
                                className="w-full h-48 sm:h-64 relative"
                                style={{
                                    backgroundImage: `url(${PROFILE_IMG_URL})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center 20%'
                                }}
                                role="img"
                                aria-label="Aditya Ojha - Profile Photo"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                            </div>
                        </div>
                    </div>

                    {/* Row 1: Name & System Metadata (Full Width) */}
                    <div className="w-full border-y md:border-y border-grid relative group/row overflow-hidden border-t-0 md:border-t">
                        <div className="max-w-5xl mx-auto border-x border-grid relative z-10 overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-100 mix-blend-overlay pointer-events-none"></div>
                            <div className="grid grid-cols-1 md:grid-cols-4 relative z-10">
                                {/* Left Content */}
                                <div className="col-span-1 md:col-span-3 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-between relative">
                                    <div className="absolute inset-0 bg-white/0 group-hover/row:bg-white/[0.02] transition-colors duration-500" />
                                    <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight relative z-10">
                                        Aditya Ojha
                                    </h1>
                                    <div className="text-[10px] sm:text-xs text-slate-200 font-mono mt-1 sm:mt-0 relative z-10 flex items-center gap-2 sm:gap-3">
                                        <span>SYS: v3.0.0</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 animate-pulse" />
                                        <span className="opacity-80">ONLINE</span>
                                    </div>
                                    {/* Gradient Switcher Controls (Hidden by default, visible on hover) */}
                                    <div className="absolute top-2 right-2 flex gap-1.5 z-20 opacity-0 group-hover/row:opacity-100 transition-opacity duration-300">
                                        {gradients.map((grad) => (
                                            <button
                                                key={grad.name}
                                                onClick={() => setActiveGradient(grad)}
                                                className={`w-2 h-2 rounded-full border border-white/20 transition-all duration-300 ${activeGradient.name === grad.name ? 'scale-125 bg-white' : 'bg-white/30 hover:bg-white/70'
                                                    }`}
                                                title={grad.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                                {/* Right Profile Slice (Top) - Hidden on mobile */}
                                <div
                                    className="hidden md:block col-span-1 border-l border-grid relative overflow-hidden transition-all duration-700 filter grayscale hover:grayscale-0 min-h-[120px]"
                                    style={{
                                        backgroundImage: `url(${PROFILE_IMG_URL})`,
                                        backgroundSize: '110% 320%',
                                        backgroundPosition: 'center 0%'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply transition-opacity duration-500 group-hover/row:opacity-0" />
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Tagline & Contact (Full Width) */}
                    <div className="w-full border-b border-grid relative group/row overflow-hidden">
                        <div className="max-w-5xl mx-auto border-x border-grid relative z-10 overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-100 mix-blend-overlay pointer-events-none"></div>
                            <div className="grid grid-cols-1 md:grid-cols-4 relative z-10">
                                {/* Left Content */}
                                <div className="col-span-1 md:col-span-3 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/0 group-hover/row:bg-white/[0.02] transition-colors duration-500" />
                                    <p className="text-xs sm:text-base text-white font-light tracking-wide text-left relative z-10 w-full break-words pr-2">
                                        Full Stack Developer crafting systems with <span className="text-white font-medium whitespace-nowrap">design intuition</span>.
                                    </p>
                                    <a href="mailto:thisisadityaojha@gmail.com" className="text-[10px] sm:text-sm text-slate-200 hover:text-white transition-colors mt-1 sm:mt-2 relative z-10 flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                                        <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                                        thisisadityaojha@gmail.com
                                    </a>
                                </div>
                                {/* Right Profile Slice (Middle) - Hidden on mobile */}
                                <div
                                    className="hidden md:block col-span-1 border-l border-grid relative overflow-hidden transition-all duration-700 filter grayscale hover:grayscale-0 min-h-[80px]"
                                    style={{
                                        backgroundImage: `url(${PROFILE_IMG_URL})`,
                                        backgroundSize: '110% 320%',
                                        backgroundPosition: 'center 46%'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply transition-opacity duration-500 group-hover/row:opacity-0" />
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Status & Socials (Full Width) */}
                    <div className="w-full border-b border-grid relative group/row overflow-hidden">
                        <div className="max-w-5xl mx-auto border-x border-grid relative z-10 overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-100 mix-blend-overlay pointer-events-none"></div>
                            <div className="grid grid-cols-1 md:grid-cols-4 relative z-10">
                                {/* Left Content */}
                                <div className="col-span-1 md:col-span-3 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between relative">
                                    <div className="absolute inset-0 bg-white/0 group-hover/row:bg-white/[0.02] transition-colors duration-500" />

                                    {/* Status */}
                                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 relative z-10">
                                        <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-[10px] sm:text-xs text-emerald-300/80 font-medium tracking-wide">Available for opportunities</span>
                                    </div>

                                    {/* Location Info */}
                                    <div className="flex items-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-mono text-slate-200 relative z-10 mt-2 sm:mt-0">
                                        <div className="flex items-center gap-1.5 group cursor-default">
                                            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-300 group-hover:text-emerald-400 transition-colors" />
                                            <span className="hidden sm:inline text-slate-200 dark:text-slate-200">Currently:</span>
                                            <span className="group-hover:text-white transition-colors text-white">Bengaluru</span>
                                        </div>
                                        <div className="w-px h-3 bg-slate-600" />
                                        <div className="flex items-center gap-1.5 group cursor-default">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-300 group-hover:text-amber-400 transition-colors">
                                                <path d="M4 21h16" />
                                                <path d="M7 21V7" />
                                                <path d="M17 21V7" />
                                                <path d="M7 7a5 5 0 0 1 10 0" />
                                                <path d="M8 7h8" />
                                                <path d="M6 4h2v3H6z" />
                                                <path d="M16 4h2v3h-2z" />
                                            </svg>
                                            <span className="hidden sm:inline text-slate-200 dark:text-slate-200">From:</span>
                                            <span className="group-hover:text-white transition-colors text-white">Hyderabad</span>
                                        </div>
                                    </div>

                                    {/* Socials */}
                                    <nav className="flex items-center gap-4 sm:gap-6 mt-2 sm:mt-0 relative z-10" aria-label="Social media links">
                                        <a href="https://github.com/gitit24x7" target="_blank" rel="noopener noreferrer" aria-label="Visit Aditya's GitHub profile" className="text-slate-200 hover:text-white transition-colors transform hover:scale-110 duration-200">
                                            <Github className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                                        </a>
                                        <div className="h-3 sm:h-4 w-px bg-slate-600" aria-hidden="true" />
                                        <a href="https://linkedin.com/in/ojhaadityaa" target="_blank" rel="noopener noreferrer" aria-label="Connect with Aditya on LinkedIn" className="text-slate-200 hover:text-white transition-colors transform hover:scale-110 duration-200">
                                            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                                        </a>
                                        <div className="h-3 sm:h-4 w-px bg-slate-600" aria-hidden="true" />
                                        <a href="https://x.com/buggy247_?s=21" target="_blank" rel="noopener noreferrer" aria-label="Follow Aditya on X (Twitter)" className="text-slate-200 hover:text-white transition-colors transform hover:scale-110 duration-200">
                                            <Twitter className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                                        </a>
                                    </nav>
                                </div>
                                {/* Right Profile Slice (Bottom) - Hidden on mobile */}
                                <div
                                    className="hidden md:block col-span-1 border-l border-grid relative overflow-hidden transition-all duration-700 filter grayscale hover:grayscale-0 min-h-[100px]"
                                    style={{
                                        backgroundImage: `url(${PROFILE_IMG_URL})`,
                                        backgroundSize: '110% 320%',
                                        backgroundPosition: 'center 100%'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply transition-opacity duration-500 group-hover/row:opacity-0" />
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Headline Content */}
                <div className="w-full border-b border-grid bg-slate-50 dark:bg-black transition-colors duration-500">
                    <div className="max-w-5xl mx-auto border-x border-grid py-10 sm:py-20 px-4 sm:px-6 text-center relative">
                        <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 leading-none transition-colors duration-500">
                            Building beautiful,
                            <br />
                            performant web
                            <br />
                            experiences.
                        </h1>
                    </div>
                </div>

                {/* Row 2: Subtext */}
                <div className="w-full border-b border-grid bg-slate-50/30 dark:bg-black/20 transition-colors duration-500">
                    <div className="max-w-5xl mx-auto border-x border-grid py-6 sm:py-12 px-4 sm:px-6 flex justify-center">
                        <p className="text-sm sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl text-center font-light leading-relaxed transition-colors duration-500">
                            Architecting digital ecosystems with precision and passion.
                            Turning complex problems into elegant interfaces.
                        </p>
                    </div>
                </div>

                {/* Row 3: Actions */}
                <div className="w-full border-b border-grid bg-slate-100/50 dark:bg-black/40 transition-colors duration-500">
                    <div className="max-w-5xl mx-auto border-x border-grid py-6 sm:py-12 px-4 sm:px-6 flex justify-center">
                        <div className="flex gap-8">
                            <div className="relative group">
                                {/* Crosshairs */}
                                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-slate-900/20 dark:border-white/20 transition-colors" />
                                <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-slate-900/20 dark:border-white/20 transition-colors" />
                                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-slate-900/20 dark:border-white/20 transition-colors" />
                                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-slate-900/20 dark:border-white/20 transition-colors" />

                                <button
                                    data-cal-namespace="30min"
                                    data-cal-link="aditya-ojha-hvjfie/30min"
                                    data-cal-config='{"layout":"month_view"}'
                                    className="block px-6 py-2 sm:px-8 sm:py-4 bg-transparent border border-amber-500/50 dark:border-amber-400/50 text-sm sm:text-base text-slate-900 dark:text-slate-200 font-medium hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.1)] hover:shadow-[0_0_25px_rgba(251,191,36,0.4)] hover:border-amber-500"
                                >
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
