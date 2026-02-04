import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GridBackground from '../components/layout/GridBackground';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

const NotFound = () => {
    return (
        <GridBackground>
            <Nav />
            <main className="min-h-screen flex items-center justify-center relative z-10 px-6 pt-20">
                <div className="text-center">

                    {/* Animated Bear Illustration */}
                    <div className="flex justify-center mb-8 relative">
                        {/* Soft Glow */}
                        <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full scale-75" />

                        <motion.svg
                            width="180"
                            height="160"
                            viewBox="0 0 200 180"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Honey Pot */}
                            <motion.g
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                            >
                                {/* Pot Body */}
                                <path d="M140 160C140 171.05 131.05 180 120 180H80C68.95 180 60 171.05 60 160V120H140V160Z" fill="#D97706" />
                                <rect x="55" y="110" width="90" height="15" rx="5" fill="#B45309" />
                                {/* Honey Drip */}
                                <path d="M70 125V145C70 147.76 72.24 150 75 150C77.76 150 80 147.76 80 145V125H70Z" fill="#F59E0B" />
                                <path d="M120 125V140C120 142.76 122.24 145 125 145C127.76 145 130 142.76 130 140V125H120Z" fill="#F59E0B" />
                                {/* Label */}
                                <rect x="85" y="140" width="30" height="20" rx="2" fill="#FEF3C7" />
                                <path d="M92 145V155M97 145V155M102 145V155M107 145V155" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
                            </motion.g>

                            {/* Bear Peeking from Behind */}
                            <motion.g
                                initial={{ y: 50 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                            >
                                {/* Bear Head */}
                                <circle cx="100" cy="80" r="45" fill="#78350F" />
                                {/* Ears */}
                                <circle cx="65" cy="55" r="15" fill="#78350F" />
                                <circle cx="65" cy="55" r="8" fill="#5B2106" />
                                <circle cx="135" cy="55" r="15" fill="#78350F" />
                                <circle cx="135" cy="55" r="8" fill="#5B2106" />

                                {/* Snout */}
                                <ellipse cx="100" cy="95" rx="18" ry="14" fill="#92400E" />
                                <circle cx="100" cy="90" r="5" fill="#451A03" />

                                {/* Eyes (Searching Animation) */}
                                <motion.g
                                    animate={{ x: [-3, 3, -3] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                >
                                    <circle cx="85" cy="75" r="4" fill="#000" />
                                    <circle cx="83" cy="73" r="1.5" fill="#FFF" />
                                    <circle cx="115" cy="75" r="4" fill="#000" />
                                    <circle cx="113" cy="73" r="1.5" fill="#FFF" />
                                </motion.g>

                                {/* Paws holding pot */}
                                <ellipse cx="58" cy="130" rx="12" ry="15" fill="#78350F" transform="rotate(-20 58 130)" />
                                <ellipse cx="142" cy="130" rx="12" ry="15" fill="#78350F" transform="rotate(20 142 130)" />
                            </motion.g>

                            {/* Empty Pot Sign / Question Mark */}
                            <motion.g
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                            >
                                <text x="130" y="40" fontSize="40" fill="#F59E0B" fontFamily="monospace" fontWeight="bold">?</text>
                            </motion.g>

                            {/* Buzzing Bee */}
                            <motion.g
                                animate={{
                                    x: [0, 20, 0, -20, 0],
                                    y: [0, -10, 0, -5, 0],
                                    rotate: [0, 10, 0, -10, 0]
                                }}
                                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                            >
                                <circle cx="40" cy="40" r="5" fill="#FCD34D" />
                                <path d="M36 36L44 44M44 36L36 44" stroke="#000" strokeWidth="1" strokeOpacity="0.5" />
                                {/* Wings */}
                                <ellipse cx="35" cy="35" rx="6" ry="3" fill="#FFF" fillOpacity="0.6" transform="rotate(-45 35 35)" />
                                <ellipse cx="45" cy="35" rx="6" ry="3" fill="#FFF" fillOpacity="0.6" transform="rotate(45 45 35)" />
                                {/* Dashed Trail */}
                                <motion.path
                                    d="M 30,40 C 20,40 20,60 10,60"
                                    stroke="#FCD34D"
                                    strokeWidth="1"
                                    strokeDasharray="2 2"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                />
                            </motion.g>

                        </motion.svg>
                    </div>

                    <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 mb-4 font-mono">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-white font-bold mb-6 tracking-wide">
                        PAGE_NOT_FOUND
                    </h2>
                    <p className="text-slate-400 max-w-md mx-auto mb-10 text-lg leading-relaxed">
                        Where on earth are you even trying to go bro?
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20"
                    >
                        <span>← Return to Headquarters</span>
                    </Link>
                </div>
            </main>
            <Footer />
        </GridBackground>
    );
};

export default NotFound;
