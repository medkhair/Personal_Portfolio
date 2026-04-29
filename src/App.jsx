import { useEffect, lazy, Suspense } from 'react'
import './App.css'
import { person, projects, testimonials } from './services/data'

// Keep these eager (above the fold / needed immediately)
import Hero from './components/Hero'
import Navbar from './components/Navbar'

// Lazy load everything else
const About        = lazy(() => import('./components/About'))
const Services     = lazy(() => import('./components/Services'))
const Skills       = lazy(() => import('./components/Skills'))
const ProjectsPart1 = lazy(() => import('./components/ProjectsPart1'))
const ProjectsPart2 = lazy(() => import('./components/ProjectsPart2'))
const ProjectsPart3 = lazy(() => import('./components/ProjectsPart3'))
const ProjectsPart4 = lazy(() => import('./components/ProjectsPart4'))
const Education    = lazy(() => import('./components/Education'))
const Career       = lazy(() => import('./components/Career'))
const Contact      = lazy(() => import('./components/Contact'))
const Footer       = lazy(() => import('./components/Footer'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const AnimatedSection = lazy(() => import('./components/AnimatedSection'))

// Wrap the return in <Suspense fallback={null}>...</Suspense>
function App() {

  useEffect(() => {
    if (window.__preloaderComplete) {
      window.__preloaderComplete();
    } else {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('hide');
        setTimeout(() => preloader.remove(), 650);
      }
    }
  }, []);

  const frontendApps = projects.filter(project => project.category === "Landing Pages & Frontend");
  const miniProjects = projects.filter(project => project.category === "Mini Projects");
  const fullstackProjects = projects.filter(project => project.category === "Full Stack Apps");

  return (
    <Suspense fallback={null}>
      <Navbar />
      <Hero person={person} />
      <About person={person} />
      <Services person={person} />
      <Skills person={person} />
      <ProjectsPart1 />
      <ProjectsPart2 projects={frontendApps} />
      <ProjectsPart3 projects={miniProjects} />
      <ProjectsPart4 projects={fullstackProjects} />
      <Education person={person} />
      <Career person={person} />
      <Contact person={person} />
      <Footer person={person} />
    </Suspense>
  )
}

export default App
