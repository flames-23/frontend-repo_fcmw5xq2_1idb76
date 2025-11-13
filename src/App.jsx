import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <footer className="bg-black/90 border-t border-white/10 py-10 text-center text-white/50 text-sm">© {new Date().getFullYear()} Your Name — All rights reserved.</footer>
    </div>
  )
}

export default App
