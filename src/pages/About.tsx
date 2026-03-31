import React from 'react';
import { motion } from 'motion/react';

const About = () => (
  <section id="about" className="py-32 flex flex-col items-center text-center relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
  <h2 className="text-6xl font-serif italic mb-20 flex flex-col items-center gap-4">
  <span className="text-[#c5a059] font-display text-[11px] uppercase tracking-[0.5em] mb-4">
    01. Perspective
  </span>
  The Narrative
</h2>

<div className="max-w-3xl mx-auto mb-32 text-center space-y-10">
  <p className="text-4xl md:text-5xl font-serif leading-tight text-zinc-900 dark:text-zinc-100">
    I am a{" "}
    <span className="italic text-gradient">
      Full Stack Developer
    </span>{" "}
    specializing in the{" "}
    <span className="font-medium">MERN stack</span>, building modern and
    high-performance web applications.
  </p>

  <p className="text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed font-light">
    Currently working as a MERN Stack Intern at{" "}
    <span className="font-medium text-zinc-800 dark:text-zinc-200">
      Rootsys International
    </span>
    , I develop scalable backend systems and create seamless, user-friendly interfaces. I combine clean code practices with thoughtful design to deliver efficient and impactful digital experiences.
  </p>
</div>
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          {/* Experience Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col text-left"
          >
            <h3 className="text-[10px] font-display text-[#c5a059] uppercase tracking-[0.4em] mb-10 font-bold">Professional Experience</h3>
            <div className="relative pl-10 border-l border-zinc-200 dark:border-white/10 space-y-12">
              <div className="relative">
                <div className="absolute -left-[45px] top-0 w-2 h-2 bg-[#c5a059] rounded-full"></div>
                <h4 className="text-2xl font-serif mb-1 text-zinc-900 dark:text-zinc-100">MERN Intern</h4>
                <p className="text-[#c5a059] font-display text-[10px] tracking-widest uppercase mb-4">Rootsys International • 2026 - Present</p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-light">
                  Developing scalable web applications, building secure API systems, and creating responsive, high-quality user interfaces.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Philosophy Section */}
        <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="flex flex-col text-left"
>
  <h3 className="text-[10px] font-display text-[#c5a059] uppercase tracking-[0.4em] mb-10 font-bold">
    Core Philosophy
  </h3>

  <div className="space-y-10">
    {[
      { 
        title: "Technical Integrity", 
        desc: "Writing clean, maintainable, and efficient code." 
      },
      { 
        title: "Aesthetic Precision", 
        desc: "Designing intuitive and visually refined user experiences." 
      },
      { 
        title: "Continuous Growth", 
        desc: "Continuously learning and adapting to new technologies and best practices." 
      }
    ].map((item, i) => (
      <div key={i}>
        <h4 className="text-lg font-serif mb-2 text-zinc-900 dark:text-zinc-100">
          {item.title}
        </h4>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
