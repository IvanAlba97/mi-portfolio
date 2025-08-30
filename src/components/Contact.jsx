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
        >
          <a
            href="mailto:tu-email@example.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg mb-12"
          >
            Envíame un correo
          </a>
        </motion.div>
        <motion.div
          className="flex justify-center gap-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaGithub size={40} />
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaLinkedin size={40} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
