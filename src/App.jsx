/**
 * Main App Component
 * Combines all sections with the grid background
 */

import GridBackground from './components/layout/GridBackground'
import Nav from './components/layout/Nav'
import Hero from './components/sections/Hero'
import CodeShowcase from './components/sections/CodeShowcase'
import Projects from './components/sections/Projects'
import CursorFollower from './components/ui/CursorFollower'

import TechStack from './components/sections/TechStack'
import Experience from './components/sections/Experience'
import Footer from './components/layout/Footer'

function App() {
  return (
    <GridBackground>
      <Nav />
      <Hero />
      <CodeShowcase />
      <TechStack />
      <Projects />
      <Experience />
      <Footer />
      <CursorFollower />
    </GridBackground>
  )
}

export default App
