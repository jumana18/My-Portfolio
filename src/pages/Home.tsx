import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Hero = () => (
  <section
    id="home"
    className="min-h-screen flex flex-col justify-center items-center text-center pt-20 relative overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-4 px-6 py-2 border-b-2 border-[#c5a059]/30 text-[#a38245] text-[10px] font-display mb-12 tracking-[0.4em] uppercase"
        >
          Available for Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-[10rem] font-serif italic font-light tracking-tight mb-12 leading-[0.9] text-zinc-900 dark:text-zinc-50"
        >
          Jumana Hasin <br />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="max-w-2xl text-zinc-600 dark:text-zinc-400 text-lg md:text-xl mb-16 leading-relaxed font-light italic font-serif"
        >
          <span className="block text-gradient font-normal not-italic">
            MERN Stack & Full Stack Developer
          </span>
          <span className="block mt-2">
            Crafting scalable, high-performance web applications with modern
            design and seamless user experience.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-10"
        >
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-12 py-5 bg-zinc-900 dark:bg-[#c5a059] text-white dark:text-black text-[11px] font-display font-bold tracking-[0.3em] uppercase transition-all flex items-center gap-4 group"
          >
            VIEW PROJECTS
            <div className="w-1.5 h-1.5 bg-white dark:bg-black rounded-full group-hover:scale-150 transition-transform"></div>
          </motion.button>

     <motion.a
  whileHover={{ y: -5 }}
  whileTap={{ scale: 0.98 }}
  href="/Jumana-Hasin-CV.pdf"
  download="Jumana_Hasin_CV.pdf"
  className="px-12 py-5 border border-zinc-200 dark:border-white/10 text-[11px] font-display font-bold tracking-[0.3em] uppercase transition-all flex items-center gap-4"
>
  DOWNLOAD CV
</motion.a>
        </motion.div>

       
      </motion.div>
    </div>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </>
);

export default Home;
