import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NoiseOverlay from './components/ui/NoiseOverlay'
import CursorGlow from './components/ui/CursorGlow'

export default function App() {
  return (
    <>
      <NoiseOverlay />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
