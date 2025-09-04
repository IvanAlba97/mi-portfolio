import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, image, technologies }) => {
  return (
    <Link to={`/project/${id}`}>
      <motion.div
        className="bg-gray-700 rounded-lg overflow-hidden shadow-lg h-full flex flex-col group"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="overflow-hidden">
          <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"/>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 flex-grow mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.slice(0, 4).map((tech, index) => (
              <span key={index} className="bg-gray-600 text-teal-300 text-xs font-semibold px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
