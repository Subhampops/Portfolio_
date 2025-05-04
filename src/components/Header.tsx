import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <header className="sticky top-0 z-50 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-light-border dark:border-dark-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-primary dark:text-primary">
          <Gamepad2 className="w-6 h-6" />
          <span className="hidden sm:block">Subham Bhattacharya</span>
          <span className="block sm:hidden">S.B.</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <NavLink 
                to={link.path}
                className={({ isActive }) => `
                  text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors px-2 py-1
                  ${isActive 
                    ? 'text-primary dark:text-primary border-b-2 border-primary dark:border-primary' 
                    : 'text-light-text dark:text-dark-text'
                  }
                `}
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 text-light-text dark:text-dark-text"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav 
          className="md:hidden bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <NavLink 
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => `
                  text-sm font-medium py-2 px-3 rounded-md
                  ${isActive 
                    ? 'bg-light-accent dark:bg-dark-accent text-primary dark:text-primary' 
                    : 'text-light-text dark:text-dark-text'
                  }
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;