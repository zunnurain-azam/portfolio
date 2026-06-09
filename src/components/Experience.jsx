import { FadeUp, SectionHeading, Tag } from './ui'
import { EXPERIENCE } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-[120px] px-[5%] bg-bg-card relative">
      <div className="max-w-[900px] mx-auto">
        <SectionHeading label="Career" title="Where I've worked." />

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent-secondary to-transparent" />

          <div className="flex flex-col gap-10 pl-8">
            {EXPERIENCE.map((exp, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="relative">
                  <div className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full ${exp.badge ? 'bg-accent-primary' : 'bg-bg-elevated'} border-2 border-accent-primary`} />

                  <div className="card-glass p-6 md:p-7">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                      <div>
                        <div className="text-[11px] text-fg-muted font-mono mb-1">{exp.period}</div>
                        <h3 className="text-lg font-bold">{exp.role}</h3>
                        <div className="text-sm text-accent-primary font-medium">
                          {exp.company} · <span className="text-fg-muted">{exp.location}</span>
                        </div>
                      </div>

                      {exp.badge && (
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[rgba(99,102,241,0.15)] text-accent-primary border border-[rgba(99,102,241,0.18)] font-semibold">
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-fg-muted leading-relaxed mb-3.5">{exp.desc}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map(t => <Tag key={t} label={t} />)}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}