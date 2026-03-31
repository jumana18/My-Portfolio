import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { 
  
  Menu, 
  X, 
  Sun, 
  Moon 
} from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => (
  <button 
    onClick={toggleTheme}
    className="p-2 rounded-full glass hover:scale-110 transition-all text-zinc-500 hover:text-[#c5a059] active:scale-95"
    aria-label="Toggle Theme"
  >
    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

const Navbar = ({ 
  theme,
  toggleTheme
}: { 
  theme: string,
  toggleTheme: () => void
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy logic
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'home', path: '/', id: 'home' },
    { name: 'about', path: '/about', id: 'about' },
    { name: 'skills', path: '/skills', id: 'skills' },
    { name: 'projects', path: '/projects', id: 'projects' },
    { name: 'contact', path: '/contact', id: 'contact' }
  ];

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const isActive = (id: string) => activeSection === id;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Link to="/" className="flex items-center gap-3">
            <span className="font-display font-bold text-sm tracking-[0.3em] uppercase text-zinc-900 dark:text-zinc-100">JUMANA</span>
            <div className="w-1 h-1 bg-[#c5a059] rounded-full"></div>
            <span className="font-display font-light text-[10px] tracking-[0.4em] uppercase text-zinc-500">PORTFOLIO</span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={(e) => handleNavClick(e, item)}
              className={`nav-link capitalize ${isActive(item.id) ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Link 
            to="/contact" 
            onClick={(e) => handleNavClick(e, navItems[4])}
            className="px-8 py-3 bg-zinc-900 dark:bg-[#c5a059] text-white dark:text-black text-[10px] font-display font-bold tracking-[0.3em] uppercase rounded-lg transition-all hover:opacity-90"
          >
            Hire Me
          </Link>
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
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-left capitalize py-2 font-display text-[11px] tracking-[0.2em] uppercase ${isActive(item.id) ? 'text-[#c5a059] font-bold' : 'text-zinc-400'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
