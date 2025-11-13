import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-black/30 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="text-white font-semibold tracking-tight text-lg">Dev Portfolio</a>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="ml-2 p-2 rounded hover:bg-white/10 text-white/80 hover:text-white"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-white/10 text-white/80 hover:text-white"><Linkedin size={18} /></a>
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 bg-white text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-white/90 transition-colors"><Mail size={16} /> Hire me</a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/50 backdrop-blur-md">
          <div className="px-4 py-3 flex flex-col">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
