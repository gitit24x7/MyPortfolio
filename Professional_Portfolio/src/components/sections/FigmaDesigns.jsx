import React, { useState } from 'react';
import { X } from 'lucide-react';

const figmaDesigns = [
    {
        id: 'figma_new_1',
        title: 'Recent Design 1',
        category: 'UI Concept',
        url: '/tech/Figma/figma_design_1.png',
    },
    {
        id: 'figma_new_2',
        title: 'Recent Design 2',
        category: 'App Interface',
        url: '/tech/Figma/figma_design_2.png',
    },
    {
        id: 'figma_three',
        title: 'Agency Landing Page',
        category: 'Web Design',
        url: '/tech/Figma/agency_landing_page.png',
    },
    {
        id: 'figma_four',
        title: 'Task Management System',
        category: 'Productivity',
        url: '/tech/Figma/Shunya.png',
    },
    {
        id: 'figma_five',
        title: 'Travel Booking Flow',
        category: 'Mobile UI',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 'figma_six',
        title: 'Smart Home Controller',
        category: 'IoT Interface',
        url: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 'figma_seven',
        title: 'Analytics Platform',
        category: 'Dashboard',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', // Reusing strictly high quality tech img
    },
    {
        id: 'figma_eight',
        title: 'Social Media Kit',
        category: 'Design System',
        url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    }
];

const FigmaDesigns = () => {
    const [selectedDesign, setSelectedDesign] = useState(null);

    return (
        <section id="designs" className="relative z-10 transition-colors duration-500">
            {/* Header / Title Row */}
            <div className="w-full border-b border-grid">
                <div className="max-w-5xl mx-auto border-x border-grid">
                    <div className="px-6 py-6 border-b-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight transition-colors">
                            My Figma Designs.
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-2">
                            Explorations in UI/UX.
                        </p>
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="w-full border-b border-grid">
                <div className="max-w-5xl mx-auto border-x border-grid">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
                        {figmaDesigns.map((design, index) => (
                            <div
                                key={design.id}
                                className="group relative aspect-[4/3] bg-slate-100 dark:bg-slate-900 overflow-hidden border border-grid"
                                onClick={() => setSelectedDesign(design)}
                            >
                                {/* Image Container with "Pop" effect */}
                                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 group-hover:z-10 cursor-pointer">
                                    <img
                                        src={design.url}
                                        alt={design.id}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                    />

                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                        <p className="text-white font-bold text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            {design.title}
                                        </p>
                                        <p className="text-slate-300 text-xs font-mono translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            {design.category}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedDesign && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 pt-20 bg-slate-900/95 backdrop-blur-md transition-opacity duration-300"
                    onClick={() => setSelectedDesign(null)}
                >
                    <div
                        className="relative w-full max-w-5xl flex flex-col bg-transparent rounded-xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedDesign(null)}
                            className="absolute top-4 right-4 z-[10000] p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Image Container */}
                        <div className="relative w-full flex items-center justify-center bg-black/20 dark:bg-black/40">
                            <img
                                src={selectedDesign.url}
                                alt={selectedDesign.title}
                                className="w-auto h-auto max-h-[60vh] object-contain shadow-lg"
                            />
                        </div>

                        {/* Meta Info */}
                        <div className="bg-white dark:bg-slate-900 p-6 border-t border-slate-200 dark:border-slate-800">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                {selectedDesign.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 font-mono mt-1">
                                {selectedDesign.category}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default FigmaDesigns;
