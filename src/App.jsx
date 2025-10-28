import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <div style={{ width: '100%' }}>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
