import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -5 }}
      className={`glass rounded-2xl p-6 flex flex-col justify-between group hover:border-primary/50 transition-all cursor-pointer ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <ExternalLink className="text-textMuted group-hover:text-primary transition-colors" size={24} />
        </div>
        <p className="text-textMuted mb-6">{project.description}</p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t, idx) => (
          <span key={idx} className="bg-white/5 px-3 py-1 rounded-full text-sm text-gray-300">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
