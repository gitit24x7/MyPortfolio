import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const SectionSeparator = () => {
    return (
        <div className="w-full border-b border-slate-300 dark:border-white/10">
            <div className="max-w-5xl mx-auto w-full h-8 border-x border-slate-300 dark:border-white/10 relative overflow-hidden bg-slate-50/30 dark:bg-white/5">
                {/* Clean, structural separator line/gap */}
            </div>
        </div>
    );
};

export default SectionSeparator;
