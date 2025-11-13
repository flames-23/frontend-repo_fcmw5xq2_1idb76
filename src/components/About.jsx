import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="bg-black py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-white">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">About</motion.h2>
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-white/80 leading-relaxed">
            <p>
              I’m a software engineer with 7 years of experience building web applications that scale. I partner closely with designers, PMs, and stakeholders to ship user‑centered products with measurable impact.
            </p>
            <p className="mt-4">
              My strengths: product thinking, system design, clean architectures, performance, accessibility, and crisp visual polish. I love turning ambiguity into shippable outcomes.
            </p>
          </div>
          <div className="space-y-3">
            <Stat kpi="7+" label="Years Experience" />
            <Stat kpi="6" label="End‑to‑end Projects" />
            <Stat kpi="20+" label="Features Led" />
            <Stat kpi="99.9%" label="Uptime on critical services" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ kpi, label }) {
  return (
    <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10">
      <div className="text-3xl font-bold">{kpi}</div>
      <div className="text-white/70 text-sm">{label}</div>
    </div>
  )
}
