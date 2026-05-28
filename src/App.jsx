import { useEffect, lazy, Suspense, useMemo } from 'react';
import './App.css';
import { person, projects } from './services/data';

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Skills = lazy(() => import('./components/Skills'));
const ProjectsPart1 = lazy(() => import('./components/ProjectsPart1'));
const ProjectsPart2 = lazy(() => import('./components/ProjectsPart2'));
const ProjectsPart3 = lazy(() => import('./components/ProjectsPart3'));
const ProjectsPart4 = lazy(() => import('./components/ProjectsPart4'));
const Education = lazy(() => import('./components/Education'));
const Career = lazy(() => import('./components/Career'));
const ValueSection = lazy(() => import('./components/ValueSection'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.__preloaderComplete) {
        window.__preloaderComplete();
      } else {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.classList.add('hide');
          setTimeout(() => preloader.remove(), 650);
        }
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const {
    frontendApps,
    miniProjects,
    fullstackProjects,
  } = useMemo(() => ({
    frontendApps: projects.filter(
      project => project.category === 'Landing Pages & Frontend'
    ),
    miniProjects: projects.filter(
      project => project.category === 'Mini Projects'
    ),
    fullstackProjects: projects.filter(
      project => project.category === 'Full Stack Apps'
    ),
  }), []);

  return (
    <>

      <Suspense fallback={null}>
        <Hero person={person} />
        <About person={person} />
        <Services person={person} />

        <ProjectsPart1 />
        <ProjectsPart2 projects={frontendApps} />
        <ProjectsPart3 projects={miniProjects} />
        <ProjectsPart4 projects={fullstackProjects} />
        <ValueSection />
        <Skills person={person} />
        <Education person={person} />
        <Career person={person} />
        <Contact person={person} />
        <Footer person={person} />
      </Suspense>
    </>
  );
}

export default App;