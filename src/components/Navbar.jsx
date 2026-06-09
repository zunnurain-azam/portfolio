import { useState } from 'react'
import { NAV_ITEMS, SOCIAL_LINKS } from '../data/portfolioData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false) // Drawer close after navigation
  }

  // Get email and social links from portfolioData
  const emailLink = SOCIAL_LINKS.find(link => link.label === 'Email')?.url || 'mailto:naniali405@gmail.com'
  const githubLink = SOCIAL_LINKS.find(link => link.label === 'GitHub')?.url || 'https://github.com/zunnurain-azam'
  const linkedinLink = SOCIAL_LINKS.find(link => link.label === 'LinkedIn')?.url || 'https://linkedin.com/in/zunnurain-azam'

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-[5%] h-16 flex items-center justify-between border-b border-[rgba(99,102,241,0.1)] bg-[#060810]/80 backdrop-blur-xl">
        {/* Logo */}
        <span className="font-mono text-lg font-bold text-accent-primary">
          ZA<span className="text-fg-muted text-sm font-normal">.dev</span>
        </span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map((n) => (
            <button key={n} className="nav-link" onClick={() => scrollTo(n.toLowerCase())}>
              {n}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-[101]"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Available Badge - Desktop */}
        <div className="hidden md:flex items-center gap-2 text-xs text-green-400 font-medium">
          <span className="relative w-2 h-2 rounded-full bg-green-400 inline-block">
            <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse-ring" />
          </span>
          Available
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#0d1117] border-l border-[rgba(99,102,241,0.2)] z-[100] flex flex-col transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-[rgba(99,102,241,0.1)]">
          <span className="font-mono text-lg font-bold text-accent-primary">
            ZA<span className="text-fg-muted text-sm font-normal">.dev</span>
          </span>
          
          {/* Available Badge - Mobile */}
          <div className="flex items-center gap-2 text-xs text-green-400 font-medium">
            <span className="relative w-2 h-2 rounded-full bg-green-400 inline-block">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse-ring" />
            </span>
            Available
          </div>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex-1 flex flex-col p-6 gap-4">
          {NAV_ITEMS.map((n, index) => (
            <button
              key={n}
              onClick={() => scrollTo(n.toLowerCase())}
              className="nav-link text-left text-base py-3 px-4 rounded-lg hover:bg-[rgba(99,102,241,0.1)] transition-all duration-200"
              style={{
                animation: isOpen ? `fadeIn 0.3s ease ${index * 0.05}s forwards` : 'none',
                opacity: 0,
                transform: 'translateX(20px)'
              }}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Drawer Footer - Social Links */}
        <div className="p-6 border-t border-[rgba(99,102,241,0.1)]">
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 justify-center">
              <a 
                href={emailLink}
                className="text-fg-muted hover:text-accent-primary transition-colors text-sm"
              >
                Email
              </a>
              <a 
                href={githubLink}
                target="_blank" 
                rel="noreferrer"
                className="text-fg-muted hover:text-accent-primary transition-colors text-sm"
              >
                GitHub
              </a>
              <a 
                href={linkedinLink}
                target="_blank" 
                rel="noreferrer"
                className="text-fg-muted hover:text-accent-primary transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
            {/* Phone Number */}
            <div className="text-center mt-2">
              <a 
                href="tel:+923243449544"
                className="text-xs text-fg-muted hover:text-accent-primary transition-colors"
              >
                +92 324 3449544
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes to global.css */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}