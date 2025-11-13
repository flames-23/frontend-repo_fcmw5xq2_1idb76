import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16 flex flex-col items-start">
        <motion.span 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/70 bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-white/10">
          Senior Software Engineer • 7+ years • 6 projects shipped
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.35 }}
          className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
          Building remarkable digital products
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-white/80">
          I design, architect and ship reliable web apps end‑to‑end — from polished frontends to robust APIs — with a focus on performance, UX, and maintainability.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.65 }}
          className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="px-5 py-3 rounded-md bg-white text-black font-semibold hover:bg-white/90 transition-colors">View Projects</a>
          <a href="#contact" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors">Contact Me</a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs">Scroll</div>
    </section>
  )
}
