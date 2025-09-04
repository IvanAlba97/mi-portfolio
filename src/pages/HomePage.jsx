import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
};

export default HomePage;
