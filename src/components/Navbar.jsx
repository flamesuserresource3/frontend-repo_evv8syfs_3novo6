import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-semibold tracking-tight text-white"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Flames</span>
            <span className="ml-1">Portfolio</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: '#home', label: 'Home' },
              { href: '#projects', label: 'Projects' },
              { href: '#contact', label: 'Contact' },
            ].map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.2, duration: 0.4 }}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 bg-white/10 hover:bg-white/20 text-white transition"
              aria-label="GitHub"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 bg-white/10 hover:bg-white/20 text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20"
            >
              <Mail size={16} /> Contact
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
}
