import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === projectId);
    setProject(foundProject);
  }, [projectId]);

  if (!project) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <p>Cargando proyecto...</p>
      </div>
    );
  }

  const { title, description, technologies, images, type, sourceCode, liveDemo, downloadLink } = project;

  return (
    <section className="bg-gray-900 text-white min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-teal-300 text-sm font-semibold px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </motion.div>

        <div className="flex justify-center gap-6 mb-12">
          {sourceCode && (
            <motion.a href={sourceCode} target="_blank" rel="noopener noreferrer" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}>
              Código Fuente
            </motion.a>
          )}
          {liveDemo && (
            <motion.a href={liveDemo} target="_blank" rel="noopener noreferrer" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}>
              Ver Demo
            </motion.a>
          )}
          {downloadLink && (
            <motion.a href={downloadLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}>
              Descargar APK
            </motion.a>
          )}
        </div>

        <div className="max-w-5xl mx-auto">
          {images.map((image, index) => (
            <motion.img 
              key={index} 
              src={image} 
              alt={`${title} screenshot ${index + 1}`} 
              className={`rounded-lg shadow-lg mb-8 ${type === 'mobile' ? 'max-w-sm mx-auto' : 'w-full'}`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectDetail;
