import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Nombre del Proyecto 1',
    description: 'Una breve descripción de lo que hace este proyecto, las tecnologías utilizadas, y el rol que desempeñaste.',
  },
  {
    title: 'Nombre del Proyecto 2',
    description: 'Una breve descripción de lo que hace este proyecto, las tecnologías utilizadas, y el rol que desempeñaste.',
  },
  {
    title: 'Nombre del Proyecto 3',
    description: 'Una breve descripción de lo que hace este proyecto, las tecnologías utilizadas, y el rol que desempeñaste.',
  },
];

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
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
