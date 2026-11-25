import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Capabilities from './sections/Capabilities'
import ProjectLab from './sections/ProjectLab'
import DataSection from './sections/DataSection'
import Journey from './sections/Journey'
import TechStack from './sections/TechStack'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Capabilities />
        <ProjectLab />
        <DataSection />
        <Journey />
        <TechStack />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App