import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, image }) => {
  return (
    <Link to={`/project/${id}`}>
      <motion.div
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <img src={image} alt={title} className="w-full h-48 object-cover"/>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 flex-grow">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
