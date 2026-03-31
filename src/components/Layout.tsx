import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingBackground from './FloatingBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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

  return (
    <div className="selection:bg-[#c5a059]/30 relative min-h-screen transition-colors duration-500" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <FloatingBackground />
      <Navbar 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main className="relative z-10 pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
