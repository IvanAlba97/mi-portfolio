import { motion } from 'framer-motion';

const ProjectCard = ({ title, description }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Placeholder for the image */}
      <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
        <span className="text-gray-500">[Imagen del Proyecto]</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
