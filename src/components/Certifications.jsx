import { FadeUp, SectionHeading } from './ui'
import { CERTIFICATIONS } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certs" className="py-[120px] px-[5%] max-w-[900px] mx-auto">
      <SectionHeading label="Credentials" title="Certifications & Training." />

      <div className="flex flex-col gap-4">
        {CERTIFICATIONS.map((c, i) => (
          <FadeUp key={i} delay={i * 80}>
            <div className="card-glass p-5 md:p-6 flex items-center gap-5">
              <div className="font-mono text-[13px] text-accent-primary font-bold min-w-[40px]">
                {c.year}
              </div>

              <div className="flex-1">
                <div className="font-semibold text-base">{c.title}</div>
                <div className="text-[13px] text-fg-muted">{c.org}</div>
              </div>

              {c.note && (
                <span className="text-[11px] text-green-400 bg-[rgba(74,222,128,0.1)] border border-[rgba(74,222,128,0.3)] rounded-full px-2.5 py-0.5 font-semibold whitespace-nowrap">
                  {c.note}
                </span>
              )}
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}