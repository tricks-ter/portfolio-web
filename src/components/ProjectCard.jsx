import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -8, scale: 1.01 }}
      className={`glass rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-primary/50 ${project.featured ? 'md:col-span-2 bg-gradient-to-br from-surface to-surface/40' : 'bg-surface/50'}`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-all">
            {project.title}
          </h3>
          <div className="flex gap-2">
            <ExternalLink className="text-textMuted group-hover:text-primary transition-colors" size={24} />
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
    </motion.a>
  );
}
