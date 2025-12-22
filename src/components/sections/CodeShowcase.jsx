/**
 * CodeShowcase Section
 * Asymmetric split layout showing "Architecture as Code".
 */

import CodeBlock from '../ui/CodeBlock'

const CodeShowcase = () => {
    return (
        <section className="py-24 relative z-10 transition-colors duration-500">
            <div className="max-w-[80rem] mx-auto px-6 border-b border-slate-200/50 dark:border-white/10 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Narrative */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-8 tracking-tight transition-colors">
                        Architecture First.
                    </h2>
                    <div className="prose prose-lg prose-slate dark:prose-invert transition-colors">
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            I don't just write code that works; I write code that lasts.
                            My approach focuses on <strong className="text-slate-900 dark:text-slate-200">scalability</strong>,
                            <strong className="text-slate-900 dark:text-slate-200"> maintainability</strong>, and
                            <strong className="text-slate-900 dark:text-slate-200"> developer experience</strong>.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mt-6">
                            Every component is built with atomic design principles,
                            ensuring type safety and consistent theming across the application.
                        </p>
                    </div>

                    <div className="mt-12 flex gap-8">
                        <div>
                            <div className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-2 transition-colors">98+</div>
                            <div className="text-sm font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">Lighthouse Score</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-2 transition-colors">0ms</div>
                            <div className="text-sm font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">Runtime Errors</div>
                        </div>
                    </div>
                </div>

                {/* Right: Code Visual */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative bg-slate-50 dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-white/10 rounded-2xl p-6 shadow-2xl transition-colors duration-500">
                        <div className="flex items-center gap-2 mb-4 border-b border-slate-200 dark:border-white/5 pb-4 transition-colors">
                            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                            <div className="ml-auto font-mono text-xs text-slate-400">useData.ts</div>
                        </div>
                        <CodeBlock />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CodeShowcase
