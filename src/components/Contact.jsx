import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Hablemos
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-8 text-lg"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Estoy abierto a nuevas oportunidades y me encantaría saber de ti.
          No dudes en contactarme a través de mi correo o redes sociales.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <a
            href="mailto:ivan02071997@gmail.com"
            className="text-blue-400 hover:underline font-bold text-lg"
          >
            ivan02071997@gmail.com
          </a>
        </motion.div>
        <motion.div
          className="flex justify-center gap-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="https://github.com/IvanAlba97" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/ivanalba97/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaLinkedin size={40} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
