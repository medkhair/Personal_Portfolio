import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import { person } from './services/data'
import About from './components/About'

/*
 * Copyright © 2025 Medkhair.
 * This software and its source code are owned by Medkhair.
 * Unauthorized copying, modification, distribution, or use
 * of this code, via any medium, is strictly prohibited.
 */


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero person={person} />
      <About person={person} />
    </>
  )
}

export default App
