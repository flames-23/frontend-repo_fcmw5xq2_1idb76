import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Thanks! I will get back to you shortly.'), 800)
  }

  return (
    <section id="contact" className="bg-black py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-white">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">Contact</motion.h2>
        <form onSubmit={submit} className="mt-6 grid gap-4">
          <input className="bg-white/[0.04] border border-white/10 rounded-md px-4 py-3" placeholder="Your name" required />
          <input type="email" className="bg-white/[0.04] border border-white/10 rounded-md px-4 py-3" placeholder="Email" required />
          <textarea rows="4" className="bg-white/[0.04] border border-white/10 rounded-md px-4 py-3" placeholder="Tell me about your project" required />
          <button className="mt-2 inline-flex justify-center px-5 py-3 rounded-md bg-white text-black font-semibold hover:bg-white/90 transition-colors">Send</button>
          {status && <p className="text-white/80">{status}</p>}
        </form>
      </div>
    </section>
  )
}
