import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Proyectos', href: '#projects' },
    { title: 'Habilidades', href: '#skills' },
    { title: 'Educación', href: '#education' },
    { title: 'Contacto', href: '#contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-md text-white">
        <div className="container mx-auto flex justify-between items-center px-8 py-4">
          <a href="#hero" className="text-2xl font-bold text-white hover:text-blue-400 transition duration-300">
            Iván Alba
          </a>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lg hover:text-blue-400 transition duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl z-50 relative">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center z-40"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-3xl hover:text-blue-400 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
