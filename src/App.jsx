import { useEffect, lazy, Suspense } from 'react'
import './App.css'
import { person, projects, testimonials } from './services/data'

import Hero from './components/Hero'
import Navbar from './components/Navbar'

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

function App() {

  useEffect(() => {
    const MIN_MS = 3500; // minimum 3.5 seconds
    const elapsed = Date.now() - (window.__preloaderStart || Date.now());
    const remaining = Math.max(0, MIN_MS - elapsed);

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
    }, remaining);

    return () => clearTimeout(timer);
  }, []);

  const frontendApps = projects.filter(p => p.category === "Landing Pages & Frontend");
  const miniProjects = projects.filter(p => p.category === "Mini Projects");
  const fullstackProjects = projects.filter(p => p.category === "Full Stack Apps");

  return (
    <>
      <Hero person={person} />
      <Suspense fallback={null}><About person={person} /></Suspense>
      <Suspense fallback={null}><Services person={person} /></Suspense>
      <Suspense fallback={null}><Skills person={person} /></Suspense>
      <Suspense fallback={null}><ProjectsPart1 /></Suspense>
      <Suspense fallback={null}><ProjectsPart2 projects={frontendApps} /></Suspense>
      <Suspense fallback={null}><ProjectsPart3 projects={miniProjects} /></Suspense>
      <Suspense fallback={null}><ProjectsPart4 projects={fullstackProjects} /></Suspense>
      <Suspense fallback={null}><Education person={person} /></Suspense>
      <Suspense fallback={null}><Career person={person} /></Suspense>
      <Suspense fallback={null}><Contact person={person} /></Suspense>
      <Suspense fallback={null}><Footer person={person} /></Suspense>
    </>
  )
}

export default App
