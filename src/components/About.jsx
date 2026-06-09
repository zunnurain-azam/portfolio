import { FadeUp, SectionHeading } from './ui'
import { ABOUT_CARDS } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-[120px] px-[5%] max-w-[1100px] mx-auto">
      <SectionHeading label="About Me" title="Passionate developer who builds." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <FadeUp delay={0}>
          <div>
            <p className="text-base text-fg-muted leading-relaxed mb-5">
              Full Stack Developer based in Pakistan, with hands-on experience in <span className="text-accent-primary">Laravel, CodeIgniter, React.js, PHP, and MySQL</span>. Completed a Backend Developer Internship at Ovex Technologies, building RESTful APIs and scalable backend solutions.
            </p>
            <p className="text-base text-fg-muted leading-relaxed mb-5">
              Currently expanding expertise in the <span className="text-accent-primary">MERN stack</span> (MongoDB, Express.js, React.js, Node.js). Built production-ready applications including a travel booking platform, Excel data extractor, and emergency panic care mobile app.
            </p>
            <p className="text-base text-fg-muted leading-relaxed">
              I write clean, maintainable code and believe in continuous learning. Passionate about{' '}
              <em className="text-fg-light">problem-solving</em> and creating solutions that make a difference.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_CARDS.map((c) => (
              <div key={c.title} className="card-glass p-5">
                <div className="text-[28px] mb-2.5">{c.icon}</div>
                <div className="font-semibold text-sm mb-1.5">{c.title}</div>
                <div className="text-[13px] text-fg-muted leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}