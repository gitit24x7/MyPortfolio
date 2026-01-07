/**
 * Footer Component
 * Grid-aligned footer with social links separated by visible intersecting lines.
 */

import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
    { icon: Github, href: "https://github.com/gitit24x7", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/buggy247_?s=21", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/ojhaadityaa", label: "LinkedIn" },
    { icon: Mail, href: "mailto:thisisadityaojha@gmail.com", label: "Email" }
]

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-black relative z-10 transition-colors duration-500">
            <div className="max-w-5xl mx-auto border-x border-grid">

                {/* Footer Content Container */}
                <div className="bg-white dark:bg-black">
                    <div className="grid grid-cols-4 divide-x divide-slate-300 dark:divide-white/10 border-b border-grid">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative h-16 sm:h-24 flex items-center justify-center overflow-hidden hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                            >
                                {/* Corner crosshairs for technical feel */}
                                <div className="absolute top-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-l border-slate-300 dark:border-white/20" />
                                <div className="absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-r border-slate-300 dark:border-white/20" />
                                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b border-l border-slate-300 dark:border-white/20" />
                                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b border-r border-slate-300 dark:border-white/20" />

                                <div className="flex flex-col items-center gap-1 sm:gap-2">
                                    <social.icon className="w-4 h-4 sm:w-6 sm:h-6 text-slate-400 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-50 transition-colors" />
                                    <span className="text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 hidden sm:block">
                                        {social.label}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="py-4 sm:py-8 px-4 sm:px-6 text-center">
                    <p className="text-[10px] sm:text-sm text-slate-500 dark:text-slate-500 font-mono">
                        © {new Date().getFullYear()} Aditya Ojha. Built with React & Tailwind.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
