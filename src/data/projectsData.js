import getaways from '../assets/getaways.png';
import lectorflow from '../assets/lectorflow.png';
import nebulosafilms from '../assets/nebulosafilms.png';

export const projectsData = [
  {
    id: 'getaways',
    title: 'GetAways',
    description: 'GetAways es una aplicación web diseñada para la evaluación de rutas de senderismo. Permite a los usuarios descubrir nuevas rutas, compartir sus experiencias y gestionar sus listas personales de senderismo.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    images: [getaways],
    type: 'web',
    sourceCode: 'https://github.com/IvanAlba97/TFG-GetAways',
    liveDemo: 'https://get-aways.vercel.app/'
  },
  {
    id: 'lectorflow',
    title: 'LectorFlow',
    description: 'LectorFlow es una aplicación móvil multiplataforma diseñada para amantes de la lectura. Permite a los usuarios buscar libros, organizar sus lecturas en listas personalizadas y gestionar su biblioteca digital de forma sencilla e intuitiva.',
    technologies: ['React Native', 'Firebase', 'Google Books API'],
    images: [lectorflow],
    type: 'mobile',
    sourceCode: 'https://github.com/IvanAlba97/LectorFlow',
    downloadLink: '/downloads/LectorFlow.apk'
  },
  {
    id: 'nebulosafilms',
    title: 'NebulosaFilms',
    description: 'NebulosaFilms es una aplicación web que permite buscar información sobre películas. Los usuarios pueden explorar películas, ver detalles, reparto, tráilers y navegar entre los resultados de búsqueda de forma rápida y responsiva.',
    technologies: ['React', 'TMDb API', 'Tailwind CSS'],
    images: [nebulosafilms],
    type: 'web',
    sourceCode: 'https://github.com/IvanAlba97/NebulosaFilms',
    liveDemo: 'https://nebulosa-films.vercel.app/'
  },
];
