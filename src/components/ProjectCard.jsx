import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      className={`glass rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-primary/50 ${project.featured ? 'md:col-span-2 bg-gradient-to-br from-surface to-surface/40' : 'bg-surface/50'}`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-all">
            {project.title}
          </h3>
          <div className="flex gap-3 z-20">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-textMuted hover:text-white transition-colors" title="View Source">
                <GithubIcon size={22} />
              </a>
            )}
            {project.url && project.url !== project.github && (
              <a href={project.url} target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors" title="Live Demo">
                <ExternalLink size={24} />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-400 mb-8 leading-relaxed">
          {project.description}
        </p>
      </div>
      
      <div className="relative z-10 flex flex-wrap gap-2">
        {project.tech.map((t, idx) => (
          <span 
            key={idx} 
            className="bg-black/40 border border-white/5 px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 group-hover:border-white/10 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
