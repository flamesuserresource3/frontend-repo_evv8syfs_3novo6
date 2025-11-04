import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s build something</h2>
          <p className="mt-2 text-white/70">Have a project or idea in mind? Drop a message and I’ll get back soon.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm text-white/80">Name</label>
              <input
                className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/80">Email</label>
              <input
                type="email"
                className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/80">Message</label>
            <textarea
              rows={5}
              className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/60">I’ll respond within 1-2 business days.</p>
            <motion.button
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-2.5 font-medium text-white"
            >
              Send Message <Send size={16} />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
