import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaPhp, FaGitAlt, FaLinux, FaWindows, FaBootstrap
} from 'react-icons/fa';
import { SiExpress, SiMysql, SiTailwindcss, SiCplusplus, SiAdobephotoshop, SiAdobelightroom, SiAdobepremierepro } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={48} /> },
  { name: 'CSS', icon: <FaCss3Alt size={48} /> },
  { name: 'JavaScript', icon: <FaJsSquare size={48} /> },
  { name: 'React', icon: <FaReact size={48} /> },
  { name: 'Node.js', icon: <FaNodeJs size={48} /> },
  { name: 'Express', icon: <SiExpress size={48} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={48} /> },
  { name: 'MySQL', icon: <SiMysql size={48} /> },
  { name: 'Java', icon: <FaJava size={48} /> },
  { name: 'PHP', icon: <FaPhp size={48} /> },
  { name: 'C++', icon: <SiCplusplus size={48} /> },
  { name: 'Git', icon: <FaGitAlt size={48} /> },
  { name: 'Linux', icon: <FaLinux size={48} /> },
  { name: 'Windows', icon: <FaWindows size={48} /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop size={48} /> },
  { name: 'Lightroom', icon: <SiAdobelightroom size={48} /> },
  { name: 'Premiere Pro', icon: <SiAdobepremierepro size={48} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Habilidades y Tecnologías
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="text-blue-400">{skill.icon}</div>
              <p className="font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
