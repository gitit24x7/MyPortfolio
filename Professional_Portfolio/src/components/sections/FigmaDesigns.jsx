import React from 'react';

const figmaDesigns = [
    {
        id: 'figma_one',
        title: 'E-Commerce Dashboard',
        category: 'Web Design',
        url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 'figma_two',
        title: 'Finance Mobile App',
        category: 'Mobile UI',
        url: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 'figma_three',
        title: 'SaaS Landing Page',
        category: 'Web Design',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 'figma_four',
        title: 'Task Management System',
        category: 'Productivity',
        url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop',
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
    return (
        <section id="designs" className="relative z-10 transition-colors duration-500">
            {/* Header / Title Row */}
            <div className="w-full border-b border-slate-300 dark:border-white/10">
                <div className="max-w-5xl mx-auto border-x border-slate-300 dark:border-white/10">
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
            <div className="w-full border-b border-slate-300 dark:border-white/10">
                <div className="max-w-5xl mx-auto border-x border-slate-300 dark:border-white/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                        {figmaDesigns.map((design, index) => (
                            <div
                                key={design.id}
                                className="group relative aspect-[4/3] bg-slate-100 dark:bg-slate-900 overflow-hidden border-b border-r border-slate-300 dark:border-white/10 last:border-b-0 md:last:border-b [&:nth-child(4n)]:border-r-0"
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
        </section>
    );
};

export default FigmaDesigns;
