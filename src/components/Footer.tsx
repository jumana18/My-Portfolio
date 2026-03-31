import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => (
  <footer className="py-12 border-t border-zinc-100 dark:border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-[#c5a059] rounded flex items-center justify-center">
          <Terminal size={12} className="text-white dark:text-black" />
        </div>
        <span className="font-display font-bold text-[10px] tracking-[0.3em] uppercase text-zinc-900 dark:text-zinc-100">JUMANA.DEV &copy; 2026</span>
      </div>
      
      <div className="flex gap-8 text-[10px] font-display tracking-widest text-zinc-500">
        <a href="https://github.com/jumana18" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5a059] transition-colors">GITHUB</a>
        <a href="https://linkedin.com/in/jumanakammiyil" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5a059] transition-colors">LINKEDIN</a>
      </div>

      <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600">
        BUILT WITH REACT + TAILWIND + MOTION
      </p>
    </div>
  </footer>
);

export default Footer;
