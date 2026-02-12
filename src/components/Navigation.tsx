import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Work',
    href: '#work'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-primary/80 backdrop-blur-md py-1 border-b border-gray-200 dark:border-graphite' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="group flex items-center gap-0.5 text-4xl font-bold tracking-tight text-text-primary z-50 transition-all duration-300 hover:scale-105">
          <span className="relative">
            <span className="text-[#c41e3a]">K</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#c41e3a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </span>
          <span className="font-light">anchana</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="relative text-sm text-text-secondary hover:text-accent transition-colors duration-200 group/link">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover/link:w-full transition-all duration-300" />
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-text-primary p-2">

            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen &&
          <motion.div
            initial={{
              opacity: 0,
              y: -20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            className="absolute top-0 left-0 w-full h-screen bg-bg-primary flex flex-col items-center justify-center space-y-8 md:hidden">

              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-medium text-text-primary hover:text-accent">

                  {link.name}
                </a>
            )}
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </nav>);

}