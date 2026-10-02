import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Terminal, Database, Code2 } from 'lucide-react';
import Logo from './Logo';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 10 } 
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* Background Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] md:left-1/4 text-primary/20"
      >
        <Code2 size={64} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[10%] md:right-1/4 text-primary/20"
      >
        <Database size={64} />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <Logo className="w-24 h-24 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]" />
        </motion.div>
        
        <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
          <Terminal size={16} className="text-primary" />
          <span>Software Engineer & AI Architect</span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Tricks-ter</span>
        </motion.h1>
        
        <motion.div variants={itemVariants} className="bg-surface/50 glass border border-white/10 p-6 rounded-2xl mb-10 max-w-3xl mx-auto text-left shadow-2xl">
          <h2 className="text-2xl font-semibold mb-3 text-white">About Me</h2>
          <p className="text-lg text-textMuted leading-relaxed">
            I build scalable, production-grade systems that bridge the gap between complex backends and seamless user experiences. 
            From engineering <strong className="text-gray-200">AI-driven narrative engines</strong> (InkMind) and robust <strong className="text-gray-200">Enterprise ERPs</strong>, to deep infrastructure integrations like <strong className="text-gray-200">MikroTik RouterOS</strong> for ISP billing—I specialize in the MERN stack, Python/FastAPI, and large language model architectures.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/tricks-ter"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-surface border border-white/10 px-8 py-4 rounded-full hover:bg-white/10 transition-all font-medium"
          >
            <GithubIcon />
            View GitHub Profile
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="mailto:contact@inkmind.tech"
            className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-all font-medium"
          >
            <Mail size={20} />
            Let's Collaborate
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
