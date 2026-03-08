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

const SKILLS = {
  frontend: ["React.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS", "Bootstrap", "Ant Design"],
  backend: ["Node.js", "Express.js", "REST API Development", "Authentication & Authorization (JWT)", "CRUD Operations"],
  database: ["MongoDB", "MySQL", "Mongoose"],
  tools: ["Git", "GitHub", "Postman", "VS Code", "Debugging & Testing"]
};

const EXPERIENCE = [
  {
    role: "MERN Stack Developer Intern",
    company: "RotsysInternational",
    period: "2026 - Present",
    description: [
      "Developing full-stack web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js).",
      "Building and integrating RESTful APIs for frontend and backend communication.",
      "Implementing CRUD operations and optimizing database queries using MongoDB (Mongoose).",
      "Developing responsive user interfaces using React.js, Tailwind CSS, and JavaScript.",
      "Integrating authentication and authorization features for secure user access."
    ]
  },
  {
    role: "Full Stack Web Development Course",
    company: "Completed Professional Training",
    period: "2025 - 2026",
    description: [
      "Intensive training in modern web technologies with a focus on the MERN stack.",
      "Completed multiple hands-on projects covering frontend, backend, and database management.",
      "Mastered React.js hooks, state management, and component-based architecture.",
      "Gained deep understanding of Node.js, Express middleware, and MongoDB schema design."
    ]
  }
];

// --- Components ---

const ThemeToggle = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => (
  <button 
    onClick={toggleTheme}
    className="p-2 rounded-full glass hover:scale-110 transition-all text-zinc-500 hover:text-emerald-500"
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

  const navItems = ['home', 'about', 'experience', 'projects', 'contact'];

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

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          OPEN FOR OPPORTUNITIES
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
          JUMANA HASIN <br />
          <span className="text-gradient">KAMMIYIL</span> <br />
          FULL STACK DEVELOPER INTERN
        </h1>
        
        <p className="max-w-xl text-zinc-500 dark:text-zinc-400 text-lg mb-10 leading-relaxed">
          Crafting end-to-end digital solutions with the MERN stack, from high-performance backends to intuitive user interfaces.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-emerald-500 text-white dark:text-black font-bold rounded-full hover:bg-emerald-400 transition-all flex items-center gap-2 group">
            View Projects
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center gap-4 px-4">
            <a href="https://github.com/jumana18" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 hover:text-emerald-500 transition-all text-zinc-500">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/jumanakammiyil" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 hover:text-emerald-500 transition-all text-zinc-500">
              <Linkedin size={20} />
            </a>
            <a href="mailto:jumanahasinkammiyil@gmail.com" className="p-3 rounded-full border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 hover:text-emerald-500 transition-all text-zinc-500">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Background Decoration */}
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-emerald-500/5 blur-[120px] -z-10 rounded-full"></div>
    <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-cyan-500/5 blur-[100px] -z-10 rounded-full"></div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 border-t border-zinc-100 dark:border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
            <span className="text-emerald-500 font-mono text-xl">01.</span>
            ABOUT ME
          </h2>
          <div className="space-y-6 text-zinc-500 dark:text-zinc-400 leading-relaxed">
            <p>
              I am a dedicated Full Stack Developer and recent graduate specializing in the MERN stack. 
              Having recently completed an intensive course in web development, I am now applying my skills as an intern at RotsysInternational.
            </p>
            <p>
              My journey started with a passion for building things for the web. I've spent the last year mastering MongoDB, Express.js, React.js, and Node.js 
              to create robust, user-centric applications.
            </p>
            <p>
              I am focused on writing clean, maintainable code and am always eager to tackle new challenges in the ever-evolving world of technology.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="space-y-4">
            <SkillCard icon={<Globe size={20} />} title="Frontend" skills={SKILLS.frontend} />
            <SkillCard icon={<Database size={20} />} title="Database" skills={SKILLS.database} />
          </div>
          <div className="space-y-4 pt-8">
            <SkillCard icon={<Cpu size={20} />} title="Backend" skills={SKILLS.backend} />
            <SkillCard icon={<Layers size={20} />} title="Tools" skills={SKILLS.tools} />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-24 border-t border-zinc-100 dark:border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
          <span className="text-emerald-500 font-mono text-xl">02.</span>
          EXPERIENCE
        </h2>
      </motion.div>

      <div className="space-y-8">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 glass rounded-3xl border-zinc-200 dark:border-white/5"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-emerald-500">{exp.role}</h3>
                <p className="text-lg font-medium text-zinc-900 dark:text-white">{exp.company}</p>
              </div>
              <p className="text-sm font-mono text-zinc-500 mt-2 md:mt-0">{exp.period}</p>
            </div>
            <ul className="space-y-3">
              {exp.description.map((item, i) => (
                <li key={i} className="text-zinc-500 dark:text-zinc-400 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SkillCard = ({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) => (
  <div className="p-6 glass rounded-2xl border-zinc-200 dark:border-white/5 hover:border-emerald-500/30 transition-all group">
    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-bold mb-4 text-sm uppercase tracking-widest text-zinc-600 dark:text-zinc-300">{title}</h3>
    <ul className="space-y-2">
      {skills.map(skill => (
        <li key={skill} className="text-xs font-mono text-zinc-500 flex items-center gap-2">
          <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Projects = () => (
  <section id="projects" className="py-24 border-t border-zinc-100 dark:border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
            <span className="text-emerald-500 font-mono text-xl">03.</span>
            PROJECTS
          </h2>
          <p className="text-zinc-500 max-w-md">
            A selection of my recent works, showcasing my skills in full-stack development.
          </p>
        </motion.div>
        <a href="https://github.com/jumana18" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-emerald-500 hover:text-emerald-600 transition-colors font-mono text-sm">
          VIEW ALL <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid md:grid-cols-1 gap-6">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-8 glass rounded-3xl border-zinc-200 dark:border-white/5 hover:border-emerald-500/20 transition-all overflow-hidden"
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
    <section id="contact" className="py-24 border-t border-zinc-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <span className="text-emerald-500 font-mono text-xl">04.</span>
              GET IN TOUCH
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-12 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <a href="mailto:jumanahasinkammiyil@gmail.com" className="w-12 h-12 rounded-full glass flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-all">
                  <Mail size={20} />
                </a>
                <div>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Email</p>
                  <p className="text-lg font-medium">jumanahasinkammiyil@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <a href="https://linkedin.com/in/jumanakammiyil" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-all">
                  <Linkedin size={20} />
                </a>
                <div>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">LinkedIn</p>
                  <p className="text-lg font-medium">linkedin.com/in/jumanakammiyil</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <a href="https://github.com/jumana18" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-all">
                  <Github size={20} />
                </a>
                <div>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">GitHub</p>
                  <p className="text-lg font-medium">github.com/jumana18</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 glass rounded-3xl border-zinc-200 dark:border-white/5"
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
                  className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
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
                  className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
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
                  className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-emerald-500 text-white dark:text-black font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></div>
                ) : isSent ? (
                  "MESSAGE SENT!"
                ) : (
                  <>
                    SEND MESSAGE <Send size={18} />
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
    <div className="selection:bg-emerald-500/30">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={handleNavClick} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
