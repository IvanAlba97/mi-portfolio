import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'ESCUELA SUPERIOR DE INGENIERÍA, UNIVERSIDAD DE CÁDIZ',
    degree: 'Grado en Ingeniería Informática',
    details: [
      'CCNA R&S: Introduction to Networks',
      'CCNP Enterprise: Advanced Routing',
    ],
  },
  {
    institution: 'IES CIUDAD DE HÉRCULES, CHICLANA DE LA FRONTERA',
    degree: 'Bachillerato de ciencias y tecnologías',
    details: [],
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Educación
        </motion.h2>
        <div className="relative max-w-2xl mx-auto">
          {/* The vertical line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-blue-500"></div>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-12 pl-12 relative"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* The dot on the timeline */}
              <div className="absolute left-5 top-1 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2"></div>
              <h3 className="text-2xl font-bold text-blue-400">{edu.institution}</h3>
              <p className="text-lg font-semibold mt-1">{edu.degree}</p>
              {edu.details.length > 0 && (
                <ul className="list-disc list-inside mt-2 text-gray-400">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
