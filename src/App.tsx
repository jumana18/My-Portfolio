import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Database, 
  Layers, 
  Globe, 
  Send,
  ChevronRight,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  category: 'Fullstack' | 'Frontend' | 'Backend';
}

// --- Constants ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ERP Management System",
    description: "A collaborative full-stack ERP system for managing sales, purchases, inventory, and customer accounts. Built with the MERN stack as part of a team project.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/jumana18",
    demo: "https://github.com/jumana18",
    category: "Fullstack"
  },
  {
    id: 2,
    title: "E-Commerce Frontend",
    description: "A modern, responsive e-commerce storefront with product listings, shopping cart functionality, and a seamless user interface. Built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/jumana18",
    demo: "https://github.com/jumana18",
    category: "Frontend"
  }
];

const HIGHLIGHT_SKILLS = [
  { name: "MongoDB", category: "Database", icon: <Database size={20} /> },
  { name: "Express", category: "Backend", icon: <Cpu size={20} /> },
  { name: "React", category: "Frontend", icon: <Globe size={20} /> },
  { name: "Node.js", category: "Runtime", icon: <Terminal size={20} /> },
  { name: "TypeScript", category: "Logic", icon: <Code2 size={20} /> },
  { name: "Tailwind", category: "Design", icon: <Layers size={20} /> },
  { name: "JWT", category: "Security", icon: <Cpu size={20} /> },
  { name: "REST API", category: "Architecture", icon: <Globe size={20} /> },
];

// --- Components ---

const FloatingBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        x: [0, 100, 0],
        y: [0, 50, 0]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full"
    />
    <motion.div 
      animate={{ 
        scale: [1.2, 1, 1.2],
        rotate: [0, -90, 0],
        x: [0, -100, 0],
        y: [0, -50, 0]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full"
    />
  </div>
);

const ThemeToggle = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => (
  <button 
    onClick={toggleTheme}
    className="p-2 rounded-full glass hover:scale-110 transition-all text-zinc-500 hover:text-emerald-500 active:scale-95"
    aria-label="Toggle Theme"
  >
    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

const Navbar = ({ 
  activeSection, 
  setActiveSection,
  theme,
  toggleTheme
}: { 
  activeSection: string, 
  setActiveSection: (s: string) => void,
  theme: string,
  toggleTheme: () => void
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setActiveSection('home')}
        >
          <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
            <Terminal size={18} className="text-black" />
          </div>
          <span className="font-mono font-bold text-lg tracking-tighter uppercase">JUMANA.DEV</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item)}
              className={`nav-link capitalize ${activeSection === item ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a 
            href="#contact" 
            onClick={() => setActiveSection('contact')}
            className="px-5 py-2 bg-emerald-500 text-black text-sm font-bold rounded-full hover:bg-emerald-400 transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button className="text-zinc-400" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left capitalize py-2 ${activeSection === item ? 'text-emerald-500 font-bold' : 'text-zinc-400'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onScrollToProjects }: { onScrollToProjects: () => void }) => (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-20 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-mono mb-8 tracking-widest uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          System Status: Operational
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.85] uppercase"
        >
          {/* JUMANA HASIN <br /> */}
          <span className="text-gradient drop-shadow-2xl">     JUMANA  HASIN</span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-1.5 bg-emerald-500 mb-10 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="max-w-2xl text-zinc-500 dark:text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed font-medium"
        >
          MERN STACK DEVELOPER INTERN <span className="text-emerald-500 mx-2">•</span> CRAFTING MODERN FULL-STACK SOLUTIONS WITH EXPERTISE.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(16 185 129 / 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onScrollToProjects}
            className="px-10 py-5 bg-emerald-500 text-white dark:text-black font-bold rounded-full transition-all flex items-center gap-3 group shadow-xl shadow-emerald-500/20"
          >
            INITIALIZE PROJECTS
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.a 
            whileHover={{ scale: 1.05, borderColor: "rgba(16, 185, 129, 0.5)", color: "#10b981" }}
            whileTap={{ scale: 0.95 }}
            href="/Jumana-Hasin-CV.pdf"
            download ="Jumana-Hasin-CV.pdf"
            className="px-10 py-5 border border-zinc-200 dark:border-white/10 font-bold rounded-full transition-all flex items-center gap-3"
          >
            DOWNLOAD CV.
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex items-center justify-center gap-8 mt-16"
        >
          {[
            { icon: <Github size={22} />, href: "https://github.com/jumana18" },
            { icon: <Linkedin size={22} />, href: "https://linkedin.com/in/jumanakammiyil" },
            { icon: <Mail size={22} />, href: "" }
          ].map((social, i) => (
            <motion.a 
              key={i}
              whileHover={{ y: -5, color: "#10b981" }}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 rounded-full border border-zinc-200 dark:border-white/10 transition-all text-zinc-500 hover:bg-emerald-500/5"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 border-t border-zinc-100 dark:border-white/5 flex flex-col items-center text-center relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-12 flex items-center justify-center gap-4">
          <span className="text-emerald-500 font-mono text-2xl">01.</span>
          ABOUT ME
        </h2>
        
        <div className="space-y-8 text-zinc-500 dark:text-zinc-400 text-xl leading-relaxed mb-24 max-w-3xl mx-auto">
          <p>
            I am a dedicated Full Stack Developer specializing in the MERN stack. 
            Currently, I am working as a <span className="text-zinc-900 dark:text-white font-bold">MERN Intern at Rootsys International</span>, where I am gaining hands-on experience in building scalable web applications.
          </p>
          <p>
            My focus is on creating seamless digital experiences using MongoDB, Express.js, React, and Node.js. 
            I am passionate about clean code, modern architecture, and solving complex problems through technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Experience Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="text-xs font-mono text-emerald-500 uppercase tracking-[0.3em] mb-8 font-bold">Experience</h3>
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 glass rounded-[2.5rem] border-zinc-200 dark:border-white/5 flex-1 flex flex-col justify-center shadow-xl hover:shadow-emerald-500/5 transition-all"
            >
              <h4 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">MERN Intern</h4>
              <p className="text-emerald-500 font-bold text-xl mb-3">Rootsys International</p>
              <p className="text-[10px] font-mono text-zinc-400 mb-8 uppercase tracking-widest bg-zinc-100 dark:bg-white/5 inline-block px-3 py-1 rounded-full self-center">2026 - PRESENT</p>
              <ul className="space-y-4 text-base text-zinc-500 dark:text-zinc-400 text-left mx-auto max-w-xs">
                {[
                  "Building scalable web applications using the MERN stack.",
                  "Developing secure REST APIs and efficient database schemas.",
                  "Creating responsive and interactive user interfaces with React.",
                  "Optimizing application performance and implementing JWT security."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Expertise & Focus Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="text-xs font-mono text-emerald-500 uppercase tracking-[0.3em] mb-8 font-bold">Expertise & Focus</h3>
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 glass rounded-[2.5rem] border-zinc-200 dark:border-white/5 flex-1 flex flex-col justify-center shadow-xl hover:shadow-emerald-500/5 transition-all"
            >
              <div className="space-y-10">
                {[
                  { title: "Full-Stack Development", desc: "Building complete web systems from database to user interface." },
                  { title: "Backend Architecture", desc: "Designing secure APIs and efficient server-side logic." },
                  { title: "Frontend Engineering", desc: "Crafting fast, responsive, and user-friendly web experiences." }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <h4 className="text-emerald-500 font-black text-xs uppercase mb-3 tracking-widest">{item.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-300 text-base font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-32 border-t border-zinc-100 dark:border-white/5 flex flex-col items-center text-center relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-6 flex items-center justify-center gap-4">
          <span className="text-emerald-500 font-mono text-2xl">02.</span>
          TECHNICAL SKILLS
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-20 text-lg">
          The core technologies and architectural patterns I use to engineer high-performance digital solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {HIGHLIGHT_SKILLS.map((skill, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -12, 
                backgroundColor: "rgba(16, 185, 129, 0.05)",
                borderColor: "rgba(16, 185, 129, 0.3)"
              }}
              className="p-10 glass rounded-[2rem] border-zinc-200 dark:border-white/5 transition-all group flex flex-col items-center shadow-lg"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-all shadow-inner"
              >
                {skill.icon}
              </motion.div>
              <span className="font-black text-xl text-zinc-900 dark:text-white mb-2 tracking-tight">{skill.name}</span>
              <p className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-[0.2em] font-bold">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 border-t border-zinc-100 dark:border-white/5 flex flex-col items-center text-center">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-4">
            <span className="text-emerald-500 font-mono text-xl">03.</span>
            PROJECTS
          </h2>
          <p className="text-zinc-500 max-w-md mx-auto">
            A selection of my recent works, showcasing my skills in full-stack development.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-8 glass rounded-3xl border-zinc-200 dark:border-white/5 hover:border-emerald-500/20 transition-all overflow-hidden text-left"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-20 transition-opacity text-zinc-900 dark:text-white">
              <Code2 size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-emerald-500 px-2 py-1 bg-emerald-500/10 rounded">
                  {project.category}
                </span>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-500 transition-colors">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-zinc-500 border border-zinc-200 dark:border-white/5 px-2 py-1 rounded">
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
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <a href="https://github.com/jumana18" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-600 transition-colors font-mono text-sm border border-emerald-500/20 px-6 py-3 rounded-full hover:bg-emerald-500/5">
          VIEW ALL REPOSITORIES <ExternalLink size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/jumanahasinkammiyil@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name}`
        }),
      });

      const result = await response.json();

      if (result.success === "true" || response.ok) {
        setIsSent(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-100 dark:border-white/5 flex flex-col items-center text-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-4">
            <span className="text-emerald-500 font-mono text-xl">04.</span>
            GET IN TOUCH
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <a href="mailto:jumanahasinkammiyil@gmail.com" className="w-16 h-16 rounded-full glass flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-all shadow-lg">
                <Mail size={24} />
              </a>
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">Email</p>
                <p className="text-xl font-medium">jumanahasinkammiyil@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <a href="https://linkedin.com/in/jumanakammiyil" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full glass flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-all shadow-lg">
                <Linkedin size={24} />
              </a>
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">LinkedIn</p>
                <p className="text-xl font-medium">linkedin.com/in/jumanakammiyil</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <a href="https://github.com/jumana18" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full glass flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-all shadow-lg">
                <Github size={24} />
              </a>
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">GitHub</p>
                <p className="text-xl font-medium">github.com/jumana18</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 glass rounded-[2rem] border-zinc-200 dark:border-white/5 text-left shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-emerald-500 text-white dark:text-black font-bold rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-emerald-500/20"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></div>
                ) : isSent ? (
                  "MESSAGE SENT SUCCESSFULLY!"
                ) : (
                  <>
                    SEND MESSAGE <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-zinc-100 dark:border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
          <Terminal size={12} className="text-white dark:text-black" />
        </div>
        <span className="font-mono font-bold text-sm tracking-tighter uppercase">JUMANA.DEV &copy; 2026</span>
      </div>
      
      <div className="flex gap-8 text-xs font-mono text-zinc-500">
        <a href="https://github.com/jumana18" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">GITHUB</a>
        <a href="https://linkedin.com/in/jumanakammiyil" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">LINKEDIN</a>
      </div>

      <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600">
        BUILT WITH REACT + TAILWIND + MOTION
      </p>
    </div>
  </footer>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Using scrollIntoView for smooth navigation
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="selection:bg-emerald-500/30 relative">
      <FloatingBackground />
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={handleNavClick} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main className="relative z-10">
        <Hero onScrollToProjects={() => handleNavClick('projects')} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
