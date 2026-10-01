import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Hi, I'm <span className="text-primary">Tricks-ter</span>
        </h1>
        <p className="text-xl md:text-2xl text-textMuted max-w-2xl mx-auto mb-8">
          Full-Stack Developer specializing in AI integrations and modern web systems.
        </p>
        <div className="flex gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/tricks-ter"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-surface border border-white/10 px-6 py-3 rounded-full hover:bg-white/5 transition-colors"
          >
            <GithubIcon />
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:contact@inkmind.tech"
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            <Mail size={20} />
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
