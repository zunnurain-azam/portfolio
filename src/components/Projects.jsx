import { FadeUp, SectionHeading, Tag } from './ui'
import { PROJECTS } from '../data/portfolioData'

function ProjectCard({ project, index }) {
  const { title, type, desc, tags, links, featured } = project

  return (
    <FadeUp delay={index * 80}>
      <div className={`card-glass p-7 h-full flex flex-col ${featured ? 'border border-[rgba(99,102,241,0.5)] col-span-full' : ''}`}>
        <div className={`text-[11px] font-bold uppercase mb-2 ${featured ? 'tracking-[0.15em] text-accent-primary' : 'tracking-[0.08em] text-fg-muted'}`}>
          {featured ? `★ Featured · ${type}` : type}
        </div>

        <h3 className={`font-bold mb-2.5 ${featured ? 'text-2xl md:text-[26px]' : 'text-lg'}`}>{title}</h3>

        <p className="text-sm text-fg-muted leading-relaxed flex-1 mb-4">{desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map(t => <Tag key={t} label={t} />)}
        </div>

        <div className="flex gap-3">
          {links.map(l => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] font-semibold text-accent-primary border border-[rgba(99,102,241,0.3)] rounded-md px-3.5 py-1.5 transition-all duration-200 hover:bg-[rgba(99,102,241,0.12)]"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </FadeUp>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-[120px] px-[5%] max-w-[1200px] mx-auto">
      <SectionHeading label="Selected Work" title="Projects I'm proud of." />

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}