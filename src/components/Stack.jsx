import { FadeUp, SectionHeading } from './ui'
import { STACK } from '../data/portfolioData'

export default function Stack() {
  return (
    <section id="stack" className="py-[120px] px-[5%] bg-bg-card">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading label="Tech Stack" title="Tools of the trade." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          {STACK.map((s, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div className="card-glass p-6">
                <div className="text-xs font-bold text-accent-primary tracking-[0.12em] uppercase mb-4 font-mono">
                  0{i + 1} · {s.group}
                </div>

                <div className="flex flex-wrap gap-2">
                  {s.items.map(item => (
                    <span
                      key={item}
                      className="text-[13px] px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-fg-light"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}