import './App.css'
import Hero from './components/Hero'
import { person, projects, testimonials } from './services/data'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Career from './components/Career'
import ProjectsPart1 from './components/ProjectsPart1'
import ProjectsPart2 from './components/ProjectsPart2'
import ProjectsPart3 from './components/ProjectsPart3'
import ProjectsPart4 from './components/ProjectsPart4'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import AnimatedSection from './components/AnimatedSection'

/*
 * Copyright © 2025 Medkhair.
 * This software and its source code are owned by Medkhair.
 * Unauthorized copying, modification, distribution, or use
 * of this code, via any medium, is strictly prohibited.
 */


function App() {

  const frontendApps = projects.filter(project => project.category === "Landing Pages & Frontend");
  const miniProjects = projects.filter(project => project.category === "Mini Projects");
  const fullstackProjects = projects.filter(project => project.category === "Full Stack Apps");

  return (
    <>
      <Hero person={person} />
      <AnimatedSection>
        <About person={person} />
      </AnimatedSection>
        <Services person={person} />
      <AnimatedSection>
        <Skills person={person} />
      </AnimatedSection>

      <ProjectsPart1 />
      <ProjectsPart2 projects={frontendApps} />
      <ProjectsPart3 projects={miniProjects} />
      <ProjectsPart4 projects={fullstackProjects} />
      <AnimatedSection>
        <Education person={person} />
      </AnimatedSection>
      <AnimatedSection>
        <Career person={person} />
      </AnimatedSection>
      <AnimatedSection>
        <Contact person={person} />
      </AnimatedSection>
      <Footer person={person} />
    </>
  )
}

export default App
