import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Mis Proyectos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.images[0]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
