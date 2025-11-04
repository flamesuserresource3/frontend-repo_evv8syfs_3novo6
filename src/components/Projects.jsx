import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: '3D Product Showcase',
    description: 'Interactive product viewer with Spline + React and parallax scroll.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
    color: 'from-fuchsia-500/20 to-cyan-500/20',
  },
  {
    title: 'Portfolio Microsite',
    description: 'A fast, animated microsite with playful interactions and gradients.',
    tags: ['Vite', 'Tailwind', 'Motion'],
    link: '#',
    color: 'from-cyan-500/20 to-sky-500/20',
  },
  {
    title: 'Creative Dev Tools',
    description: 'Utility components for motion-driven UI prototypes and live demos.',
    tags: ['Components', 'UX', 'Animation'],
    link: '#',
    color: 'from-purple-500/20 to-pink-500/20',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Projects</h2>
          <p className="mt-2 text-white/70">A mix of experiments and real-world builds exploring motion and 3D.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.color} p-5`}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-60" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-white transition" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-white/10 px-2 py-1 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
