/**
 * Footer Component
 * Grid-aligned footer with social links separated by visible intersecting lines.
 */

import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" }
]

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 relative z-10 transition-colors duration-500">
            <div className="max-w-[80rem] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/50 dark:divide-white/10 border-b border-slate-200/50 dark:border-white/10">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative h-24 flex items-center justify-center overflow-hidden hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                        >
                            {/* Corner crosshairs for technical feel */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-300 dark:border-white/20" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-300 dark:border-white/20" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-300 dark:border-white/20" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-300 dark:border-white/20" />

                            <div className="flex flex-col items-center gap-2">
                                <social.icon className="w-6 h-6 text-slate-400 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-50 transition-colors" />
                                <span className="text-xs font-mono text-slate-500 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                                    {social.label}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="py-8 px-6 text-center">
                    <p className="text-sm text-slate-500 dark:text-slate-500 font-mono">
                        © {new Date().getFullYear()} Aditya Ojha. Built with React & Tailwind.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
