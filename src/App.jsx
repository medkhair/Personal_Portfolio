import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import { person, projects } from './services/data'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Career from './components/Career'
import ProjectsPart1 from './components/ProjectsPart1'

/*
 * Copyright © 2025 Medkhair.
 * This software and its source code are owned by Medkhair.
 * Unauthorized copying, modification, distribution, or use
 * of this code, via any medium, is strictly prohibited.
 */


function App() {
  const [count, setCount] = useState(0);

  console.log(projects);

  return (
    <>
      <Hero person={person} />
      <About person={person} />
      <Services person={person} />
      <Skills person={person} />
      <ProjectsPart1 />
      <Education person={person} />
      <Career person={person} />
      <Contact person={person} />
      <Footer />
    </>
  )
}

export default App
