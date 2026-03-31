import React from 'react';
import { motion } from 'motion/react';
import { HIGHLIGHT_SKILLS } from '../constants';

const Skills = () => (
  <section id="skills" className="py-32 flex flex-col items-center text-center relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-serif italic mb-20 flex flex-col items-center gap-4">
          <span className="text-[#c5a059] font-display text-[11px] uppercase tracking-[0.5em] mb-4">02. Capabilities</span>
          Technical Artistry
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {HIGHLIGHT_SKILLS.map((skill, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="p-12 border border-zinc-200 dark:border-white/10 rounded-2xl transition-all duration-500 group flex flex-col items-center hover:border-[#c5a059]/50"
            >
              <div className="w-16 h-16 rounded-xl bg-[#c5a059]/5 flex items-center justify-center text-[#c5a059] mb-8 group-hover:scale-110 transition-transform duration-500">
                {skill.icon}
              </div>
              <span className="font-serif text-2xl text-zinc-900 dark:text-zinc-100 mb-2 tracking-tight">{skill.name}</span>
              <p className="text-[10px] font-display text-[#c5a059] uppercase tracking-[0.3em] font-bold">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
