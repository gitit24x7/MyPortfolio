/**
 * Main App Component
 * Combines all sections with the grid background
 */

import GridBackground from './components/layout/GridBackground'
import Nav from './components/layout/Nav'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import CursorFollower from './components/ui/CursorFollower'

import TechStack from './components/sections/TechStack'
import Experience from './components/sections/Experience'
import About from './components/sections/About'
// import CodeShowcase from './components/sections/CodeShowcase' - Removed as per request
import Footer from './components/layout/Footer'

import SectionSeparator from './components/ui/SectionSeparator'

function App() {
  return (
    <GridBackground>
      <Nav />
      <Hero />
      <SectionSeparator />
      <Projects />
      <SectionSeparator />
      <Experience />
      <SectionSeparator />
      <TechStack />
      <SectionSeparator />
      <About />
      <SectionSeparator />
      <Footer />
      <CursorFollower />
    </GridBackground>
  )
}

export default App
