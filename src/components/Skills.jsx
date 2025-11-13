import { motion } from 'framer-motion'
import { Code2, Server, Layout, Rocket } from 'lucide-react'

const skills = [
  { icon: <Layout />, title: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { icon: <Server />, title: 'Backend', items: ['FastAPI', 'Node.js', 'MongoDB', 'Postgres'] },
  { icon: <Code2 />, title: 'Languages', items: ['TypeScript', 'Python', 'Go', 'SQL'] },
  { icon: <Rocket />, title: 'Ops', items: ['CI/CD', 'Docker', 'Vercel', 'Cloudflare'] }
]

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0b0b0f] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-white">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">Skills</motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <div className="text-white/90">{s.icon}</div>
              <div className="mt-3 text-lg font-semibold">{s.title}</div>
              <ul className="mt-2 text-sm text-white/70 list-disc list-inside">
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
