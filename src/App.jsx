import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Capabilities from './sections/Capabilities'
import ProjectLab from './sections/ProjectLab'
import DataSection from './sections/DataSection'
import Journey from './sections/Journey'
import TechStack from './sections/TechStack'
import Resume from './sections/Resume'
import WorkingTogether from './sections/WorkingTogether'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  const [subject, setSubject] = useState('')

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Capabilities />
        <ProjectLab onEnquire={(serviceName) => setSubject(`${serviceName} enquiry`)} />
        <DataSection />
        <Journey />
        <TechStack />
        <Resume />
        <WorkingTogether />
        <Contact subject={subject} onSubjectChange={setSubject} />
        <Footer />
      </main>
    </>
  )
}

export default App