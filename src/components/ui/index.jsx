import { useState, useEffect, useRef } from 'react'
import { useInView } from '../../hooks/useInView'


export function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function SplitText({ text, delay = 0, stagger = 30, style = {} }) {
  const [ref, visible] = useInView(0.1)
  return (
    <span ref={ref} className="inline-block" style={style}>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: `opacity 0.5s ease ${delay + i * stagger}ms, transform 0.5s ease ${delay + i * stagger}ms`,
            whiteSpace: ch === ' ' ? 'pre' : 'normal',
          }}
        >
          {ch}
        </span>
      ))}
    </span>
  )
}

export function GlitchText({ text, style = {} }) {
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true)
      setTimeout(() => setGlitching(false), 200)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className="relative inline-block"
      style={{
        animation: glitching ? 'glitch 0.2s steps(2) forwards' : 'none',
        ...style,
      }}
    >
      {text}
    </span>
  )
}

export function Typewriter({ words }) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[idx % words.length]
    const speed = deleting ? 50 : 100

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1200)
        return
      }
      if (deleting && text === '') {
        setDeleting(false)
        setIdx(i => i + 1)
        return
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, speed)

    return () => clearTimeout(timer)
  }, [text, deleting, idx, words])

  return (
    <span className="text-accent-primary border-r-2 border-accent-primary pr-1">
      {text}
    </span>
  )
}

export function CountUp({ end, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0)
  const [ref, visible] = useInView()

  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [visible, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export function MagneticButton({ children, onClick, href, style = {} }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  const handleMouseLeave = () => {
    ref.current.style.transform = 'translate(0,0)'
  }

  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block cursor-pointer bg-none border-none p-0"
      style={{
        transition: 'transform 0.3s cubic-bezier(.23,1,.32,1)',
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}

export function Tag({ label }) {
  return (
    <span className="text-[11px] font-semibold tracking-[0.08em] px-2.5 py-0.5 rounded-full border border-[rgba(99,102,241,0.4)] text-[#818cf8] bg-[rgba(99,102,241,0.08)] inline-block">
      {label}
    </span>
  )
}

export function SectionHeading({ label, title }) {
  const [ref, visible] = useInView()
  return (
    <div ref={ref} className="mb-12 text-center">
      <p
        className="text-xs tracking-[0.2em] text-accent-primary uppercase font-semibold mb-3 transition-opacity duration-600"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {label}
      </p>
      <h2
        className="text-[clamp(2rem,5vw,3rem)] font-space font-bold text-fg-light leading-[1.1] transition-all duration-700 delay-100"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(20px)',
        }}
      >
        {title}
      </h2>
    </div>
  )
}