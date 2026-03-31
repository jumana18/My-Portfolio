import React from 'react';
import { motion } from 'motion/react';
import { Code2, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => (
  <section id="projects" className="py-24 flex flex-col items-center text-center">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-4 text-zinc-950 dark:text-zinc-50">
            <span className="text-[#c5a059] font-mono text-xl">03.</span>
            PROJECTS
          </h2>
          <p className="text-zinc-800 dark:text-zinc-400 max-w-md mx-auto">
            A selection of my recent works, showcasing my skills in full-stack development.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-8 glass rounded-3xl border border-zinc-200 dark:border-white/5 hover:border-[#c5a059]/30 transition-all overflow-hidden text-left"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-20 transition-opacity text-zinc-900 dark:text-white">
              <Code2 size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-[#c5a059] px-2 py-1 bg-[#c5a059]/10 rounded">
                  {project.category}
                </span>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#c5a059] transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#c5a059] transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-zinc-950 dark:text-zinc-100 group-hover:text-[#c5a059] transition-colors">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>

              <p className="text-zinc-800 dark:text-zinc-300 text-sm mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-zinc-600 dark:text-zinc-500 border border-zinc-200 dark:border-white/5 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-16"
      >
        <a href="https://github.com/jumana18" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#c5a059] hover:text-[#a38245] transition-colors font-mono text-sm border border-[#c5a059]/30 px-6 py-3 rounded-full hover:bg-[#c5a059]/5">
          VIEW ALL REPOSITORIES <ExternalLink size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Projects;