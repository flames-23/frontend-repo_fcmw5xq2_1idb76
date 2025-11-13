import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    desc: 'Websocket powered docs, comments, and presence with role-based access.',
    tags: ['React', 'FastAPI', 'WebSockets', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    title: 'E‑commerce Platform',
    desc: 'Headless storefront with dynamic pricing, search, and analytics.',
    tags: ['Next.js', 'Stripe', 'Postgres', 'Prisma'],
    link: '#',
    github: '#'
  },
  {
    title: 'AI Resume Matcher',
    desc: 'Embeddings-based matching of CVs to job descriptions with scoring.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'Pinecone'],
    link: '#',
    github: '#'
  },
  {
    title: 'IoT Fleet Dashboard',
    desc: 'MQTT ingestion, geofencing alerts, and live telemetry maps.',
    tags: ['React', 'Mapbox', 'MQTT', 'Timeseries'],
    link: '#',
    github: '#'
  },
  {
    title: 'Design System',
    desc: 'Themeable components with tokens, accessibility, and docs site.',
    tags: ['Storybook', 'Radix', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    title: 'Analytics Pipeline',
    desc: 'Batch + stream ETL with dashboards and anomaly detection.',
    tags: ['Python', 'Airflow', 'BigQuery'],
    link: '#',
    github: '#'
  }
]

function Chip({ children }) {
  return <span className="px-2 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/80">{children}</span>
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 bg-[#070709] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white">Selected Work</motion.h2>
        <p className="mt-2 text-white/70">A few projects that showcase my range across frontend, backend, and systems.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition">
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white group-hover:text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <Chip key={t}>{t}</Chip>)}</div>
              </div>
              <div className="px-5 pb-5 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm"><ExternalLink size={16}/> Live</a>
                <a href={p.github} className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm"><Github size={16}/> Code</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
