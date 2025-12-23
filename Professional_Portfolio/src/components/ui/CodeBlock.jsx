/**
 * CodeBlock Component
 * A syntax-highlighted code snippet for demonstration.
 */

const CodeBlock = () => {
    return (
        <div className="font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="text-pink-500 dark:text-pink-400">interface <span className="text-amber-600 dark:text-amber-300">User</span> {'{'}</div>
            <div className="pl-4 text-slate-700 dark:text-slate-300">id: <span className="text-blue-600 dark:text-blue-400">string</span>;</div>
            <div className="pl-4 text-slate-700 dark:text-slate-300">name: <span className="text-blue-600 dark:text-blue-400">string</span>;</div>
            <div className="pl-4 text-slate-700 dark:text-slate-300">role: <span className="text-green-600 dark:text-green-400">'admin'</span> | <span className="text-green-600 dark:text-green-400">'user'</span>;</div>
            <div className="text-pink-500 dark:text-pink-400">{'}'}</div>
            <br />
            <div className="text-purple-600 dark:text-purple-400">const</div>
            <span className="text-blue-600 dark:text-blue-400"> useAuth</span> =
            <span className="text-slate-700 dark:text-slate-300"> ()</span>
            <span className="text-purple-600 dark:text-purple-400"> ={'>'}</span> {'{'}
            <div className="pl-4 text-slate-500 dark:text-slate-400">// Memoized selector for performance</div>
            <div className="pl-4">
                <span className="text-purple-600 dark:text-purple-400">return</span>
                <span className="text-blue-600 dark:text-blue-400"> useStore</span>(
                <span className="text-amber-600 dark:text-amber-300">selectUser</span>
                );
            </div>
            <div className="text-slate-700 dark:text-slate-300">{'}'}</div>
        </div>
    )
}

export default CodeBlock
