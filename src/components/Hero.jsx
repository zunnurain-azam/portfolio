import { FadeUp, GlitchText, Typewriter, CountUp, MagneticButton } from './ui'
import { SOCIAL_LINKS, STATS } from '../data/portfolioData'
import profilePic from '../assets/img2.png'

const TYPEWRITER_WORDS = ['Laravel apps.', 'React interfaces.', 'RESTful APIs.', 'mobile solutions.', 'clean code.']

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-[5%] pt-20 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[length:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_40%,transparent_100%)]" />

      {/* Glowing orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)] -top-[10%] -left-[10%] blur-[40px]" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.1)_0%,transparent_70%)] bottom-[5%] -right-[5%] blur-[40px]" />

      <div className="relative z-[1] w-full max-w-[1100px] mx-auto">
        
        {/* Status badge - Top center on both views */}
        <FadeUp delay={0}>
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.3)] rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              <span className="text-xs font-medium text-fg-muted tracking-wide">
                Open to opportunities · Pakistan
              </span>
            </div>
          </div>
        </FadeUp>

        {/* Main Content - Side by Side on Desktop, Stack on Mobile */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center md:text-left">
            <FadeUp delay={100}>
              <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.2] mb-4 tracking-tighter">
                <GlitchText text="Zunnurain" />{' '}
                <span className="text-accent-primary">Azam</span>
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="text-[clamp(1rem,2.5vw,1.2rem)] font-mono mb-4 text-fg-muted">
                I build <Typewriter words={TYPEWRITER_WORDS} />
              </div>
            </FadeUp>

            <FadeUp delay={300}>
              <p className="text-[15px] md:text-[16px] text-fg-muted max-w-[550px] mx-auto md:mx-0 mb-8 leading-relaxed">
                Full Stack Developer specializing in Laravel, React.js & MERN Stack.
                Built production-ready applications and RESTful APIs.
              </p>
            </FadeUp>

            <FadeUp delay={400}>
              <div className="flex gap-3.5 justify-center md:justify-start flex-wrap">
                <MagneticButton onClick={() => scrollTo('projects')}>
                  <span className="btn-primary">View Projects →</span>
                </MagneticButton>
                <MagneticButton href="mailto:naniali405@gmail.com">
                  <a className="btn-outline">Contact Me</a>
                </MagneticButton>
                <MagneticButton href="/Zunnurain_Azam_CV.pdf">
                  <a className="btn-outline">Download CV ↓</a>
                </MagneticButton>
              </div>
            </FadeUp>

            {/* Social Links */}
            <FadeUp delay={500}>
              <div className="flex gap-5 justify-center md:justify-start mt-8 flex-wrap">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-fg-muted border-b border-[rgba(148,163,184,0.3)] pb-0.5 transition-all duration-200 hover:text-accent-primary hover:border-accent-primary"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right Side - Profile Picture */}
          <FadeUp delay={50}>
            <div className="flex-shrink-0">
              <div className="relative group">
                {/* Glowing ring effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-accent-primary/50 shadow-2xl">
                  <img 
                    src={profilePic} 
                    alt="Zunnurain Azam" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeUp>

        </div>

        {/* Stats - Below everything */}
        <FadeUp delay={600}>
          <div className="flex gap-8 md:gap-12 justify-center mt-12 pt-8 border-t border-[rgba(99,102,241,0.18)] flex-wrap">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[1.5rem] md:text-[2rem] font-bold text-accent-primary leading-none font-mono">
                  <CountUp end={s.num} suffix={s.suffix} />
                </div>
                <div className="text-[11px] md:text-xs text-fg-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  )
}