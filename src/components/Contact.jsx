import { FadeUp, SectionHeading, MagneticButton } from './ui'
import { SOCIAL_LINKS } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="py-[120px] px-[5%] bg-bg-card">
      <div className="max-w-[600px] mx-auto text-center">
        <SectionHeading label="Get in touch" title="Let's build something great." />

        <FadeUp delay={0}>
          <p className="text-fg-muted text-base leading-relaxed mb-10">
            Open to roles, freelance projects, and collaborations. I usually reply within 24 hours.
          </p>
        </FadeUp>

        <FadeUp delay={100}>
          <div className="flex flex-col gap-3.5">
            <input className="input-field" placeholder="Your Name" />
            <input className="input-field" placeholder="Your Email" type="email" />
            <textarea className="input-field" placeholder="Your Message" rows={5} style={{ resize: 'vertical' }} />
            <MagneticButton>
              <button className="btn-primary w-full justify-center py-3.5">
                Send Message →
              </button>
            </MagneticButton>
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <div className="flex gap-6 justify-center mt-10 flex-wrap">
            {[{ label: 'naniali405@gmail.com', url: 'mailto:naniali405@gmail.com' }, ...SOCIAL_LINKS.slice(0, 2)].map(s => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-fg-muted transition-colors duration-200 hover:text-accent-primary"
              >
                {s.label}
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}