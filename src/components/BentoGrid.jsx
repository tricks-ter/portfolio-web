import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function BentoGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Selected Work</h2>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item} className={project.featured ? 'md:col-span-2' : ''}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
