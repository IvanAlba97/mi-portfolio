import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '../assets/fotoPrincipal.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-900 text-white px-8">
      <motion.div
        className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Text Content */}
        <motion.div className="text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500"
            variants={itemVariants}
          >
            Iván Alba
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            Desarrollador Web | Creando experiencias digitales modernas y fluidas.
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Mis Proyectos
            </a>
            <a
              href="#contact"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Contacto
            </a>
          </motion.div>
          <motion.div
            className="flex gap-6 justify-center md:justify-start mt-8"
            variants={itemVariants}
          >
            <a href="https://github.com/IvanAlba97" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/ivanalba97/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaLinkedin size={30} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div variants={itemVariants}>
          <img
            src={profilePic}
            alt="Foto de Iván"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-lg shadow-blue-500/20"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
