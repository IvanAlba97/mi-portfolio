import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import getaways from '../assets/getaways.png';
import lectorflow from '../assets/lectorflow.png';
import nebulosafilms from '../assets/nebulosafilms.png';

const projectsData = [
  {
    title: 'GetAways',
    description: 'GetAways es una aplicación web diseñada para la evaluación de rutas de senderismo. Permite a los usuarios descubrir nuevas rutas, compartir sus experiencias y gestionar sus listas personales de senderismo.',
    image: getaways
  },
  {
    title: 'LectorFlow',
    description: 'LectorFlow es una aplicación móvil multiplataforma diseñada para amantes de la lectura. Permite a los usuarios buscar libros, organizar sus lecturas en listas personalizadas y gestionar su biblioteca digital de forma sencilla e intuitiva.',
    image: lectorflow
  },
  {
    title: 'NebulosaFilms',
    description: 'NebulosaFilms es una aplicación web que permite buscar información sobre películas. Los usuarios pueden explorar películas, ver detalles, reparto, tráilers y navegar entre los resultados de búsqueda de forma rápida y responsiva.',
    image: nebulosafilms
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
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
