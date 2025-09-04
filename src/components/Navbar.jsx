import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { title: 'Proyectos', hash: '#projects' },
    { title: 'Habilidades', hash: '#skills' },
    { title: 'Educación', hash: '#education' },
    { title: 'Contacto', hash: '#contact' },
  ];

  const handleNavClick = (hash) => {
    if (isOpen) setIsOpen(false);

    if (location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/${hash}`);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-md text-white">
        <div className="container mx-auto flex justify-between items-center px-8 py-4">
          <a 
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="text-2xl font-bold text-white hover:text-blue-400 transition duration-300"
          >
            Iván Alba
          </a>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <a
                  href={link.hash}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.hash);
                  }}
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
                <li key={link.hash}>
                  <a
                    href={link.hash}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.hash);
                    }}
                    className="text-3xl hover:text-blue-400 transition duration-300"
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
